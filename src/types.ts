type Subscribable = Pick<Window, 'addEventListener' | 'removeEventListener'>

export type CheatsConfig = {
  onCheat: (cheat: number) => void
  cheats: number[]
  target?: Subscribable
}

export type CheatListener = {
  start: () => void
  stop: () => void
}
