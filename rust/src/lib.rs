use wasm_bindgen::prelude::{JsValue, wasm_bindgen};

#[wasm_bindgen]
pub fn compress(data: &[u8]) -> Vec<u8> {
    lz4_flex::compress(data)
}

#[wasm_bindgen]
pub fn decompress(data: &[u8], min_uncompressed_size: usize) -> Result<Vec<u8>, JsValue> {
    lz4_flex::decompress(data, min_uncompressed_size)
        .map_err(|e| JsValue::from_str(&format!("Decompression error: {:#?}", e)))
}

#[wasm_bindgen]
pub fn compress_prepend_size(data: &[u8]) -> Vec<u8> {
    lz4_flex::compress_prepend_size(data)
}

#[wasm_bindgen]
pub fn decompress_size_prepended(data: &[u8]) -> Result<Vec<u8>, JsValue> {
    lz4_flex::decompress_size_prepended(data)
        .map_err(|e| JsValue::from_str(&format!("Decompression error: {:#?}", e)))
}
