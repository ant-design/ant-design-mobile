import React, { useState } from 'react'
import { Selector } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { options } from './options'

export default () => {
  return (
    <>
      <DemoBlock title='必须选择一项'>
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
          style={{
            '--border-radius': '100px',
            '--border': 'solid transparent 1px',
            '--checked-border': 'solid var(--adm-color-primary) 1px',
            '--padding': '8px 24px',
          }}
          showCheckMark={false}
          options={options}
          defaultValue={['1']}
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
