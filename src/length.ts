/**
 * Extracts the length from an encoded cheat code
 */
export function extractLength (value: number): number {
  return value >> 24
}

/**
 * Finds the longest length in a cheats map
 */
export function maxLength (cheats: number[]): number {
  let max = 0
  for (const value of cheats) {
    const length = extractLength(value)
    if (length > max) {
      max = length
    }
  }
  return max
}
