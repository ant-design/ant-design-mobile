import React from 'react'
import { Loading } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='默认'>
        <Loading />
      </DemoBlock>

      <DemoBlock title='主题色的 Loading'>
        <Loading color='primary' />
      </DemoBlock>

      <DemoBlock title='白色的 Loading' background='#a5a5a5'>
        <Loading color='white' />
      </DemoBlock>

      <DemoBlock title='自动适配当前字号'>
        <span style={{ fontSize: 14 }}>
          <Loading />
        </span>
        <span style={{ fontSize: 18 }}>
          <Loading />
        </span>
        <span style={{ fontSize: 24 }}>
          <Loading />
        </span>
      </DemoBlock>

      <DemoBlock title='自动适配当前文本颜色'>
        <div style={{ color: '#00b578' }}>
          <Loading color='currentColor' />
          <span>绿色文字</span>
        </div>
        <div style={{ color: '#ff3141' }}>
          <Loading color='currentColor' />
          <span>红色文字</span>
        </div>
      </DemoBlock>
    </>
  )
}
