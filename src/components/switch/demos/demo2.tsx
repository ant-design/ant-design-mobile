import React from 'react'
import { Space, Switch } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const beforeChange = (): Promise<void> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }

  return (
    <>
      <DemoBlock title='禁用状态'>
        <Space>
          <Switch disabled />
          <Switch disabled defaultChecked />
        </Space>
      </DemoBlock>

      <DemoBlock title='加载状态'>
        <Switch loading />
      </DemoBlock>

      <DemoBlock title='异步'>
        <Space wrap>
          <Switch defaultChecked beforeChange={() => beforeChange()} />
        </Space>
      </DemoBlock>
    </>
  )
}
