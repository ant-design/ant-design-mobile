import React from 'react'
import { DemoBlock } from 'demos'
import { Empty } from 'antd-mobile'
import { QuestionCircleOutlined } from '@ant-design/icons'

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
          style={{ padding: '64px 0' }}
          imageStyle={{ width: 128 }}
          description='暂无数据'
        />
      </DemoBlock>
      <DemoBlock title='自定义图片' padding='0'>
        <Empty
          style={{ padding: '64px 0' }}
          image={
            <QuestionCircleOutlined
              style={{
                color: 'var(--adm-color-light)',
                fontSize: 48,
              }}
            />
          }
          description='暂无数据'
        />
      </DemoBlock>
    </>
  )
}
