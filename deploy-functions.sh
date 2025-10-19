#!/bin/bash

echo "🚀 Deploying Firebase Functions for EFOLIO Task 9..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Installing..."
    npm install -g firebase-tools
fi

# Check if user is logged in
if ! firebase projects:list &> /dev/null; then
    echo "🔐 Please login to Firebase first:"
    firebase login
fi

# Install dependencies
echo "📦 Installing function dependencies..."
cd functions
npm install

# Deploy functions
echo "🚀 Deploying functions..."
cd ..
firebase deploy --only functions

echo "✅ Firebase Functions deployed successfully!"
echo "📸 You can now take screenshots for EFOLIO Task 9"
