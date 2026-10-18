#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install dependencies
npm install

# Download and install Chrome for Puppeteer
npx puppeteer browsers install chrome
