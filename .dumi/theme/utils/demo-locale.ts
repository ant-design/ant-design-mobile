export type DemoLocale = 'en' | 'zh'

export function getDemoLocale(search: string): DemoLocale {
  return new URLSearchParams(search).get('locale') === 'en' ? 'en' : 'zh'
}

export function withDemoLocale(url: string, locale: DemoLocale): string {
  const hashIndex = url.indexOf('#')
  const hash = hashIndex === -1 ? '' : url.slice(hashIndex)
  const urlWithoutHash = hashIndex === -1 ? url : url.slice(0, hashIndex)
  const queryIndex = urlWithoutHash.indexOf('?')
  const pathname =
    queryIndex === -1 ? urlWithoutHash : urlWithoutHash.slice(0, queryIndex)
  const search = queryIndex === -1 ? '' : urlWithoutHash.slice(queryIndex + 1)
  const params = new URLSearchParams(search)

  params.set('locale', locale)

  return `${pathname}?${params.toString()}${hash}`
}
