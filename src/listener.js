// @ts-check
import { findCheat } from './find.js'

/**
 * @typedef {Object} CheatsConfig
 * @property {(name: string) => void} handle
 * @property {import('./find').CheatMap} cheats
 */

/**
 *
 * @param {import('./find').CheatMap} cheats
 * @returns {number}
 */
function findLongestCheat (cheats) {
  let max = 0
  for (const key in cheats) {
    if (key.length > max) {
      max = key.length
    }
  }
  return max
}

/**
 *
 * @param {CheatsConfig} config
 * @returns
 */
export function createCheatsListener ({ handle, cheats }) {
  const codeBuffer = []
  const limit = findLongestCheat(cheats)

  function handleKeyDown (event) {
    if (codeBuffer.length >= limit) {
      codeBuffer.shift()
    }
    if (event.code.startsWith('Key') && event.code.length === 4) {
      codeBuffer.push(event.code[3].toLowerCase().charCodeAt(0))
    }
    const cheat = findCheat(codeBuffer, cheats)
    if (cheat !== null) {
      codeBuffer.length = 0
      handle(cheat)
    }
  }

  return {
    start: () => {
      document.addEventListener('keydown', handleKeyDown)
    },
    stop: () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }
}
