import { encode } from './encode.js'
import { CheatMap } from './types.js'

export function findCheat (input: number[], cheats: CheatMap): string | null {
  const totalLength = Object.keys(cheats).length
  let overflowCount = 0
  for (let i = 0; i < input.length; i += 1) {
    overflowCount = 0
    for (const key in cheats) {
      const value = cheats[key]
      const length = value >> 24
      if (i + length > input.length) {
        overflowCount += 1
        continue
      }
      if (encode(input.slice(i, i + length)) === value) {
        return key
      }
    }
    if (overflowCount === totalLength) {
      return null
    }
  }
  return null
}
