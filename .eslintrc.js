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
    'array-bracket-newline': [ 'error', 'consistent' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'array-element-newline': [ 'error', 'consistent' ],
    'arrow-body-style': [ 'error', 'as-needed' ],
    'arrow-parens': [ 'error', 'always' ],
    'arrow-spacing': [ 'error', { 'before': true, 'after': true } ],
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs' ],
    'class-methods-use-this': ['warn'],
    'camelcase': [ 'error' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': [ 'error' ],
    'comma-style': [ 'error', 'last' ],
    'computed-property-spacing': [ 'error', 'always' ],
    'curly': [ 'error', 'all' ],
    'default-case': [ 'warn' ],
    'dot-location': [ 'error', 'property' ],
    'dot-notation': [ 'error' ],
    'eol-last': [ 'error', 'always' ],
    'eqeqeq': [ 'error', 'always' ],
    'func-call-spacing': [ 'error', 'never' ],
    'func-names': [ 'error', 'as-needed' ],
    'function-paren-newline': [ 'error' ],
    'guard-for-in': [ 'warn' ],
    'global-require': [ 'error' ],
    'handle-callback-err': [ 'error' ],
    'implicit-arrow-linebreak': [ 'error', 'beside' ],
    'indent': [ 'error', 2, { 'SwitchCase': 1 } ],
    'key-spacing': [ 'error', { 'mode': 'minimum', 'align': 'value' } ],
    'keyword-spacing': [ 'error' ],
    'line-comment-position': [ 'error', { 'position': 'above', 'ignorePattern': 'todo|fixme' } ],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-between-class-members': [ 'error', 'always' ],
    'max-classes-per-file': [ 'error', 1 ],
    'max-len': [ 'error', { 'code': 100 } ],
    'max-statements-per-line': [ 'error' ],
    'multiline-comment-style': [ 'error', 'separate-lines' ],
    'no-buffer-constructor': [ 'error' ],
    'no-case-declarations': [ 'error' ],
    'no-confusing-arrow': [ 'error', { 'allowParens': true } ],
    'no-console': [ 'warn' ],
    'no-else-return': [ 'error' ],
    'no-empty-function': [ 'error' ],
    'no-eq-null': [ 'error' ],
    'no-floating-decimal': [ 'error' ],
    'no-invalid-this': [ 'error' ],
    'no-mixed-operators': [ 'error' ],
    'no-multi-assign': [ 'error' ],
    'no-multi-spaces': [ 'error', { 'exceptions': { 'Property': true }, 'ignoreEOLComments': true } ],
    'no-multi-str': [ 'error' ],
    'no-multiple-empty-lines': [ 'error', { 'max': 2, 'maxBOF': 1, 'maxEOF': 1 } ],
    'no-nested-ternary': [ 'error' ],
    'no-new': [ 'error' ],
    'no-new-object': [ 'error' ],
    'no-new-require': [ 'error' ],
    'no-octal-escape': [ 'error' ],
    'no-param-reassign': [ 'error', { 'props': false } ],
    'no-path-concat': [ 'error' ],
    'no-return-assign': [ 'warn' ],
    'no-return-await': [ 'error' ],
    'no-self-compare': [ 'error' ],
    'no-shadow': [ 'error' ],
    'no-shadow-restricted-names': [ 'error' ],
    'no-tabs': [ 'error' ],
    'no-this-before-super': [ 'error' ],
    'no-throw-literal': [ 'error' ],
    'no-trailing-spaces': [ 'error' ],
    'no-unneeded-ternary': [ 'error' ],
    'no-useless-catch': [ 'error' ],
    'no-useless-computed-key': [ 'error' ],
    'no-useless-concat': [ 'error' ],
    'no-useless-return': [ 'warn' ],
    'no-var': [ 'error' ],
    'no-warning-comments': [ 'warn', { 'terms': [ 'todo', 'fixme' ], 'location': 'start' } ],
    'no-whitespace-before-property': [ 'error' ],
    'object-curly-newline': [ 'error' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': [ 'error', { 'allowAllPropertiesOnSameLine': false } ],
    'object-shorthand': [ 'error', 'always' ],
    'operator-linebreak': [ 'error', 'before' ],
    'padded-blocks': [ 'error', 'never' ],
    'prefer-const': [ 'warn' ],
    'prefer-named-capture-group': [ 'warn' ],
    'prefer-promise-reject-errors': [ 'warn' ],
    'prefer-spread': [ 'error' ],
    'prefer-template': [ 'error' ],
    'quotes': [ 'error', 'single' ],
    'require-unicode-regexp': [ 'warn' ],
    'rest-spread-spacing': [ 'error', 'never' ],
    'semi': [ 'error', 'always' ],
    'semi-spacing': [ 'error' ],
    'semi-style': [ 'error', 'last' ],
    'space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'always' ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': [ 'error' ],
    'space-unary-ops': [ 'error', { 'words': true, 'nonwords': false } ],
    'spaced-comment': [ 'error', 'always' ],
    'switch-colon-spacing': [ 'error' ],
    'template-curly-spacing': [ 'error' ],
    'unicode-bom': [ 'error', 'never' ],
    'wrap-regex': [ 'error' ],
  }
};
