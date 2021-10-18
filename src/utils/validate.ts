import { canUseDom } from './can-use-dom'

export function isDef<T>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null
}

export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object'
}

export function isPromise(obj: unknown): obj is Promise<unknown> {
  return (
    obj && typeof obj === 'object' && typeof (obj as any).then === 'function'
  )
}

export function isDate(val: unknown): val is Date {
  return (
    Object.prototype.toString.call(val) === '[object Date]' &&
    !Number.isNaN((val as Date).getTime())
  )
}

export function isMobile(value: string): boolean {
  value = value.replace(/[^-|\d]/g, '')
  return (
    /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value)
  )
}

export function isNumeric(val: string | number): val is string {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)
}

export function isAndroid(): boolean {
  return canUseDom ? /android/.test(navigator.userAgent.toLowerCase()) : false
}

export function isIOS(): boolean {
  return canUseDom
    ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
    : false
}
