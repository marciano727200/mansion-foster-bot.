#!/usr/bin/env bash
set -o errexit

npm install

# Limpiar caché vieja de puppeteer si existe
rm -rf /opt/render/project/src/.cache/puppeteer

# Instalar Chrome limpio
npx puppeteer browsers install chrome
