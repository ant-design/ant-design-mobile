import React, { useState } from 'react'
import { DemoBlock } from 'demos'
import { NumberKeyboard, VirtualInput } from 'antd-mobile'

export default () => {
  const [value, setValue] = useState('')
  const [keyboardVisible, setKeyboardVisible] = useState(false)
  return (
    <>
      <DemoBlock title='配合 NumberKeyboard'>
        <VirtualInput
          placeholder='请输入内容'
          value={value}
          onFocus={() => {
            setKeyboardVisible(true)
          }}
          onBlur={() => {
            console.log('onBlur')
            setKeyboardVisible(false)
          }}
        />
        <NumberKeyboard
          onInput={v => {
            setValue(prev => prev + v)
          }}
          onDelete={() => {
            setValue(prev => prev.slice(0, -1))
          }}
          visible={keyboardVisible}
        />
      </DemoBlock>
    </>
  )
}
