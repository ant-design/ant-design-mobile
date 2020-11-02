import * as React from 'react'
import {
  unstable_Stepper as Stepper,
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
        initialValues={{ p1: 3, p2: 5 }}
        onFinish={values => Modal.alert({ content: JSON.stringify(values) })}
      >
        <Form.Group renderHeader="配合 form">
          <Form.Item label="p1" name="p1">
            <Stepper max={10} min={1} />
          </Form.Item>

          <Form.Item label="p2" name="p2" disabled>
            <Stepper />
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
