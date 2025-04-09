import {
    compress_prepend_size,
    decompress_size_prepended,
    compress as wasmCompress,
    decompress as wasmDecompress,
} from '../rust/pkg/node/lz4_wasm';

export const compress = (data: Uint8Array) => wasmCompress(data);
export const compressPrependSize = (data: Uint8Array) => compress_prepend_size(data);
export const decompressSizePrepended = (data: Uint8Array) => decompress_size_prepended(data);

export function decompress(data: Uint8Array, minUncompressedSize: number) {
    return wasmDecompress(data, minUncompressedSize);
}
