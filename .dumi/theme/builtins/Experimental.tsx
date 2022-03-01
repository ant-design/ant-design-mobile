import React, { useContext } from 'react'
import Badge from './Badge'
import { context } from 'dumi/theme'

export default () => {
  const { locale } = useContext(context)

  return (
    <a
      href={(locale === 'zh' ? '/zh' : '') + '/components/what-is-experimental'}
    >
      <Badge type='warning'>
        {locale === 'zh' ? '试验性' : 'Experimental'}
      </Badge>
    </a>
  )
}
