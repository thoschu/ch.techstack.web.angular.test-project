module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jasmine': true
  },
  'extends': 'google',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    'curly': 'error',
    'indent': 'warn'
  },
};
