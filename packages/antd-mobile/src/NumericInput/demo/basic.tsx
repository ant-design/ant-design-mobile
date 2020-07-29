import * as React from 'react'
import {
  unstable_NumericInput as NumericInput,
  unstable_Button as Button,
  unstable_List as List,
} from '@ant-design/mobile'
import Demo from './Demo'
import './style.less'

const App = () => {
  // const inputRef = React.useRef<any>(null)
  const inputRef = React.createRef<any>()

  const [value, setValue] = React.useState('99')
  const [mValue, setMValue] = React.useState('23')
  const onEvent = (type: string) => (v: string) => console.log(type, v)

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <>
      <List className="numeric-demo">
        <Demo desc="自动聚焦">
          <NumericInput
            ref={inputRef}
            // ref={el => (inputRef.current = el)}
            customKey="X"
            confirm
            autoFocus
            onChange={onEvent('change')}
            onFocus={onEvent('focus')}
            onBlur={onEvent('blur')}
            placeholder="请输入身份证号码"
            onConfirm={onEvent('confirm')}
            clear
          />
        </Demo>
        <Button type="primary" onPress={focus}>
          点击聚焦
        </Button>

        <Demo desc="基本">
          <NumericInput customKey="." confirm placeholder="请输入" />
        </Demo>

        <Demo desc="自定义负号">
          <NumericInput
            customKey="-"
            confirm
            confirmLabel="TransferTransfer"
            placeholder="请输入"
          />
        </Demo>

        <Demo desc="无确认键">
          <NumericInput customKey="." placeholder="请输入" />
        </Demo>

        <Demo desc="无自定义键">
          <NumericInput placeholder="请输入" />
        </Demo>

        <Demo desc="有头部提示">
          <NumericInput header="支付宝安全保护中" placeholder="请输入" />
        </Demo>

        <Demo desc="禁用">
          <NumericInput
            header="支付宝安全保护中"
            placeholder="请输入"
            disabledKeys={['6']}
          />
        </Demo>

        <Demo desc="默认值" brief="defaultValue">
          <NumericInput
            header="支付宝安全保护中"
            placeholder="请输入"
            defaultValue="47"
          />
        </Demo>

        <Demo desc="默认值" brief="value">
          <NumericInput
            header="支付宝安全保护中"
            placeholder="请输入"
            confirm
            value={value}
            onChange={setValue}
          />
        </Demo>

        <Demo desc="区间" brief="10 - 1000">
          <NumericInput
            placeholder="请输入"
            value={mValue}
            confirmDisabled={+mValue < 10 || +mValue > 1000}
            confirm
            confirmLabel="OK"
            onChange={(v, changed) => {
              console.log('changed', changed)
              if (!changed) {
                return
              }
              if (+v > 1000) {
                setMValue('1000')
              } else {
                setMValue(v)
              }
            }}
            onBlur={v => {
              if (+v < 10) {
                setMValue('10')
              }
            }}
          />
        </Demo>
      </List>
      <input
        style={{
          border: '2px solid #ccc',
          width: '100%',
          paddingBottom: '800px',
        }}
        placeholder="我只是个占位测试和正常 input 没有相互影响的"
        type="text"
        onFocus={() => {
          console.log(111, 'focus')
        }}
        onClick={() => {
          console.log(111, 'click')
        }}
      />
    </>
  )
}

export default App
