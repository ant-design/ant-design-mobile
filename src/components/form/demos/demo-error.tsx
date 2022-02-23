import React from 'react'
import { Form, Input, Button, Dialog } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldsValue()
    Dialog.alert({
      content: JSON.stringify(values),
    })
  }

  return (
    <DemoBlock title='表单' padding='0' border='none' background='transparent'>
      <Form
        form={form}
        footer={
          <Button block color='primary' onClick={onSubmit} size='large'>
            提交
          </Button>
        }
      >
        <Form.Item name='a' label='a'>
          <Input />
        </Form.Item>
        <Form.Item name='f' label='f'>
          321
        </Form.Item>
        <Form.Item name='e' label='e'>
          <Input defaultValue='init' />
        </Form.Item>
        <Form.Item label='d' dependencies={['a']}>
          <Input />
        </Form.Item>
        <Form.Item name='c' label='c'>
          {() => '123'}
        </Form.Item>
        <Form.Item
          name='b'
          label='b'
          shouldUpdate={() => true}
          dependencies={['a']}
        >
          <Input />
        </Form.Item>
      </Form>

      <Form style={{ '--border-inner': 'solid 1px #1677ff' }}>
        <Form.Item name='b1' label='b1'>
          <Input />
        </Form.Item>
        <Form.Item name='b2' label='b2' style={{ '--border-inner': '0' }}>
          <Input />
        </Form.Item>
        <Form.Item name='b3' label='b3'>
          <Input />
        </Form.Item>
      </Form>
    </DemoBlock>
  )
}
