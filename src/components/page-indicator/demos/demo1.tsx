import React from 'react'
import { DemoBlock } from 'demos'
import { PageIndicator } from 'antd-mobile'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <PageIndicator total={4} current={0} />
      </DemoBlock>
      <DemoBlock title='白色' background='rgb(212 212 212)'>
        <PageIndicator total={4} current={0} color='white' />
      </DemoBlock>
      <DemoBlock title='自定义颜色'>
        <PageIndicator
          total={4}
          current={0}
          style={{
            '--active-color': '#2a2a2a',
          }}
        />
      </DemoBlock>
    </>
  )
}
