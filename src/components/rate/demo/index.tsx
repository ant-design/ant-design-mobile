import React from 'react'
import {DemoBlock} from 'antd-mobile/src/demos/demo-block'
import {Rate} from 'antd-mobile'
import {SmileOutlined} from '@ant-design/icons'
import 'antd-mobile/lib/index.less'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <Rate />
      </DemoBlock>
      <DemoBlock title='半星' padding='0'>
        <Rate allowHalf />
      </DemoBlock>
      <DemoBlock title='只读' padding='0'>
        <Rate readonly value={2} />
      </DemoBlock>
      <DemoBlock title='清除' padding='0'>
        <Rate value={3} allowClear={false} />{' '}
        <div style={{margin: 12}}>allowClear: false</div>
        <Rate value={3} />
        <div style={{margin: 12}}>allowClear: true</div>
      </DemoBlock>
      <DemoBlock title='自定义字符' padding='0'>
        <Rate allowHalf character={<SmileOutlined />} />
        <Rate allowHalf character={'A'} />
        <Rate allowHalf character={'好'} />
      </DemoBlock>
    </>
  )
}
