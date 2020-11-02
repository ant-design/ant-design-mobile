import * as React from 'react'
import {
  unstable_InputItem as InputItem,
  unstable_Form as Form,
  unstable_Modal as Modal,
  unstable_Button as Button,
} from '@ant-design/mobile'
import WhiteSpace from '../../WhiteSpace'
import WingBlank from '../../WingBlank'

export default () => {
  return (
    <>
      <Form
        initialValues={{ p1: '', p2: '' }}
        onFinish={values => Modal.alert({ content: JSON.stringify(values) })}
      >
        <Form.Group renderHeader="配合 form">
          <Form.Item label="p1" name="p1">
            <InputItem placeholder="请输入" clear />
          </Form.Item>
          <Form.Item label="p2" position="brief" name="p2">
            <InputItem placeholder="请输入" />
          </Form.Item>
        </Form.Group>

        <WhiteSpace />

        <WingBlank>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </WingBlank>
      </Form>
    </>
  )
}
