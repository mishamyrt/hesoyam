/**
 * Encodes a number array into a hash number
 * @param {number[]} input
 * @returns {number}
 */
export function encode (input) {
  let delta = 0
  let checksum = 0
  for (let i = 0; i < input.length; i += 1) {
    const code = input[i]
    if (i % 2 === 0) {
      delta += code
    } else {
      delta *= (code % 3)
    }
    checksum += code % 3
  }
  const high = delta >> 8
  const low = delta & 0xff
  return [
    input.length,
    high,
    low,
    checksum
  ].reduce((acc, value) => acc << 8 | value, 0)
}

/**
 * Encodes a string into a hash number
 * @param {string} input
 * @returns {number}
 */
export function encodeString (input) {
  return encode(input.split('').map(c => c.charCodeAt(0)))
}
