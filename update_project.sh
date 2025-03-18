#!/bin/bash

# Prompt user for the GitHub repository URL
read -p "Enter the raw GitHub repository URL (e.g., https://raw.githubusercontent.com/your-username/your-repo/main): " GITHUB_REPO

# Validate input
if [[ -z "$GITHUB_REPO" ]]; then
  echo "Error: Repository URL cannot be empty."
  exit 1
fi

PROJECT_DIR=$(pwd) # Assume script runs inside the project directory

echo "Updating App.tsx from GitHub..."
curl -s -o "$PROJECT_DIR/App.tsx" "$GITHUB_REPO/App.tsx"

echo "Removing existing src folder..."
rm -rf "$PROJECT_DIR/src"

echo "Downloading updated src folder..."
mkdir -p "$PROJECT_DIR/src"
wget -q -r -np -nH --cut-dirs=2 --reject "index.html*" "$GITHUB_REPO/src/" -P "$PROJECT_DIR/src"

echo "Update completed successfully!"
