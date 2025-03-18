#!/bin/bash

# Define repository and branch
GITHUB_REPO="https://github.com/chandannath98/react-native-lite-ui-template.git/main"
PROJECT_DIR=$(pwd) # Assume script runs inside the project directory

echo "Updating App.tsx from GitHub..."
curl -s -o "$PROJECT_DIR/App.tsx" "$GITHUB_REPO/App.tsx"

echo "Removing existing src folder..."
rm -rf "$PROJECT_DIR/src"

echo "Downloading updated src folder..."
mkdir -p "$PROJECT_DIR/src"
wget -q -r -np -nH --cut-dirs=2 --reject "index.html*" "$GITHUB_REPO/src/" -P "$PROJECT_DIR/src"

echo "Update completed successfully!"
