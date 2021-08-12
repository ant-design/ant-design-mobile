import React from 'react'
import { Form, Input, Button, Dialog, Checkbox, Space } from 'antd-mobile'
import { DemoBlock } from 'antd-mobile/src/demos/demo-block'

export default () => {
  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldsValue()
    Dialog.show({
      content: JSON.stringify(values),
    })
  }

  return (
    <DemoBlock title='表单' padding='0' border='none' background='transparent'>
      <Form
        form={form}
        initialValues={{
          a: 'aaa',
          b: [],
        }}
        footer={
          <Button block color='primary' onClick={onSubmit}>
            提交
          </Button>
        }
      >
        <Form.Item name='a' label='字段A'>
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Item name='b' label='字段B' required>
          <Checkbox.Group>
            <Space direction='vertical'>
              <Checkbox value='1'>选项1</Checkbox>
              <Checkbox value='2'>选项2</Checkbox>
              <Checkbox value='3' disabled>
                选项3
              </Checkbox>
            </Space>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          label='表单联动-字段B'
          shouldUpdate={(prevValues, curValues) => {
            return prevValues.b !== curValues.b
          }}
        >
          {({ getFieldValue }) => {
            return JSON.stringify(getFieldValue('b'))
          }}
        </Form.Item>
        <Form.Item name='c' label='字段C' noStyle>
          <Input placeholder='自定义样式' />
        </Form.Item>
      </Form>
    </DemoBlock>
  )
}
