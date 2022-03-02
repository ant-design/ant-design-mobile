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
          contacts: [
            {
              name: '1',
            },
          ],
        }}
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.List name='contacts'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ name, key }) => (
                <div key={key}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      background: '#f5f5f5',
                      padding: 12,
                    }}
                  >
                    <span>联系人{key + 1}</span>
                    <a onClick={() => remove(name)}>删除</a>
                  </div>

                  <Form.Item
                    name={[name, 'name']}
                    label='姓名'
                    rules={[{ required: true, message: '姓名不能为空' }]}
                  >
                    <Input placeholder='请输入姓名' />
                  </Form.Item>
                  <Form.Item name={[name, 'address']} label='地址'>
                    <Input placeholder='请输入地址' />
                  </Form.Item>
                </div>
              ))}
              <Form.Item>
                <div
                  style={{
                    paddingBottom: 12,
                    textAlign: 'center',
                    color: '#1677FF',
                  }}
                  onClick={() => add()}
                >
                  <AddCircleOutline style={{ 'fontSize': 20 }} />
                  添加
                </div>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </>
  )
}
