import React, { useState } from 'react'
import { Selector } from 'antd-mobile'
import { DemoBlock } from 'demos'

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
    <div>
      <DemoBlock title='单选'>
        <Selector
          options={ItemList}
          defaultValue={['1']}
          onChange={arr => console.log(arr)}
        />
      </DemoBlock>
      <DemoBlock title='多选'>
        <Selector
          options={ItemList}
          defaultValue={['2', '3']}
          multiple={true}
          onChange={arr => console.log(arr)}
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
    </div>
  )
}
