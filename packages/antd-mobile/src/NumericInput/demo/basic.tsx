import * as React from 'react'
import {
  unstable_NumericInput as NumericInput,
  unstable_Button as Button,
  unstable_Form as Form,
  unstable_Modal as Modal,
} from '@ant-design/mobile'
import WhiteSpace from '../../WhiteSpace'
import WingBlank from '../../WingBlank'

const App = () => {
  // const inputRef = React.useRef<any>(null)
  const inputRef = React.createRef<any>()

  const onEvent = (type: string) => (v: string) => console.log(type, v)

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <>
      <Form
        onFinish={values => Modal.alert({ content: JSON.stringify(values) })}
      >
        <Form.Group renderHeader="配合 form">
          <Form.Item label="自动聚焦" name="p1">
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
          </Form.Item>
          <Button type="primary" onPress={focus}>
            点击聚焦
          </Button>
          <Form.Item label="基本" name="p2">
            <NumericInput customKey="." confirm placeholder="请输入" />
          </Form.Item>
          <Form.Item label="自定义负号" name="p3">
            <NumericInput
              customKey="-"
              confirm
              confirmLabel="TransferConfirm"
              placeholder="请输入"
            />
          </Form.Item>
          <Form.Item label="无确认键" name="p4">
            <NumericInput customKey="." placeholder="请输入" />
          </Form.Item>
          <Form.Item label="无自定义键" name="p5">
            <NumericInput placeholder="请输入" />
          </Form.Item>
          <Form.Item label="有头部提示" name="p6">
            <NumericInput header="自定义头部" placeholder="请输入" />
          </Form.Item>
          <Form.Item label="显示空 header" name="p7">
            <NumericInput showEmptyHeader placeholder="请输入" />
          </Form.Item>
        </Form.Group>
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

        <WhiteSpace />

        <WingBlank>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </WingBlank>
      </Form>
    </>
  )
}

export default App
