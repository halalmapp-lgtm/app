def esc:
  tostring
  | gsub("&"; "&amp;")
  | gsub("<"; "&lt;")
  | gsub(">"; "&gt;");

def link($url; $label):
  "<" + $url + "|" + ($label | esc) + ">";

def actor_name:
  ($actor // "someone") | esc;

def repo_name:
  ($repo // "repository") | esc;

def repo_link:
  link(($server // "https://github.com") + "/" + ($repo // ""); repo_name);

def item_link($node):
  link($node.html_url; ("#" + ($node.number | tostring) + " " + $node.title));

def first_lines($text):
  ($text // "") | split("\n") | .[0:6] | join("\n") | esc;

def commit_lines:
  (.commits // [])[:10]
  | map("• `" + (.id[0:7]) + "` " + ((.message | split("\n")[0]) | esc));

def payload($color; $text; $extra):
  {
    text: $text,
    attachments: [
      {
        color: $color,
        blocks: (
          [
            {
              type: "section",
              text: { type: "mrkdwn", text: $text }
            }
          ]
          + if ($extra | length) > 0 then
              [{
                type: "section",
                text: { type: "mrkdwn", text: $extra }
              }]
            else []
            end
        )
      }
    ]
  };

($event_name // "") as $name
| (.action // "") as $action
| (.issue // .pull_request // null) as $item
| (if $item == null then "" else item_link($item) end) as $item_link
| (
    .assignee.login
    // .requested_reviewer.login
    // ($item.assignee.login // null)
    // "someone"
    | esc
  ) as $assignee
| if $name == "push" then
    payload(
      "#764FA5";
      ":rocket: *" + actor_name + "* pushed "
        + ((.commits | length) | tostring) + " "
        + (if (.commits | length) == 1 then "commit" else "commits" end)
        + " to `" + ((.ref // "") | sub("refs/heads/"; "") | esc) + "` in "
        + repo_link;
      (commit_lines | join("\n"))
        + (if .compare then "\n" + link(.compare; "Compare changes") else "" end)
    )
  elif $name == "issues" then
    if $action == "assigned" then
      payload("#1D9BD1"; ":ticket: *" + actor_name + "* assigned " + $item_link + " to *" + $assignee + "*"; "")
    elif $action == "unassigned" then
      payload("#E01E5A"; ":ticket: *" + actor_name + "* unassigned *" + $assignee + "* from " + $item_link; "")
    elif $action == "opened" then
      payload("#2EB67D"; ":ticket: *" + actor_name + "* opened ticket " + $item_link; first_lines($item.body))
    elif $action == "closed" then
      payload("#616061"; ":white_check_mark: *" + actor_name + "* closed " + $item_link; "")
    elif $action == "reopened" then
      payload("#ECB22E"; ":recycle: *" + actor_name + "* reopened " + $item_link; "")
    else empty
    end
  elif $name == "pull_request" then
    if $action == "opened" or $action == "reopened" or $action == "ready_for_review" then
      payload(
        "#2EB67D";
        ":twisted_rightwards_arrows: *" + actor_name + "* "
          + (if $action == "ready_for_review" then "marked ready for review" else $action end)
          + " " + $item_link;
        first_lines($item.body)
      )
    elif $action == "closed" then
      payload(
        (if (.pull_request.merged // false) then "#2EB67D" else "#616061" end);
        (if (.pull_request.merged // false) then ":white_check_mark: *" else ":no_entry_sign: *" end)
          + actor_name + "* "
          + (if (.pull_request.merged // false) then "merged" else "closed" end)
          + " " + $item_link;
        ""
      )
    elif $action == "review_requested" then
      payload("#ECB22E"; ":eyes: *" + actor_name + "* requested a review from *" + $assignee + "* on " + $item_link; "")
    elif $action == "assigned" then
      payload("#1D9BD1"; ":twisted_rightwards_arrows: *" + actor_name + "* assigned " + $item_link + " to *" + $assignee + "*"; "")
    elif $action == "unassigned" then
      payload("#E01E5A"; ":twisted_rightwards_arrows: *" + actor_name + "* unassigned *" + $assignee + "* from " + $item_link; "")
    elif $action == "converted_to_draft" then
      payload("#616061"; ":pencil: *" + actor_name + "* converted " + $item_link + " to a draft"; "")
    else empty
    end
  elif $name == "pull_request_review" then
    (.review.state // "") as $state
    | payload(
        (
          if $state == "approved" then "#2EB67D"
          elif $state == "changes_requested" then "#E01E5A"
          else "#1D9BD1"
          end
        );
        ":speech_balloon: *" + actor_name + "* "
          + (
              if $state == "approved" then "approved"
              elif $state == "changes_requested" then "requested changes on"
              else "reviewed"
            end
            )
          + " " + $item_link;
        (.review.body // "") | esc
      )
  elif $name == "workflow_dispatch" then
    payload(
      "#1D9BD1";
      ":bell: *" + actor_name + "* sent a test notification from " + repo_link;
      "If you see this in Slack, GitHub → Slack notifications are working."
    )
  else empty
  end
