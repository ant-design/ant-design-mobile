import { Button, Form, Input, Toast } from 'antd-mobile'
import { InputRef } from 'antd-mobile/es/components/input'
import React, { useRef } from 'react'

class Age extends React.Component {
  log = () => {
    Toast.show('class 组件 Ref 测试')
  }
  render(): React.ReactNode {
    return <Input {...this.props} />
  }
}

const MemoInput = React.memo(Input)
const MemoHTMLInput = React.memo(props => <input {...props} />)

function SimpleFunctionComponent(props: any) {
  return <Input {...props} />
}

export default () => {
  const ref = useRef<InputRef>(null)
  return (
    <Form
      footer={
        <Button type='submit' block color='primary'>
          提交
        </Button>
      }
      onFinish={v => console.log(v)}
    >
      <Form.Header>收集子组件 Ref</Form.Header>
      <Form.Item
        label='forwardRef 并且设置 ref'
        name='key1'
        onClick={(_, widgetRef) => {
          console.log(widgetRef.current, ref.current === widgetRef.current)
        }}
      >
        <Input ref={ref} />
      </Form.Item>
      <Form.Item
        label='Class 组件'
        name='key2'
        onClick={(_, widgetRef) => {
          console.log(widgetRef.current)
        }}
      >
        <Age />
      </Form.Item>
      <Form.Item
        label='memo Function'
        name='key4'
        onClick={(_, widgetRef) => {
          console.log(widgetRef.current)
        }}
      >
        <MemoHTMLInput />
      </Form.Item>
      <Form.Item
        label='memo forwardRef'
        name='key5'
        onClick={(_, widgetRef) => {
          console.log(widgetRef.current)
        }}
      >
        <MemoInput />
      </Form.Item>
      <Form.Item
        label='Function 组件'
        name='key6'
        onClick={(_, widgetRef) => {
          console.log(widgetRef.current)
        }}
      >
        <SimpleFunctionComponent />
      </Form.Item>
      <Form.Item
        label='HTML 标签'
        name='key7'
        onClick={(_, widgetRef) => {
          console.log(widgetRef.current)
        }}
      >
        <input />
      </Form.Item>
      <Form.Item
        label='Fragment 标签'
        name='key8'
        onClick={(_, widgetRef) => {
          console.log(widgetRef.current)
        }}
      >
        <></>
      </Form.Item>
    </Form>
  )
}
