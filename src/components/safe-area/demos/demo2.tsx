import React from 'react'
import { SafeArea } from 'antd-mobile'
import { lorem } from 'demos'

export default () => {
  return (
    <div>
      <div style={{ background: '#ace0ff' }}>
        <SafeArea style={{ background: 'red' }} position='top' fallback={20} />
      </div>
      <div>{lorem.generateParagraphs(10)}</div>
      <div style={{ background: '#ffcfac' }}>
        <SafeArea
          style={{ background: 'red' }}
          position='bottom'
          fallback={20}
        />
      </div>
    </div>
  )
}
