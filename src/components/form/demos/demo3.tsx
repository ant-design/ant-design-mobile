import React from 'react'
import { Form, Input, Button } from 'antd-mobile'

export default function () {
  const [form] = Form.useForm()
  return (
    <Form
      form={form}
      layout='horizontal'
      footer={
        <Button block type='submit' color='primary' size='large'>
          提交
        </Button>
      }
    >
      <Form.Header>在表单字段内增加额外内容</Form.Header>
      <Form.Item label='短信验证码' extra={<a>发送验证码</a>}>
        <Input placeholder='请输入' />
      </Form.Item>
    </Form>
  )
}
