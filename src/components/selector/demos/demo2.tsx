import React, { useState } from 'react'
import { Selector } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { options } from './options'

export default () => {
  return (
    <>
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

      <DemoBlock title='自定义样式'>
        <Selector
          style={{ '--checked-color': '#b5d4ff' }}
          options={options}
          defaultValue={['1', '2']}
          multiple={true}
        />
      </DemoBlock>
    </>
  )
}

const RadioMode = () => {
  const [value, setValue] = useState('1')
  return (
    <Selector
      options={options}
      value={[value]}
      onChange={v => {
        if (v.length) {
          setValue(v[0])
        }
      }}
    />
  )
}
