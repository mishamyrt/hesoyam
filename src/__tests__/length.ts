import { it, describe, expect } from 'vitest'

import { extractLength, maxLength } from '../length.js'

describe('extractLength', () => {
  it('correctly extracts length', () => {
    expect(extractLength(0x01000000)).toBe(1)
    expect(extractLength(0x03FFFFFF)).toBe(3)
    expect(extractLength(0x25202030)).toBe(37)
    expect(extractLength(0x11102030)).toBe(17)
  })
})

describe('maxLength', () => {
  it('correctly finds max length', () => {
    expect(maxLength({
      h: 0x01000000,
      he: 0x02000000,
      hes: 0x03000000
    })).toBe(3)

    expect(maxLength({
      hello: 0x05000000,
      world: 0x05000000,
      helloWorld: 0x0A006C07
    })).toBe(10)
  })
})
