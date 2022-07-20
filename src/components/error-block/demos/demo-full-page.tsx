import React, { useEffect } from 'react'
import { ErrorBlock } from 'antd-mobile'

export default () => {
  useEffect(() => {
    document.body.style.background = 'var(--adm-color-background)'
  }, [])
  return <ErrorBlock fullPage />
}
