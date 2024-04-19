import { findCheat } from './find.js'
import { maxLength } from './length.js'
import type { CheatListener, CheatsConfig } from './types.js'

export function createCheatsListener ({
  onCheat,
  cheats,
  target = document
}: CheatsConfig): CheatListener {
  const codeBuffer: number[] = []
  const limit = maxLength(cheats)

  function handleKeyDown (event: KeyboardEvent) {
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
      target.addEventListener('keydown', handleKeyDown)
    },
    stop: () => {
      target.removeEventListener('keydown', handleKeyDown)
    }
  }
}
