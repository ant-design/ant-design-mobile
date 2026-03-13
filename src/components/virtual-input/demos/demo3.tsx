import {
  Button,
  Input,
  Modal,
  NumberKeyboard,
  VirtualInput,
  VirtualInputRef,
} from 'antd-mobile'
import { DemoBlock } from 'demos'
import React, { useRef, useState } from 'react'
import './index.less'

export default () => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const [keyboardVisible, setKeyboardVisible] = useState(false)
  const inputRef = useRef<VirtualInputRef>(null)
  const focusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const blurTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  return (
    <>
      <DemoBlock title='Bug ：安卓机从virtuallinput聚焦到长按input，数字键盘不会消失'>
        <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      </DemoBlock>

      <Modal
        visible={visible}
        title='请输入金额'
        closeOnAction
        className={keyboardVisible ? 'test-keyboard-visible' : ''}
        onClose={() => {
          setVisible(false)
          setKeyboardVisible(false)
          setValue('')
        }}
        style={{ height: '70vh', overflow: 'auto' }}
        actions={[
          {
            key: 'confirm',
            text: '确定',
            primary: true,
          },
        ]}
        getContainer={document.body}
        content={
          <div style={{ height: '300px' }}>
            <Input placeholder='点击此处聚焦（首次点击键盘会闪现后消失）' />
            <VirtualInput
              ref={inputRef}
              placeholder='点击此处聚焦（首次点击键盘会闪现后消失）'
              value={value}
              onChange={setValue}
              onFocus={() => {
                console.log('[Bug Demo] onFocus triggered')
                if (blurTimerRef.current) {
                  clearTimeout(blurTimerRef.current)
                  blurTimerRef.current = null
                }
                focusTimerRef.current = setTimeout(() => {
                  setKeyboardVisible(true)
                }, 200)
              }}
              onBlur={() => {
                console.log('[Bug Demo] onBlur triggered')
                if (focusTimerRef.current) {
                  clearTimeout(focusTimerRef.current)
                  focusTimerRef.current = null
                }
                blurTimerRef.current = setTimeout(() => {
                  setKeyboardVisible(false)
                }, 200)
              }}
            />
          </div>
        }
        stopPropagation={[]}
      />

      <NumberKeyboard
        visible={keyboardVisible}
        onClose={() => {
          setKeyboardVisible(false)
          inputRef.current?.blur()
        }}
        onInput={v => setValue(prev => prev + v)}
        onDelete={() => setValue(prev => prev.slice(0, -1))}
        confirmText='完成'
        customKey={{ key: '.', title: '小数点' }}
      />
    </>
  )
}
