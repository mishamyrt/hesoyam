import { it, describe, expect } from 'vitest'

import { encode, encodeString } from '../encode.js'

describe('encode', () => {
  it('correctly encodes a number array', () => {
    expect(encode([0x01, 0x02, 0x03, 0x04])).toBe(67110148)
    expect(encode([0xFF, 0x20, 0x30, 0x40, 0x50])).toBe(84049413)
    expect(encode([0x10, 0x25, 0xFF, 0x0B, 0x06, 0x08])).toBe(100943878)
  })

  it('correctly handles empty array', () => {
    expect(encode([])).toBe(0)
  })
})

describe('encodeString', () => {
  it('correctly encodes a string', () => {
    expect(encodeString('hello')).toBe(83914500)
    expect(encodeString('hesoyam')).toBe(117499400)
    expect(encodeString('panzer')).toBe(100663304)
  })

  it('correctly handles empty string', () => {
    expect(encodeString('')).toBe(0)
  })
})
