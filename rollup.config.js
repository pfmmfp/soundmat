import pkg from './package.json'

export default [
  {
    input: 'build/main.js',
    output: {
      file: pkg.browser,
      format: 'umd'
    },
    name: 'soundmat'
  },
  {
    input: 'build/main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
]
