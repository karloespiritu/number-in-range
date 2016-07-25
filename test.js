'use strict'

// Unit Tests
const test = require('tape')
const numberInRange = require('./index')

console.log(numberInRange(2,0,20.4))


test('should return correct boolean value', function(t) {
  t.plan(6)
  t.equal(true, numberInRange(0, 0), "test 1")
  t.equal(true, numberInRange(2, 5), "test 2")
  t.equal(true, numberInRange(2, -Infinity, Infinity), "test 3")
  t.equal(true, numberInRange(1.2, 1.0, 1.4), "test 4")
  t.equal(true, numberInRange(-1, -5, 5), "test 5")
  t.equal(false, numberInRange(5, 2, 4), "test 6")
  t.end()
})
