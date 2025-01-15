#!/bin/bash

set -e
cd ./rust
rm -rf ./pkg
wasm-pack build --no-pack --release
npx eslint --fix ./pkg || true
