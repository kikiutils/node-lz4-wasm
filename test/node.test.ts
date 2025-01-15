import {
    compress,
    compressPrependSize,
    decompress,
    decompressSizePrepended,
} from '../src/node';

describe('node wasm compress and decompress', () => {
    it('should compress data correctly', () => {
        const input = new Uint8Array([
            0x61,
            0x62,
            0x63,
        ]);

        const result = compress(input);
        expect(result).toBeInstanceOf(Uint8Array);
        expect(result.length).toBeGreaterThan(0);
    });

    it('should compress data with size prepended', () => {
        const input = new Uint8Array([
            0x61,
            0x62,
            0x63,
        ]);

        const result = compressPrependSize(input);
        expect(result).toBeInstanceOf(Uint8Array);
        expect(result.length).toBeGreaterThan(input.length);
    });

    it('should decompress data correctly', () => {
        const input = compress(
            new Uint8Array([
                0x61,
                0x62,
                0x63,
            ]),
        );

        const result = decompress(input, 3);
        expect(result).toEqual(
            new Uint8Array([
                0x61,
                0x62,
                0x63,
            ]),
        );
    });

    it('should decompress size-prepended data correctly', () => {
        const input = compressPrependSize(
            new Uint8Array([
                0x61,
                0x62,
                0x63,
            ]),
        );

        const result = decompressSizePrepended(input);
        expect(result).toEqual(
            new Uint8Array([
                0x61,
                0x62,
                0x63,
            ]),
        );
    });
});
