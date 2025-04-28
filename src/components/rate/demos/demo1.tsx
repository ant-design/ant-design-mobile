import React from 'react'
import { Rate, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { SmileOutline } from 'antd-mobile-icons'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Rate onChange={val => Toast.show(val.toString())} />
      </DemoBlock>

      <DemoBlock title='半星'>
        <Rate allowHalf defaultValue={2.5} />
      </DemoBlock>

      <DemoBlock title='只读'>
        <Rate readOnly value={4} />
      </DemoBlock>

      <DemoBlock title='清除'>
        <Space direction='vertical'>
          <Space align='center'>
            <Rate defaultValue={3} allowClear />
            <div>可清除</div>
          </Space>
          <Space align='center'>
            <Rate defaultValue={3} allowClear={false} />
            <div>不可清除</div>
          </Space>
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义字符和样式'>
        <Space direction='vertical'>
          <Rate allowHalf defaultValue={2} character={<SmileOutline />} />
          <Rate allowHalf defaultValue={1.5} character={'A'} />
          <Rate
            allowHalf
            defaultValue={3.5}
            character={'好'}
            style={{
              '--star-size': '32px',
              '--active-color': '#ff7f7f',
            }}
          />
        </Space>
      </DemoBlock>
    </>
  )
}
