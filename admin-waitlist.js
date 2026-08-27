(function () {
  const SUPABASE_URL = "https://jphdaraqmtlxraejkosk.supabase.co";
  const ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwaGRhcmFxbXRseHJhZWprb3NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyMDc4NTQsImV4cCI6MjA4Njc4Mzg1NH0.yDf54s3rNcTpWHKdPJx3d8MWIJo7wjJ_vrvLog1IxBk";
  const AUTH_STORAGE_KEY = "sb-jphdaraqmtlxraejkosk-auth-token";
  const SETUP_SQL = "supabase/admin_list_waitlist.sql";

  let rows = [];
  let isAdmin = false;
  let setupNeeded = false;
  let lastError = "";

  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function parseSession(raw) {
    if (!raw) return null;
    try {
      const data = JSON.parse(raw);
      return data.currentSession || data.session || data;
    } catch (_) {
      return null;
    }
  }

  function getSession() {
    const raw =
      window.localStorage.getItem(AUTH_STORAGE_KEY) ||
      Object.keys(localStorage)
        .filter(function (k) {
          return k.indexOf("sb-") === 0 && k.indexOf("-auth-token") !== -1;
        })
        .map(function (k) {
          return localStorage.getItem(k);
        })[0];
    const session = parseSession(raw);
    if (!session || !session.access_token) return null;
    return session;
  }

  async function refreshSession(session) {
    if (!session || !session.refresh_token) return session;
    const response = await fetch(SUPABASE_URL + "/auth/v1/token?grant_type=refresh_token", {
      method: "POST",
      headers: {
        apikey: ANON_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh_token: session.refresh_token }),
    });
    if (!response.ok) return session;
    const next = await response.json();
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(next));
    } catch (_) {
      /* ignore quota / private mode */
    }
    return next;
  }

  function sessionUserId(session) {
    if (!session) return null;
    if (session.user && session.user.id) return session.user.id;
    try {
      const payload = JSON.parse(
        atob(session.access_token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")),
      );
      return payload.sub || null;
    } catch (_) {
      return null;
    }
  }

  async function authedFetch(path, options) {
    let session = getSession();
    if (!session) throw new Error("Sign in with an admin account first.");
    const headers = Object.assign(
      {
        apikey: ANON_KEY,
        Authorization: "Bearer " + session.access_token,
        "Content-Type": "application/json",
      },
      (options && options.headers) || {},
    );
    let response = await fetch(SUPABASE_URL + path, Object.assign({}, options, { headers: headers }));
    if (response.status === 401) {
      session = await refreshSession(session);
      headers.Authorization = "Bearer " + session.access_token;
      response = await fetch(SUPABASE_URL + path, Object.assign({}, options, { headers: headers }));
    }
    return response;
  }

  async function checkAdmin() {
    const session = getSession();
    const userId = sessionUserId(session);
    if (!userId) {
      isAdmin = false;
      return false;
    }
    const response = await authedFetch(
      "/rest/v1/users?select=is_admin&id=eq." + encodeURIComponent(userId),
    );
    if (!response.ok) {
      isAdmin = false;
      return false;
    }
    const data = await response.json();
    isAdmin = !!(data[0] && data[0].is_admin === true);
    return isAdmin;
  }

  function normalizeRows(data) {
    if (!Array.isArray(data)) return [];
    return data.map(function (row) {
      return {
        id: row.id || row.email,
        email: row.email || "",
        source: row.source || "website",
        created_at: row.created_at || row.createdAt || "",
      };
    });
  }

  async function loadWaitlist() {
    setupNeeded = false;
    lastError = "";
    const rpc = await authedFetch("/rest/v1/rpc/admin_list_waitlist_signups", {
      method: "POST",
      body: "{}",
    });
    if (rpc.ok) {
      rows = normalizeRows(await rpc.json());
      rows.sort(function (a, b) {
        return String(b.created_at).localeCompare(String(a.created_at));
      });
      return rows;
    }
    if (rpc.status === 404 || rpc.status === 400) {
      const table = await authedFetch(
        "/rest/v1/waitlist_signups?select=id,email,source,created_at&order=created_at.desc",
      );
      if (table.ok) {
        const data = await table.json();
        if (Array.isArray(data)) {
          rows = normalizeRows(data);
          return rows;
        }
      }
      setupNeeded = true;
      lastError =
        "Admins cannot read waitlist_signups yet. Run " +
        SETUP_SQL +
        " in the Supabase SQL editor, then refresh.";
      rows = [];
      return rows;
    }
    const errText = await rpc.text();
    lastError = "Could not load waitlist (" + rpc.status + "). " + errText.slice(0, 180);
    rows = [];
    return rows;
  }

  function formatWhen(value) {
    if (!value) return "Unknown date";
    const date = new Date(value);
    if (isNaN(date.getTime())) return String(value);
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  function filteredRows() {
    const q = (document.getElementById("hm-waitlist-search") || {}).value || "";
    const needle = q.trim().toLowerCase();
    if (!needle) return rows;
    return rows.filter(function (row) {
      return (
        String(row.email).toLowerCase().indexOf(needle) !== -1 ||
        String(row.source).toLowerCase().indexOf(needle) !== -1
      );
    });
  }

  function renderList() {
    const list = document.getElementById("hm-waitlist-list");
    const status = document.getElementById("hm-waitlist-status");
    const setup = document.getElementById("hm-waitlist-setup");
    const count = document.getElementById("hm-waitlist-count");
    const fabCount = document.getElementById("hm-waitlist-fab-count");
    if (!list) return;
    const visible = filteredRows();
    if (count) count.textContent = String(rows.length);
    if (fabCount) {
      fabCount.textContent = String(rows.length);
      fabCount.hidden = rows.length === 0;
    }
    if (setup) setup.hidden = !setupNeeded;
    if (lastError && !setupNeeded) {
      status.hidden = false;
      status.className = "hm-waitlist-status is-error";
      status.textContent = lastError;
      list.innerHTML = "";
      return;
    }
    if (!visible.length) {
      status.hidden = false;
      status.className = "hm-waitlist-status";
      status.textContent = rows.length ? "No emails match that search." : "No one is on the waitlist yet.";
      list.innerHTML = "";
      return;
    }
    status.hidden = true;
    list.innerHTML = visible
      .map(function (row) {
        return (
          '<article class="hm-waitlist-row">' +
          "<strong>" +
          escapeHtml(row.email) +
          "</strong>" +
          '<div class="hm-waitlist-meta"><span>' +
          escapeHtml(row.source || "website") +
          "</span><span>" +
          escapeHtml(formatWhen(row.created_at)) +
          "</span></div></article>"
        );
      })
      .join("");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function csvEscape(value) {
    const s = String(value == null ? "" : value);
    if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
    return s;
  }

  function exportCsv() {
    const lines = ["email,source,created_at"].concat(
      filteredRows().map(function (row) {
        return [row.email, row.source, row.created_at].map(csvEscape).join(",");
      }),
    );
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "halalmapp-waitlist.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function copyEmails() {
    const text = filteredRows()
      .map(function (row) {
        return row.email;
      })
      .join("\n");
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      window.prompt("Copy emails", text);
    }
  }

  function ensureDom() {
    if (document.getElementById("hm-waitlist-root")) return;
    const root = el('<div id="hm-waitlist-root"></div>');
    root.innerHTML =
      '<button type="button" class="hm-waitlist-fab" id="hm-waitlist-fab" aria-label="Open waitlist">' +
      "Waitlist <span class=\"hm-count\" id=\"hm-waitlist-fab-count\" hidden>0</span></button>" +
      '<div class="hm-waitlist-panel" id="hm-waitlist-panel" role="dialog" aria-modal="true" aria-labelledby="hm-waitlist-title">' +
      '<div class="hm-waitlist-sheet">' +
      '<button type="button" class="hm-waitlist-close" id="hm-waitlist-close">Close</button>' +
      '<div class="hm-waitlist-head"><h2 id="hm-waitlist-title">Launch waitlist</h2>' +
      '<p><span id="hm-waitlist-count">0</span> emails from halalmapp.com</p></div>' +
      '<div class="hm-waitlist-toolbar">' +
      '<input id="hm-waitlist-search" type="search" placeholder="Search by email" autocomplete="off">' +
      '<button type="button" id="hm-waitlist-refresh">Refresh</button>' +
      '<button type="button" id="hm-waitlist-copy">Copy emails</button>' +
      '<button type="button" id="hm-waitlist-csv">Export CSV</button>' +
      "</div>" +
      '<div class="hm-waitlist-setup" id="hm-waitlist-setup" hidden>' +
      "This list is admin-only. Run <code>" +
      SETUP_SQL +
      "</code> once in the Supabase SQL editor (project jphdaraqmtlxraejkosk), then tap Refresh." +
      "</div>" +
      '<div class="hm-waitlist-status" id="hm-waitlist-status">Loading…</div>' +
      '<div class="hm-waitlist-list" id="hm-waitlist-list"></div>' +
      "</div></div>";
    document.body.appendChild(root);

    document.getElementById("hm-waitlist-fab").addEventListener("click", open);
    document.getElementById("hm-waitlist-close").addEventListener("click", close);
    document.getElementById("hm-waitlist-panel").addEventListener("click", function (event) {
      if (event.target.id === "hm-waitlist-panel") close();
    });
    document.getElementById("hm-waitlist-search").addEventListener("input", renderList);
    document.getElementById("hm-waitlist-refresh").addEventListener("click", function () {
      loadWaitlist().then(renderList);
    });
    document.getElementById("hm-waitlist-copy").addEventListener("click", copyEmails);
    document.getElementById("hm-waitlist-csv").addEventListener("click", exportCsv);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") close();
    });
  }

  async function open() {
    ensureDom();
    document.getElementById("hm-waitlist-panel").classList.add("is-open");
    try {
      await loadWaitlist();
    } catch (err) {
      lastError = err && err.message ? err.message : String(err);
    }
    renderList();
  }

  function close() {
    const panel = document.getElementById("hm-waitlist-panel");
    if (panel) panel.classList.remove("is-open");
  }

  async function syncFab() {
    ensureDom();
    try {
      const ok = await checkAdmin();
      const fab = document.getElementById("hm-waitlist-fab");
      if (!fab) return;
      fab.classList.toggle("is-visible", ok);
      if (ok && rows.length === 0) {
        loadWaitlist()
          .then(renderList)
          .catch(function () {});
      }
    } catch (_) {
      const fab = document.getElementById("hm-waitlist-fab");
      if (fab) fab.classList.remove("is-visible");
    }
  }

  window.HalalMappAdminWaitlist = { open: open, close: close, refresh: syncFab };

  function boot() {
    ensureDom();
    syncFab();
    window.addEventListener("storage", syncFab);
    setInterval(syncFab, 8000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
