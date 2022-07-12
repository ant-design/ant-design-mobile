import React from 'react'
import { Form, Input, Button } from 'antd-mobile'
import { AddCircleOutline } from 'antd-mobile-icons'

export default () => {
  const onFinish = (values: any) => {
    console.log(values)
  }

  return (
    <>
      <Form
        onFinish={onFinish}
        initialValues={{
          contacts: [{}],
        }}
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
        mode='card'
      >
        <Form.Item name={'name'} label='客户名称'>
          <Input placeholder='请输入客户名称' />
        </Form.Item>

        <Form.Array
          name='contacts'
          onAdd={operation => operation.add({ name: '张三' })}
          renderAdd={() => (
            <span>
              <AddCircleOutline /> 添加
            </span>
          )}
          renderHeader={({ index }, { remove }) => (
            <>
              <span>联系人{index + 1}</span>
              <a onClick={() => remove(index)} style={{ float: 'right' }}>
                删除
              </a>
            </>
          )}
        >
          {fields =>
            fields.map(({ index }) => (
              <>
                <Form.Item
                  name={[index, 'name']}
                  label='姓名'
                  rules={[{ required: true, message: '姓名不能为空' }]}
                >
                  <Input placeholder='请输入姓名' />
                </Form.Item>
                <Form.Item name={[index, 'address']} label='地址'>
                  <Input placeholder='请输入地址' />
                </Form.Item>
              </>
            ))
          }
        </Form.Array>
      </Form>
    </>
  )
}
