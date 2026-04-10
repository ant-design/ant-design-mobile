import { TextArea, Toast } from 'antd-mobile'
import { DeleteOutline } from 'antd-mobile-icons'
import { DemoBlock } from 'demos'
import React, { useState } from 'react'

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

      <DemoBlock title='带清除按钮'>
        <TextArea placeholder='请输入内容' clearable />
      </DemoBlock>

      <DemoBlock title='带清除按钮（自定义图标和回调）'>
        <TextArea
          placeholder='请输入内容'
          defaultValue='试试点击清除'
          clearable={{
            clearIcon: <DeleteOutline />,
            onClear: () => {
              Toast.show('已清除')
            },
          }}
        />
      </DemoBlock>

      <DemoBlock title='根据内容自动调整高度'>
        <TextArea
          placeholder='请输入内容'
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </DemoBlock>

      <DemoBlock title='带清除按钮的自动调整高度'>
        <TextArea
          placeholder='请输入内容'
          autoSize={{ minRows: 3, maxRows: 5 }}
          clearable
        />
      </DemoBlock>

      <DemoBlock title='字数统计'>
        <TextArea defaultValue={'北极星垂地，\n东山月满川。'} showCount />
      </DemoBlock>

      <DemoBlock title='字数限制'>
        <TextArea
          defaultValue={'北极星垂地，\n东山月满川。'}
          showCount
          maxLength={30}
        />
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
