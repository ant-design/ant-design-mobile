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
  } else if (withUnit.endsWith('vw')) {
    return (parseFloat(withUnit) * window.innerWidth) / 100
  } else {
    if (isDev) {
      devError(
        'Global',
        'You are using a not supported CSS unit. Only `px` `rem` and `vw` are supported.'
      )
    }
    return 0
  }
}
