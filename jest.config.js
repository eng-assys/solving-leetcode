module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './', // Define the root directory for Jest
  testMatch: ['<rootDir>/**/*.test.ts'] // Garantees that all test files are matched
};