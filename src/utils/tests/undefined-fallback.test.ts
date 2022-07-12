import { undefinedFallback } from '../undefined-fallback'

describe('undefinedFallback', () => {
  test('basic', () => {
    expect(undefinedFallback('foo', undefined)).toBe('foo')
    expect(undefinedFallback(undefined, 'foo')).toBe('foo')
    expect(undefinedFallback(undefined, undefined)).toBe(undefined)
    expect(undefinedFallback('foo', 'bar')).toBe('foo')
    expect(undefinedFallback('foo', undefined, 'bar')).toBe('foo')
    expect(undefinedFallback(undefined, 'foo', 'bar')).toBe('foo')
    expect(undefinedFallback(undefined, undefined, 'foo', 'bar')).toBe('foo')
    expect(undefinedFallback(undefined, 'foo', undefined, 'bar')).toBe('foo')
  })
})
