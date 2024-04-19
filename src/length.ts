import { type CheatMap } from './types.js'

/**
 * Extracts the length from an encoded cheat code
 */
export function extractLength (value: number): number {
  return value >> 24
}

/**
 * Finds the longest length in a cheats map
 */
export function maxLength (cheats: CheatMap): number {
  let max = 0
  for (const key in cheats) {
    const length = extractLength(cheats[key])
    if (length > max) {
      max = length
    }
  }
  return max
}
