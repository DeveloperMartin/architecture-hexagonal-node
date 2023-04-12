import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testMatch: ['**/__test__/**/*.test.ts'],
};

export default config;