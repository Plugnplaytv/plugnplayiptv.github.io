#!/bin/bash

# ---- CONFIGURATION ----
BRANCH="main"  # or change if you're working from a different branch
REPO_URL="https://github.com/Plugnplaytv/plugnplayiptv.github.io.git"
IMAGE_SOURCE_DIR="./new-images"  # folder where you place new .png/.jpg files
TARGET_DIR="./img"

# ---- CLONE & SYNC ----
echo "Cloning repo..."
git clone "$REPO_URL" site-temp
cd site-temp || exit

echo "Creating image directory if it doesn't exist..."
mkdir -p "$TARGET_DIR"

echo "Copying new images..."
cp -v ../$IMAGE_SOURCE_DIR/*.{png,jpg} "$TARGET_DIR" 2>/dev/null

echo "Staging changes..."
git add "$TARGET_DIR"/*.png "$TARGET_DIR"/*.jpg index.html 2>/dev/null

if git diff --cached --quiet; then
    echo "No changes to commit."
else
    echo "Committing changes..."
    git commit -m "Automated: Add image assets and update HTML references"
    echo "Pushing to $BRANCH branch..."
    git push origin "$BRANCH"
fi

# ---- CLEANUP ----
cd ..
rm -rf site-temp

echo "✅ Deployment complete. Check GitHub Pages in a few seconds!"
