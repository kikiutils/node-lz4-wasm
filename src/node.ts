import wasmJs from '../rust/pkg/node/lz4_wasm';

export const compress = (data: Uint8Array) => wasmJs.compress(data);
export const compressPrependSize = (data: Uint8Array) => wasmJs.compress_prepend_size(data);
export const decompressSizePrepended = (data: Uint8Array) => wasmJs.decompress_size_prepended(data);

export function decompress(data: Uint8Array, minUncompressedSize: number) {
    return wasmJs.decompress(data, minUncompressedSize);
}
