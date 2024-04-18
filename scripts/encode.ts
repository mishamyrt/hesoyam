#!/usr/bin/env tsx

import { encodeString } from '../src/encode.js'

function main () {
  const input = process.argv.slice(2)
  const encoded = input.map(encodeString)
  if (encoded.length === 1) {
    console.log(encoded[0])
  } else {
    console.log(encoded)
  }
}

main()
