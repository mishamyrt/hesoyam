<p align="center">
  <img width="350" src="./docs/logo.svg" alt="hesoyam logo" />
  <br />
  <br />
  Minimal old-school hidden features for your web applications.
</p>

---

<p align="center">
  <a href="https://github.com/mishamyrt/hesoyam/actions/workflows/qa.yaml">
    <img src="https://github.com/mishamyrt/hesoyam/actions/workflows/qa.yaml/badge.svg" alt="Quality Assurance" />
  </a>
  <a href="https://npmjs.com/package/hesoyam">
    <img src="https://img.shields.io/npm/v/hesoyam.svg?color=red" alt="NPM Version" />
  </a>
</p>

The library provides an engine for entering cheat codes in your web applications. For example, this is how you can hide some functionality without resorting to feature toggles or inject an easter egg.

- **Framework agnostic**.
- **Zero dependencies**
- **Less then kilobyte (even without GZip)**

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
import { createCheatsListener } from 'hesoyam';

const HESOYAM = 117499400;

const { start } = createCheatsListener({
  onCheat: (code) => {
    if (code === HESOYAM) {
      console.log('Got hesoyam code', code);
    }
  },
  cheats: [HESOYAM],
});

start();
```