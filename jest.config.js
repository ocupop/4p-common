// The purpose of this configuration is to tell the Jest to execute this setupTests.js
// file when running the tests, so the variables declared as global in this file
// can be used in tests that we are going to write.
module.exports = {
  setupFiles: [
    './setupTests.js',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js',
  ],
  coverageReporters: [
    'html',
  ],
}
