/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  fakeTimers: { enableGlobally: true },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};