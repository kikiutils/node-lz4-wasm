import {
    readFileSync,
    writeFileSync,
} from 'node:fs';

import wasm from '@rollup/plugin-wasm';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'ts-project-builder';

export default defineConfig({
    additionalInputPlugins: {
        afterBuiltIns: [
            copy({
                hook: 'writeBundle',
                targets: [
                    {
                        dest: './dist',
                        src: './rust/pkg/node/lz4_wasm_bg.wasm',
                    },
                ],
            }),
            wasm({ sync: ['./rust/pkg/web/lz4_wasm_bg.wasm'] }),
            {
                name: 'replace-esm-output-dirname',
                writeBundle() {
                    let content = readFileSync('./dist/node.mjs', 'utf-8');
                    content = content.replace('__dirname', 'import.meta.dirname');
                    writeFileSync('./dist/node.mjs', content, 'utf-8');
                },
            },
        ],
    },
});
