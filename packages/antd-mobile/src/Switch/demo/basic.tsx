import * as React from 'react'
import {
  unstable_Switch as Switch,
  unstable_Form as Form,
  unstable_Modal as Modal,
  unstable_Button as Button,
} from '@ant-design/mobile'
import WhiteSpace from '../../WhiteSpace'
import WingBlank from '../../WingBlank'

export default () => {
  const events = {
    onChange: (v: any) => console.log('onChange', v),
  }
  return (
    <>
      <Form
        initialValues={{ p1: false }}
        onFinish={values => Modal.alert({ content: JSON.stringify(values) })}
      >
        <Form.Group renderHeader="配合 form">
          <Form.Item label="开关" name="p1">
            <Switch {...events} />
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
