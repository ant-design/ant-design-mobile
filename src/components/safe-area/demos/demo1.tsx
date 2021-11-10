import React from 'react'
import { SafeArea } from 'antd-mobile'
import { lorem } from 'demos'
import { Helmet } from 'react-helmet'

export default () => {
  return (
    <div>
      <Helmet>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover'
        />
      </Helmet>
      <div style={{ background: '#ace0ff' }}>
        <SafeArea position='top' />
      </div>
      <div>{lorem.generateParagraphs(10)}</div>
      <div style={{ background: '#ffcfac' }}>
        <SafeArea position='bottom' />
      </div>
    </div>
  )
}
