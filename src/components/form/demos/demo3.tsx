import React from 'react'
import { Form, Input } from 'antd-mobile'

export default function () {
  return (
    <>
      <Form layout='horizontal' mode='card'>
        <Form.Header>卡片模式及分组</Form.Header>
        <Form.Item label='手机号'>
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Item label='短信验证码'>
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Header />
        <Form.Item label='姓名'>
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Item label='邮箱地址'>
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Item label='所在城市'>
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Header />
      </Form>
      <Form layout='horizontal' mode='card'>
        <Form.Header>带辅助操作</Form.Header>
        <Form.Item label='短信验证码' extra={<a>发送验证码</a>}>
          <Input placeholder='请输入' />
        </Form.Item>
      </Form>
    </>
  )
}
