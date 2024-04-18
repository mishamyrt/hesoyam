import { findCheat } from './find.js'
import type { CheatListener, CheatsConfig, CheatMap } from './types.js'

function findLongestCheat (cheats: CheatMap): number {
  let max = 0
  for (const key in cheats) {
    const length = cheats[key] >> 24
    if (length > max) {
      max = length
    }
  }
  return max
}

export function createCheatsListener ({
  onCheat,
  onKey,
  cheats
}: CheatsConfig): CheatListener {
  const codeBuffer: number[] = []
  const limit = findLongestCheat(cheats)

  function handleKeyDown (event: KeyboardEvent) {
    if (onKey) {
      onKey(event.code)
    }
    if (codeBuffer.length >= limit) {
      codeBuffer.shift()
    }
    if (event.code.startsWith('Key') && event.code.length === 4) {
      codeBuffer.push(event.code[3].toLowerCase().charCodeAt(0))
    }
    const cheat = findCheat(codeBuffer, cheats)
    if (cheat !== null) {
      codeBuffer.length = 0
      onCheat(cheat)
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
