use lz4_flex::{compress_prepend_size, decompress_size_prepended};
use wasm_bindgen::prelude::{JsValue, wasm_bindgen};

#[wasm_bindgen]
pub fn compress(data: &[u8]) -> Vec<u8> {
    compress_prepend_size(data)
}

#[wasm_bindgen]
pub fn decompress(data: &[u8]) -> Result<Vec<u8>, JsValue> {
    decompress_size_prepended(data)
        .map_err(|e| JsValue::from_str(&format!("Decompression error: {:#?}", e)))
}
