import {
    compress as rustCompress,
    decompress as rustDecompress,
} from '../rust/pkg/kikiutils_lz4_wasm';

export const compress = (data: Uint8Array) => rustCompress(data);
export const decompress = (data: Uint8Array) => rustDecompress(data);
