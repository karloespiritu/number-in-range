'use strict';

module.exports = function(n, min, max) {

  if (arguments.length <= 2) {

    if (arguments.length === 1) {
      throw new SyntaxError('Expected number of arguments should be at least 2')
    } else {
      max = min
      min = 0
    }
  }

  if (typeof n !== 'number'
    || typeof min !== 'number'
    || typeof max !== 'number') {

    throw new TypeError('Expected all arguments to be numbers')
  }

  if (min > max) {
    throw new RangeError('Expected minimum range to be <= max')
  }

  return n >= Math.min(min, max) && n <= Math.max(max, min)
}