import React from 'react'
import {Form, Input, Button, Dialog} from 'antd-mobile'
import 'antd-mobile/lib/index.less'
import {DemoBlock} from 'antd-mobile/src/demos/demo-block'

export default () => {
  const onFinish = (values: any) => {
    Dialog.show({
      content: JSON.stringify(values),
    })
  }

  return (
    <>
      <DemoBlock title='基础使用' padding={'0'}>
        <Form hasFeedback onFinish={onFinish}>
          <Form.Item
            name='姓名'
            label='姓名'
            rules={[{required: true, message: '姓名不能为空'}]}
          >
            <Input onChange={console.log} placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item name='address' label='地址'>
            <Input placeholder='请输入地址' />
          </Form.Item>
          <Form.Item name='禁用' disabled>
            <Input placeholder='禁止输入' />
          </Form.Item>
          <Button block type='submit' color='primary'>
            提交
          </Button>
        </Form>
      </DemoBlock>
    </>
  )
}
