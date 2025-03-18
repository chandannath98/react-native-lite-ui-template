#!/bin/bash

echo "🚀 Starting post-install script..."

# Step 1: Install Packages
packages=(
  "react-navigation"
  "react-native-vector-icons"
  "react-redux"
  "redux"
  "redux-thunk"
  "axios"
)

echo "📦 Installing packages: ${packages[*]}"
npm install "${packages[@]}"

if [ $? -eq 0 ]; then
  echo "✅ Packages installed successfully!"
else
  echo "❌ Error installing packages!"
  exit 1
fi

# Step 2: Apply build.gradle Changes
GRADLE_PATH="./android/app/build.gradle"
CUSTOM_GRADLE_PATH="./build.gradle.custom"

if [ -f "$GRADLE_PATH" ] && [ -f "$CUSTOM_GRADLE_PATH" ]; then
  if ! grep -qF "$(cat $CUSTOM_GRADLE_PATH)" "$GRADLE_PATH"; then
    echo "" >> "$GRADLE_PATH"
    cat "$CUSTOM_GRADLE_PATH" >> "$GRADLE_PATH"
    echo "✅ Custom line added to build.gradle"
  else
    echo "⚡ Custom line already exists in build.gradle"
  fi
else
  echo "❌ Could not find build.gradle or build.gradle.custom"
  exit 1
fi

echo "🎉 Post-install tasks completed!"
