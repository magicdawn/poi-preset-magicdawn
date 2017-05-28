'use strict'

const preset = require('..')

describe('It works', function() {
  it('exports is a function', function() {
    preset.should.type('function')
  })
})