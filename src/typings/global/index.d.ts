declare module '*.less' {
  const value: {
    [key: string]: string
  }
  export = value
}

declare module '*.png'

declare module '*.svg'

interface Window {
  WebKitMutationObserver: MutationObserver;
  MozMutationObserver: MutationObserver;
}
