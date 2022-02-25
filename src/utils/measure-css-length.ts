import { isDev } from './is-dev'
import { devError } from './dev-log'

export function measureCSSLength(raw: string): number {
  const withUnit = raw.trim()
  if (withUnit.endsWith('px')) {
    return parseFloat(withUnit)
  } else if (withUnit.endsWith('rem')) {
    return (
      parseFloat(withUnit) *
      parseFloat(window.getComputedStyle(document.documentElement).fontSize)
    )
  } else {
    if (isDev) {
      devError(
        'Global',
        'You are using a not supported CSS unit. Only `px` and `rem` are supported.'
      )
    }
    return 0
  }
}
