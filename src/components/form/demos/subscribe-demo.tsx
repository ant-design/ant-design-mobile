import React from 'react'
import { Form, Input, Button, Radio, Space } from 'antd-mobile'

export default function () {
  const [form] = Form.useForm()

  const onSubmit = () => {
    console.log(form.getFieldsValue())
  }

  return (
    <Form
      form={form}
      layout='horizontal'
      footer={
        <Button
          onClick={onSubmit}
          block
          type='submit'
          color='primary'
          size='large'
        >
          提交
        </Button>
      }
    >
      <Form.Item
        layout='vertical'
        initialValue='mobile'
        name='loginMethod'
        label='登陆方式'
      >
        <Radio.Group>
          <Space>
            <Radio value='mobile'>手机号</Radio>
            <Radio value='account'>账号</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>

      <Form.Item initialValue='custom' label='自定义字段名' name='fieldName'>
        <Input maxLength={10} />
      </Form.Item>

      <Form.Subscribe to={['loginMethod', 'fieldName']}>
        {({ loginMethod, fieldName }) => {
          return (
            <>
              <Form.Item
                name={loginMethod}
                label={loginMethod === 'mobile' ? '手机号' : '账号'}
              >
                <Input placeholder='请输入' />
              </Form.Item>
              {loginMethod !== fieldName ? (
                <Form.Item label={fieldName} name={fieldName}>
                  <Input placeholder={`请输入${fieldName}`}></Input>
                </Form.Item>
              ) : null}
            </>
          )
        }}
      </Form.Subscribe>

      <Form.Item name='password' label='密码'>
        <Input type='password' placeholder='请输入' />
      </Form.Item>
    </Form>
  )
}
