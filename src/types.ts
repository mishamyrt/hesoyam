export type CheatMap = Record<string, number>

type Subscribable = Pick<Window, 'addEventListener' | 'removeEventListener'>

export type CheatsConfig = {
  onCheat: (name: string) => void
  cheats: Record<string, number>
  target?: Subscribable
}

export type CheatListener = {
  start: () => void
  stop: () => void
}
