/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  globalTeardown: './test-teardown-globals.js',
  preset: 'ts-jest',
  testEnvironment: 'node',
};