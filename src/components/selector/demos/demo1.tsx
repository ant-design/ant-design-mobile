import React, { useState } from 'react'
import { Selector } from 'antd-mobile'
import { DemoBlock } from 'demos'

import './demo1.less'

const ItemList = [
  {
    label: '选项一',
    value: '1',
  },
  {
    label: '选项二',
    value: '2',
    disabled: true,
  },
  {
    label: '选项三',
    value: '3',
  },
  {
    label: '选项四',
    value: '4',
  },
]

// 避免取消选择
const RadioMode = () => {
  const [value, setValue] = useState('1')
  return (
    <Selector
      options={ItemList}
      value={[value]}
      onChange={v => {
        if (v.length) {
          setValue(v[0])
        }
      }}
    />
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='单选'>
        <Selector
          options={ItemList}
          defaultValue={['1']}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </DemoBlock>

      <DemoBlock title='多选'>
        <Selector
          options={ItemList}
          defaultValue={['2', '3']}
          multiple={true}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </DemoBlock>

      <DemoBlock title='全局禁止'>
        <Selector
          options={ItemList}
          defaultValue={['1']}
          disabled={true}
          onChange={arr => console.log(arr)}
        />
      </DemoBlock>

      <DemoBlock title='固定两列'>
        <Selector
          columns={2}
          options={ItemList}
          defaultValue={['2', '3']}
          multiple={true}
          onChange={arr => console.log(arr)}
        />
      </DemoBlock>

      <DemoBlock title='固定三列'>
        <Selector
          columns={3}
          options={ItemList}
          defaultValue={['2', '3']}
          multiple={true}
          onChange={arr => console.log(arr)}
        />
      </DemoBlock>

      <DemoBlock title='避免取消选择'>
        <RadioMode />
      </DemoBlock>

      <DemoBlock title='选项带描述'>
        <Selector
          columns={2}
          options={[
            {
              label: '选项一',
              description: '描述信息',
              value: '1',
            },
            {
              label: '选项二',
              description: '描述信息',
              value: '2',
            },
          ]}
          defaultValue={['1']}
        />
      </DemoBlock>

      <DemoBlock title='自定义样式（通过 style）'>
        <Selector
          style={{ '--checked-color': '#ffe2e5' }}
          options={ItemList}
          defaultValue={['1', '2']}
          multiple={true}
        />
      </DemoBlock>

      <DemoBlock title='自定义样式（通过 className）'>
        <Selector
          className='my-selector'
          options={ItemList}
          defaultValue={['1', '2']}
          multiple={true}
        />
      </DemoBlock>
    </>
  )
}
