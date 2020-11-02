import * as React from 'react'
import {
  unstable_Checkbox as Checkbox,
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
        initialValues={{ p1: true, p2: false, p3: [2, 4] }}
        onFinish={values => Modal.alert({ content: JSON.stringify(values) })}
      >
        <Form.Group renderHeader="配合 form, 单独使用">
          <Form.Item
            label="p1"
            name="p1"
            position="thumb"
            valuePropName="checked"
          >
            <Checkbox />
          </Form.Item>
          <Form.Item
            label="p2"
            name="p2"
            position="thumb"
            valuePropName="checked"
          >
            <Checkbox />
          </Form.Item>
        </Form.Group>

        <Form.Group unstable_noStyle>
          <Form.Item name="p3">
            <Checkbox.Group renderHeader="p3: 配合 form, Group 使用">
              {/* 以下四个选项分别展示了选中不选中, 禁用选中禁用不选中的四种状态 */}
              <Checkbox.Item value={1}>{1}</Checkbox.Item>
              <Checkbox.Item value={2}>{2}</Checkbox.Item>
              <Checkbox.Item value={3} disabled>
                {3}
              </Checkbox.Item>
              <Checkbox.Item value={4} disabled>
                {4}
              </Checkbox.Item>
            </Checkbox.Group>
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
