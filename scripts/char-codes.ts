function describe (name: string, codes: number[]) {
  console.log(`${name}: [${codes.join(', ')}] (${codes.length})`)
}

function toCharCodes (input: string): number[] {
  return input
    .split('')
    .map(c => c.charCodeAt(0))
}

function main () {
  const input = process.argv.slice(2)
  input
    .map(toCharCodes)
    .forEach((value, i) => {
      describe(input[i], value)
    })
}

main()
