export type CheatMap = Record<string, number>

export type CheatsConfig = {
  onCheat: (name: string) => void
  onKey?: (code: string) => void
  cheats: Record<string, number>
}

export type CheatListener = {
  start: () => void
  stop: () => void
}
