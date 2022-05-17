import React from 'react'
import { DotLoading } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='默认'>
        <DotLoading />
      </DemoBlock>

      <DemoBlock title='主题色 Loading'>
        <DotLoading color='primary' />
      </DemoBlock>

      <DemoBlock title='白色 Loading' background='#a5a5a5'>
        <DotLoading color='white' />
      </DemoBlock>

      <DemoBlock title='自动适配字号'>
        <span style={{ fontSize: 14 }}>
          <DotLoading />
        </span>
        <span style={{ fontSize: 18 }}>
          <DotLoading />
        </span>
        <span style={{ fontSize: 24 }}>
          <DotLoading />
        </span>
      </DemoBlock>

      <DemoBlock title='自动适配文本颜色'>
        <div style={{ color: '#00b578' }}>
          <DotLoading color='currentColor' />
          <span>绿色文字</span>
        </div>
        <div style={{ color: '#ff3141' }}>
          <DotLoading color='currentColor' />
          <span>红色文字</span>
        </div>
      </DemoBlock>
    </>
  )
}
