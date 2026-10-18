#!/usr/bin/env bash
set -o errexit

# Borrar cualquier caché previa del sistema
rm -rf /opt/render/project/src/.cache
rm -rf /opt/render/.cache

npm install
