import { CascaderView } from 'antd-mobile'
import React, { useState } from 'react'
import { DemoBlock } from 'demos'
import { options } from '../../cascader/demos/data'

export default () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <CascaderView options={options} />
      </DemoBlock>

      <DemoBlock title='受控模式' padding='0'>
        <CascaderView
          options={options}
          value={value}
          onChange={(val, extend) => {
            setValue(val)
            console.log('onChange', val, extend.items)
          }}
        />
      </DemoBlock>

      <DemoBlock title='自定义高度' padding='0'>
        <CascaderView options={options} style={{ '--height': '320px' }} />
      </DemoBlock>
    </>
  )
}
