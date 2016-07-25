# number-in-range [![Build Status](https://travis-ci.org/karloespiritu/number-in-range.svg?branch=master)](https://travis-ci.org/karloespiritu/number-in-range)


Test if a number is in range

## Install

```js
npm install --save number-in-range
```

## Usage

```js
let numberInRange = require('number-in-range')

numberInRange(6, 666) // range = 0..666
// => true

numberInRange(6, 6, 60) // range = 6..60
// => true

numberInRange(6, 3); // range = 0..3
// => true

```