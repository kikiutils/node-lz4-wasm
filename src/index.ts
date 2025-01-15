import * as wasmJs from '../rust/pkg/lz4_wasm';
import wasmCore from '../rust/pkg/lz4_wasm_bg.wasm';

// @ts-expect-error Ignore this error.
wasmCore().then(({ instance }) => wasmJs.default(instance));
export const compress = (data: Uint8Array) => wasmJs.compress(data);
export const decompress = (data: Uint8Array) => wasmJs.decompress(data);
