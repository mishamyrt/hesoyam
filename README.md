# 🎮 Hesoyam

The library provides an engine for entering cheat codes in your web applications. For example, this is how you can hide some functionality without resorting to feature toggles or inject an easter egg.

- **Framework agnostic**.
- **Zero dependencies**

## How does it work?

Cheat codes are [encoded](scripts/encode.ts) into a special number so that they can be kept open source without fear of easy decryption. For example:

- `hesoyam` — 117499400
- `panzer` — 100663304

When the listener is activated, the library records all keystrokes and calls a callback as soon as the buffer contains the necessary code.

## Installation

```bash
pnpm add hesoyam
```

## Usage

```ts
import { createCheatsListener } from 'hesoyam'

const { start } = createCheatsListener({
  onCheat: (code) => {
    console.log('Got code', code)
  },
  cheats: {
    hesoyam: 117499400,
  }
})

start()
```
