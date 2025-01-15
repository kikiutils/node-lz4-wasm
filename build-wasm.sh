#!/bin/bash

set -e
cd ./rust
rm -rf ./pkg
wasm-pack build --no-pack --out-dir=./pkg/node --release --target nodejs
wasm-pack build --no-pack --out-dir=./pkg/web --release --target web
npx eslint --fix --no-ignore './pkg/**/*.js' || true
