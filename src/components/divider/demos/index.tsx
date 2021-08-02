import React from 'react'
import { Divider } from 'antd-mobile'
import { DemoBlock } from 'antd-mobile/src/demos/demo-block'

export default () => {
  return (
    <>
      <DemoBlock title='基础分割线'>
        <Divider />
      </DemoBlock>
      <DemoBlock title='带内容的分割线'>
        <Divider>默认内容在中间</Divider>
        <Divider contentPosition='left'>左侧内容</Divider>
        <Divider contentPosition='right'>右侧内容</Divider>
      </DemoBlock>
      <DemoBlock title='自定义样式'>
        <Divider
          style={{
            color: '#1677ff',
            borderColor: '#1677ff',
            borderStyle: 'dashed',
          }}
        >
          自定义样式
        </Divider>
      </DemoBlock>
    </>
  )
}
