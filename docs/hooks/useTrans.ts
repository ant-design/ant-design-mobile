import { context } from 'dumi/theme'
import React from 'react'

export function useTrans() {
  const { locale } = React.useContext(context)

  return function trans<T>(en: T, zh: T) {
    return locale === 'zh' ? zh : en
  }
}
