import * as React from 'react'
import {
  unstable_Radio as Radio,
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
        initialValues={{ p1: 1 }}
        onFinish={values => Modal.alert({ content: JSON.stringify(values) })}
      >
        <Form.Group unstable_noStyle>
          <Form.Item name="p1">
            <Radio.Group renderHeader="p1: 配合 form, Group 使用">
              <Radio.Item value={1}>{1}</Radio.Item>
              <Radio.Item value={2} brief="第二行">
                {2}
              </Radio.Item>
              <Radio.Item value={3} disabled>
                {3}
              </Radio.Item>
              <Radio.Item value={4} disabled>
                {4}
              </Radio.Item>
            </Radio.Group>
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
