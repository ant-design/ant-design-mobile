import { context } from 'dumi/theme'
import React from 'react'

export function useTrans() {
  const { locale } = React.useContext(context)
  const isZh = locale === 'zh'

  function trans<T>(en: T, zh: T) {
    return isZh ? zh : en
  }

  trans.zh = isZh
  trans.en = !isZh

  return trans
}
