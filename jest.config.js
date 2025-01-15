/** @type {import('jest').Config} */
module.exports = {
    coveragePathIgnorePatterns: ['./rust/pkg'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            { tsconfig: 'tsconfig.jest.json' },
        ],
    },
};
