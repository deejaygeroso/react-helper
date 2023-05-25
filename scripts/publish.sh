#!/bin/bash

# Run pnpm build
echo "Running pNPM Build..."
pnpm affected:build

# Check if pnpm build was successful
if [ $? -ne 0 ]; then
    echo "Error: pnpm build failed."
    exit 1
fi