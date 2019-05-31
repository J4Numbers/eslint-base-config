# @m4numbers/eslint-base-config

This project contains the base configuration that I, M4Numbers, personally
use when developing in NodeJS. This means that a lot of this is very
opinionated towards my personal development style and towards what I think
looks nice within code.

However, it also means that I don't have to set up something like this
every time I start a new project so... yeah.

## Installation

To use this project, perform the following command:

```bash
npm i --save-dev @m4numbers/eslint-base-config
```

Then create a file called `.eslintrc.js` and fill it with the following:

```js
module.exports = require('@m4numbers/eslint-base-config');
```
