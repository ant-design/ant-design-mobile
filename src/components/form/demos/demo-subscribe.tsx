import React from 'react'
import { Form, Input, Button, Radio, Space } from 'antd-mobile'

export default function () {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      layout='horizontal'
      initialValues={{
        loginMethod: 'mobile',
        account: '18812341234',
      }}
      footer={
        <>
          <Form.Subscribe to={['loginMethod', 'account']}>
            {({ loginMethod, account }) => (
              <div
                style={{
                  marginBottom: '24px',
                  fontSize: '15px',
                  color: 'var(--adm-color-weak)',
                }}
              >
                你将使用 {loginMethod === 'mobile' ? '手机号' : '邮箱'}{' '}
                {account} 登录
              </div>
            )}
          </Form.Subscribe>
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        </>
      }
    >
      <Form.Header>登录</Form.Header>
      <Form.Item name='loginMethod' label='登录方式'>
        <Radio.Group>
          <Space>
            <Radio value='mobile'>手机号</Radio>
            <Radio value='email'>邮箱</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>

      <Form.Subscribe to={['loginMethod']}>
        {({ loginMethod }) => {
          return (
            <>
              {loginMethod === 'mobile' && (
                <Form.Item name='account' label='手机号'>
                  <Input placeholder='请输入手机号' />
                </Form.Item>
              )}
              {loginMethod === 'email' && (
                <Form.Item name='account' label='邮箱'>
                  <Input placeholder='请输入邮箱' />
                </Form.Item>
              )}
            </>
          )
        }}
      </Form.Subscribe>
    </Form>
  )
}
