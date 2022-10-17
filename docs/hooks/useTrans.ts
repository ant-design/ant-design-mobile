import { context } from 'dumi/theme'
import React from 'react'

export function useTrans() {
  const { locale } = React.useContext(context)

  return function trans(en: React.ReactNode, zh: React.ReactNode) {
    return locale === 'zh' ? zh : en
  }
}
