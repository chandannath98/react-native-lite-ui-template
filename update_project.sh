#!/bin/bash

# Prompt user for the GitHub repository URL


GITHUB_REPO="https://github.com/chandannath98/react-native-lite-ui-template.git"


echo "🚨 WARNING: This script will replace your existing App.tsx, src/ folder, and babel.config.js. 🚨"
read -p "Are you sure you want to proceed? (yes/no): " confirmation

if [[ "$confirmation" != "yes" ]]; then
    echo "❌ Operation canceled."
    exit 1
fi

# List of npm packages to install
NPM_PACKAGES=(
  @react-native-async-storage/async-storage
  @react-native-masked-view/masked-view
  @react-navigation/native
  react-native-vector-icons
  axios
  react-native-gesture-handler
  react-native-reanimated
  react-native-screens
  react-native-lite-ui
  @react-navigation/stack
  react-native-safe-area-context
)

# Temporary directory for cloning
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

echo "Replacing babel.config.js..."
cp -f "$TEMP_DIR/babel.config.js" "$PROJECT_DIR/babel.config.js"

# Update android/app/build.gradle (adds a new line at the end)
BUILD_GRADLE_FILE="$PROJECT_DIR/android/app/build.gradle"
NEW_LINE="apply from: file('../../node_modules/react-native-vector-icons/fonts.gradle')"

if ! grep -qF "$NEW_LINE" "$BUILD_GRADLE_FILE"; then
  echo "Updating build.gradle..."
  echo -e "\n$NEW_LINE" >> "$BUILD_GRADLE_FILE"
else
  echo "build.gradle already contains the required line."
fi

# Cleanup temp directory
rm -rf "$TEMP_DIR"

# Install predefined npm packages with --legacy-peer-deps
echo "Installing npm packages..."
npm install ${NPM_PACKAGES[@]} 

# If iOS exists, run pod install
if [ -d "ios" ]; then
  echo "Running pod install for iOS..."
  cd ios && pod install && cd ..
fi

echo "Update and package installation completed successfully!"
