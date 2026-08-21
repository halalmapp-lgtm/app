#!/usr/bin/env bash
# Post a Slack incoming-webhook message for a GitHub Actions event.
set -euo pipefail

if [[ -z "${SLACK_WEBHOOK_URL:-}" ]]; then
  echo "::warning::SLACK_WEBHOOK_URL is not set. Add it under Settings → Secrets and variables → Actions, then re-run this workflow."
  exit 0
fi

EVENT_PATH="${GITHUB_EVENT_PATH:?GITHUB_EVENT_PATH is required}"
EVENT_NAME="${GITHUB_EVENT_NAME:?GITHUB_EVENT_NAME is required}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ ! -f "$EVENT_PATH" ]]; then
  echo "GitHub event file not found: $EVENT_PATH" >&2
  exit 1
fi

payload="$(
  jq -c \
    --arg event_name "$EVENT_NAME" \
    --arg actor "${GITHUB_ACTOR:-unknown}" \
    --arg repo "${GITHUB_REPOSITORY:-halalmapp-lgtm/app}" \
    --arg server "${GITHUB_SERVER_URL:-https://github.com}" \
    -f "$SCRIPT_DIR/slack-notify.jq" \
    "$EVENT_PATH"
)"

if [[ -z "$payload" ]]; then
  echo "No Slack message for ${EVENT_NAME} / ${GITHUB_EVENT_ACTION:-n/a}; skipping."
  exit 0
fi

curl -sS -f -X POST \
  -H "Content-Type: application/json" \
  --data "$payload" \
  "$SLACK_WEBHOOK_URL"

echo
echo "Slack notification sent for ${EVENT_NAME}."
