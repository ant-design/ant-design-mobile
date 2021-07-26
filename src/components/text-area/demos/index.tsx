import React, {useState} from 'react'
import {TextArea} from 'antd-mobile'
import {DemoBlock} from 'antd-mobile/src/demos/demo-block'

export default () => {
  const [value, setValue] = useState('')
  return (
    <>
      <DemoBlock title='基本的输入框组件'>
        <TextArea
          placeholder='请输入内容'
          value={value}
          onChange={val => {
            setValue(val)
          }}
        />
      </DemoBlock>
      <DemoBlock title='指定行数'>
        <TextArea placeholder='请输入内容' rows={5} />
      </DemoBlock>
      <DemoBlock title='禁用状态'>
        <TextArea
          placeholder='请输入内容'
          value={'北极星垂地，\n东山月满川。'}
          disabled
        />
      </DemoBlock>
      <DemoBlock title='只读状态'>
        <TextArea
          placeholder='请输入内容'
          value={'北极星垂地，\n东山月满川。'}
          readOnly
        />
      </DemoBlock>
    </>
  )
}
