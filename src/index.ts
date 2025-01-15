import * as wasmJs from '../rust/pkg/lz4_wasm';
import wasmCore from '../rust/pkg/lz4_wasm_bg.wasm';

// @ts-expect-error Ignore this error.
wasmJs.default(wasmCore());
export const compress = (data: Uint8Array) => wasmJs.compress(data);
export const compressPrependSize = (data: Uint8Array) => wasmJs.compress_prepend_size(data);
export const decompress = (data: Uint8Array, minUncompressedSize: number) => wasmJs.decompress(data, minUncompressedSize);
export const decompressSizePrepended = (data: Uint8Array) => wasmJs.decompress_size_prepended(data);
