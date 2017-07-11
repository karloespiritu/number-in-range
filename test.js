'use strict'

var test = require('tape')
var numberInRange = require('./')

test('should return correct boolean value', function(t) {
  t.equal(true, numberInRange(0, 0))
  t.equal(true, numberInRange(2, 5), "test 2")
  t.equal(true, numberInRange(2, -Infinity, Infinity))
  t.equal(true, numberInRange(1.2, 1.0, 1.4))
  t.equal(true, numberInRange(-1, -5, 5))
  t.equal(false, numberInRange(5, 2, 4))
  t.end()
})
