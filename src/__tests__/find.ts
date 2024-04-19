import { it, describe, expect } from 'vitest'
import { findCheat } from '../find.js'

const cheats = {
  nuttertools: 0x0B00730B,
  chittychittybb: 0x0E1CF812,
  gesundheit: 0x0A042A0D
}

describe('findCheat', () => {
  it('correctly finds a cheat', () => {
    expect(findCheat([
      99, 110, 117, 116, 116, 101, 114, 116, 111, 111, 108, 115, 11, 13
    ], cheats)).toBe('nuttertools')
    expect(findCheat([
      99, 104, 105, 116, 116, 121, 99, 104, 105, 116, 116, 121, 98, 98
    ], cheats)).toBe('chittychittybb')
    expect(findCheat([
      11, 13, 19, 101, 103, 101, 115, 117, 110, 100, 104, 101, 105, 116
    ], cheats)).toBe('gesundheit')
  })

  it('returns null if no cheat is found', () => {
    expect(findCheat([
      99, 16, 117, 84, 116, 101, 64, 116, 111, 111, 108, 115, 11, 13
    ], cheats)).toBe(null)
  })
})
