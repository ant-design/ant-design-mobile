import React from 'react'
import {DemoBlock} from 'antd-mobile/src/demos/demo-block'
import {Empty} from 'antd-mobile'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <Empty />
      </DemoBlock>
      <DemoBlock title='描述文字' padding='0'>
        <Empty description='暂无数据' />
      </DemoBlock>
      <DemoBlock title='自定义样式' padding='0'>
        <Empty
          style={{padding: '64px 0'}}
          imageStyle={{width: 128}}
          description='暂无数据'
        />
      </DemoBlock>
    </>
  )
}
