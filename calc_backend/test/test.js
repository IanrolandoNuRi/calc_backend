const assert = require('assert')
const add = require('../calculator')

// eslint-disable-next-line no-undef
describe('Addition', function () {
  // eslint-disable-next-line no-undef
  it('should return the sum of two numbers', function () {
    assert.strictEqual(add(2, 3), 5)
  })
  // eslint-disable-next-line no-undef
  it('should return 0 when adding two zeros', function () {
    assert.strictEqual(add(0, 0), 0)
  })
  // eslint-disable-next-line no-undef
  it('should return a negative sum when adding a negative number', function () {
    assert.strictEqual(add(-5, 3), -2)
  })
})
