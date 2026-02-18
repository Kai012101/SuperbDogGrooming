#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Auto-sync started in $ROOT_DIR"
echo "Checking for changes every 20 seconds..."

auto_commit_message() {
  date '+chore: auto sync %Y-%m-%d %H:%M:%S'
}

while true; do
  if [ -n "$(git status --porcelain)" ]; then
    git add -A

    if ! git diff --cached --quiet; then
      git commit -m "$(auto_commit_message)"
      git push
      echo "Changes pushed at $(date '+%Y-%m-%d %H:%M:%S')"
    fi
  fi

  sleep 20
done
