# lliw

[![NPM version](https://img.shields.io/npm/v/lliw.svg)](https://www.npmjs.com/package/lliw)

This is a node module for creating strings that use
ANSI color codes. It was created specifically to have
no dependencies.

`lliw` is Welsh for color. Or so I was led to believe.
I'm not Welsh and all the good names were taken.

## Installation
`npm install lliw`

Requires node v8.0.0 or higher.

## Usage
```javascript
const {lliw} = require('lliw');
// typescript: import lliw from require('lliw');

console.log(lliw.red('foo'));
console.log(lliw.red.blackBg('foo'));
console.log(lliw.red.blackBg.underline('foo'));
console.log(lliw.red.blackBg.underline.strikeThrough('foo'));
```

Take a look at [the type declaration](./index.d.ts)
for the full API.

