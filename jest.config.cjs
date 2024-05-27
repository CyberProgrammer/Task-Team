module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
    moduleNameMapper: {
        "\\.(css|less|scss)$": "<rootDir>/src/__mocks__/empty.mock.css",
        "\\.(svg)$": "<rootDir>/src/__mocks__/fileMock.js"
    }
};
