import { encode } from './encode.js'
import { extractLength } from './length.js'

export function findCheat (input: number[], cheats: number[]): number | null {
  for (let i = 0; i < input.length; i += 1) {
    let overflowCount = 0
    for (const value of cheats) {
      const length = extractLength(value)
      if (i + length > input.length) {
        overflowCount += 1
        continue
      }
      if (encode(input.slice(i, i + length)) === value) {
        return value
      }
    }
    if (overflowCount === cheats.length) {
      return null
    }
  }
  return null
}
