declare module '*.less' {
  const value: {
    [key: string]: string
  }
  export = value
}

declare module '*.png'

declare module '*.svg'

declare module 'runes' {
  function runes(input: string): Array<string>
  const runes: {
    substr(content: string, from: number, length: number): string
  }

  export = runes
}
