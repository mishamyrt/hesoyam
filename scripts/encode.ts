import { encodeString } from '../src/encode.js'

function describe (name: string, value: number) {
  const strValue = value
    .toString(16)
    .toUpperCase()
    .padStart(8, '0')
  console.log(`${name}: 0x${strValue}`)
}

function main () {
  const input = process.argv.slice(2)
  input
    .map(encodeString)
    .forEach((value, i) => {
      describe(input[i], value)
    })
}

main()
