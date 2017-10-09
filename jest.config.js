module.exports = {
  transform: {
    '^.+\\.ts$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'js', 'json']
}
