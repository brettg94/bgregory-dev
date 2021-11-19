#!/bin/sh
set -e

echo "Building client and server..."
yarn build;
echo "CDN Upload..."
yarn cdn-upload;
exit 0;
