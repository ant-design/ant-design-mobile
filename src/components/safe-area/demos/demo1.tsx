import React from 'react'
import { SafeArea } from 'antd-mobile'
import { lorem } from 'demos'

export default () => {
  return (
    <div>
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
