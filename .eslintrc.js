module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018
  },
  'rules': {
    'arrow-body-style': [ 'error', 'as-needed' ],
    'arrow-parens': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'curly': [ 'error', 'all' ],
    'default-case': [ 'warn' ],
    'dot-notation': [ 'error' ],
    'eol-last': [ 'error', 'always' ],
    'eqeqeq': [ 'error', 'always' ],
    'global-require': [ 'error' ],
    'indent': [ 'error', 2, { 'SwitchCase': 1 } ],
    'linebreak-style': [ 'error', 'unix' ],
    'max-classes-per-file': [ 'error', 1 ],
    'no-buffer-constructor': [ 'error' ],
    'no-return-await': [ 'error' ],
    'no-trailing-spaces': [ 'error' ],
    'no-useless-return': [ 'warn' ],
    'no-var': [ 'error' ],
    'prefer-const': [ 'warn' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ]
  }
};
