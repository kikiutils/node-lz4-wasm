#!/bin/bash

set -e
cd ./rust
rm -rf ./pkg
wasm-pack build --no-pack --release --target web
npx eslint --fix --no-ignore './pkg/**/*.js' || true
