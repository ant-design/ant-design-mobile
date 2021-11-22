import React from 'react'
import { Space, Switch } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const onBeforeChange = (state: 'resolve' | 'reject'): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'resolve') {
          alert('处理成功')
          resolve()
        } else {
          alert('处理失败')
          reject()
        }
      }, 3000)
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
      <DemoBlock title='Promise.resolve 后再修改状态（onBeforeChange）'>
        <Space wrap>
          <Switch
            defaultChecked
            onBeforeChange={() => onBeforeChange('resolve')}
          />
          <Switch
            defaultChecked
            onBeforeChange={() => onBeforeChange('reject')}
          />
        </Space>
      </DemoBlock>
    </>
  )
}
