#!/usr/bin/env bash
set -o errexit

npm install

# Forzar la instalación limpia de Puppeteer Chrome
npx puppeteer browsers install chrome-stable
