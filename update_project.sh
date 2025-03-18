#!/bin/bash

# Prompt user for the GitHub repository URL
read -p "Enter the GitHub repository URL (e.g., https://github.com/your-username/your-repo.git): " GITHUB_REPO

# Validate input
if [[ -z "$GITHUB_REPO" ]]; then
  echo "Error: Repository URL cannot be empty."
  exit 1
fi

TEMP_DIR=$(mktemp -d)
PROJECT_DIR=$(pwd)

echo "Cloning repository..."
git clone --depth=1 "$GITHUB_REPO" "$TEMP_DIR"

if [[ $? -ne 0 ]]; then
  echo "Error: Failed to clone repository."
  exit 1
fi

echo "Updating App.tsx..."
cp -f "$TEMP_DIR/App.tsx" "$PROJECT_DIR/App.tsx"

echo "Removing existing src folder..."
rm -rf "$PROJECT_DIR/src"

echo "Copying updated src folder..."
cp -r "$TEMP_DIR/src" "$PROJECT_DIR/src"

# Cleanup
rm -rf "$TEMP_DIR"

echo "Update completed successfully!"
