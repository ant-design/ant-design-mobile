import { isDev } from './is-dev'
import { devError } from './dev-log'

export function measureCSSLength(raw: string | undefined | null): number {
  if (raw === null || raw === undefined || raw === '') {
    if (isDev) {
      devError(
        'Global',
        'Seems like the you will encounter a style messed problem. Please check the browser environment to make sure it supports CSS variables.'
      )
    }
    return 0
  }
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
        `You are using a not supported CSS unit in \`${raw}\`. Only \`px\` \`rem\` and \`vw\` are supported.`
      )
    }
    return 0
  }
}
