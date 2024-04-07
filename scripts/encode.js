#!/usr/bin/env node

import { encodeString } from '../src/encode.js'

function main () {
  const input = process.argv.slice(2)
  const encoded = input.map(encodeString)
  if (encoded.length === 1) {
    console.log(input.map((i) => [...i].map((v) => v.charCodeAt(0))))
    console.log(encoded[0].toString(16))
    console.log(encoded[0])
  } else {
    console.log(encoded)
  }
}

main()
