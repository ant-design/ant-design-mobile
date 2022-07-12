import React from 'react'
import { Form, Input } from 'antd-mobile'

export default () => {
  return (
    <>
      <div style={{ padding: '16px', fontSize: '15px', color: '#697b8c' }}>
        三种必选填方式
      </div>
      <Form requiredMarkStyle='asterisk'>
        <Form.Header>星号</Form.Header>
        <Form.Item name='name' label='姓名' rules={[{ required: true }]}>
          <Input placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item name='address' label='地址' help='详情地址'>
          <Input placeholder='请输入地址' />
        </Form.Item>
      </Form>
      <Form requiredMarkStyle='text-required'>
        <Form.Header>文字-必填</Form.Header>
        <Form.Item name='name' label='姓名' rules={[{ required: true }]}>
          <Input placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item name='address' label='地址' help='详情地址'>
          <Input placeholder='请输入地址' />
        </Form.Item>
      </Form>
      <Form requiredMarkStyle='text-optional'>
        <Form.Header>文字-选填</Form.Header>
        <Form.Item name='name' label='姓名' rules={[{ required: true }]}>
          <Input placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item name='address' label='地址' help='详情地址'>
          <Input placeholder='请输入地址' />
        </Form.Item>
      </Form>
    </>
  )
}
