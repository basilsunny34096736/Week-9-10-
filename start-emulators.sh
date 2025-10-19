#!/bin/bash

# Start Firebase emulators
echo "Starting Firebase emulators..."
firebase emulators:start --only auth,firestore &
EMULATOR_PID=$!

# Wait for emulators to start
sleep 5

# Start the development server
echo "Starting development server..."
npm run dev

# Cleanup function
cleanup() {
    echo "Stopping emulators..."
    kill $EMULATOR_PID
    exit
}

# Trap Ctrl+C
trap cleanup INT
