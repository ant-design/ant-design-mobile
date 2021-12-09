import { isDev } from './is-dev'

export function devWarning(component: string, message: string): void {
  if (isDev) {
    console.warn(`[antd-mobile: ${component}] ${message}`)
  }
}

export function devError(component: string, message: string) {
  if (isDev) {
    console.error(`[antd-mobile: ${component}] ${message}`)
  }
}
