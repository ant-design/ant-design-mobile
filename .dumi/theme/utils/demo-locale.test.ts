import { getDemoLocale, withDemoLocale } from './demo-locale'

describe('demo locale', () => {
  test('reads supported locales and falls back to Chinese', () => {
    expect(getDemoLocale('?locale=en')).toBe('en')
    expect(getDemoLocale('?locale=zh')).toBe('zh')
    expect(getDemoLocale('')).toBe('zh')
  })

  test('adds the locale without losing existing URL state', () => {
    expect(withDemoLocale('/~demos/button', 'en')).toBe(
      '/~demos/button?locale=en'
    )
    expect(withDemoLocale('/~demos/button?capture=true#result', 'zh')).toBe(
      '/~demos/button?capture=true&locale=zh#result'
    )
    expect(withDemoLocale('/~demos/button?locale=zh', 'en')).toBe(
      '/~demos/button?locale=en'
    )
  })
})
