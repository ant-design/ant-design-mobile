import React, { useState } from 'react'
import { CascadePickerView } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { options } from './options-data'
import { AsyncDemo } from './async-demo'

export default () => {
  const [value, setValue] = useState<(string | null)[]>(['浙江', '杭州'])

  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <CascadePickerView options={options} />
      </DemoBlock>

      <DemoBlock title='自定义高度' padding='0'>
        <CascadePickerView options={options} style={{ '--height': '136px' }} />
      </DemoBlock>

      <DemoBlock title='受控模式' padding='0'>
        <CascadePickerView
          options={options}
          value={value}
          onChange={val => {
            setValue(val)
            console.log('onChange', val)
          }}
        />
      </DemoBlock>

      <DemoBlock title='异步获取选项' padding='0'>
        <AsyncDemo />
      </DemoBlock>
    </>
  )
}
