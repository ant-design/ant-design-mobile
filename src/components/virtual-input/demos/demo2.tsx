import { NumberKeyboard, VirtualInput, VirtualInputRef } from 'antd-mobile'
import { DemoBlock } from 'demos'
import React, { useRef, useState } from 'react'

const TWO_DIGIT_NUMBER_REGEX = /^(([1-9]\d{0,11})|0)(\.\d{0,2}?)?$/

export default () => {
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [visible, setVisible] = useState(false)
  const inputRef = useRef<VirtualInputRef>(null)

  return (
    <>
      <DemoBlock title='只支持两位小数的金额输入，配合 NumberKeyboard 使用'>
        <VirtualInput
          value={value || '0'}
          cursor={{ movable: true }}
          onChange={v => {
            if (v.startsWith('.')) {
              v = '0' + v
            }
            v = v.replace(/^0+(\d)/, '$1')
            if (TWO_DIGIT_NUMBER_REGEX.test(v) || !v) {
              setValue(v)
            }
          }}
          placeholder='请输入内容'
          keyboard={
            <NumberKeyboard
              confirmText='确定'
              customKey={{ key: '.', title: '小数点' }}
            />
          }
          style={{
            '--font-size': '40px',
          }}
        />
      </DemoBlock>

      <DemoBlock title='同级使用 NumberKeyboard 和 VirtualInput（👎️不推荐❌）'>
        <VirtualInput
          placeholder='请输入内容'
          clearable
          value={value2}
          onFocus={() => setVisible(true)}
          onBlur={() => setVisible(false)}
          onClear={() => setValue2('')}
          ref={inputRef}
        />
        <NumberKeyboard
          visible={visible}
          confirmText='确定'
          customKey={{ key: '.', title: '小数点' }}
          onInput={v => setValue2(i => i + v)}
          onDelete={() => setValue2(i => i.slice(0, i.length - 1))}
          onClose={() => {
            setVisible(false)
            inputRef.current?.blur()
          }}
        />
      </DemoBlock>

      <div style={{ height: '100vh' }}></div>
    </>
  )
}
