import * as React from 'react'
import {
  unstable_Selector as Selector,
  unstable_Form as Form,
  unstable_Modal as Modal,
  unstable_Button as Button,
} from '@ant-design/mobile'
import WhiteSpace from '../../WhiteSpace'
import WingBlank from '../../WingBlank'

function handleChange(selectedItems: number[]) {
  console.log(selectedItems)
}

export default () => {
  return (
    <>
      <Form
        onFinish={values => Modal.alert({ content: JSON.stringify(values) })}
      >
        <Form.Group unstable_noStyle>
          <h3>single choice</h3>
          <Form.Item name="p1" initialValue={[1]}>
            <Selector
              onChange={handleChange}
              items={[
                {
                  text: '选项一',
                  value: 1,
                },
                {
                  text: '选项二',
                  value: 2,
                },
              ]}
            />
          </Form.Item>
          <h3>multiple choices</h3>
          <Form.Item name="p2" initialValue={[1, 2]}>
            <Selector
              multiple={true}
              onChange={handleChange}
              items={[
                {
                  text: '选项一',
                  value: 1,
                },
                {
                  text: '选项二',
                  value: 2,
                },
                {
                  text: '选项三',
                  value: 3,
                },
              ]}
            />
          </Form.Item>
          <h3>multiple lines</h3>
          <Form.Item name="p3" initialValue={[1]}>
            <Selector
              onChange={handleChange}
              items={[
                {
                  text: '选项一',
                  value: 1,
                },
                {
                  text: '选项二',
                  value: 2,
                },
                {
                  text: '选项三',
                  value: 3,
                },
                {
                  text: '选项四',
                  value: 4,
                },
                {
                  text: '选项五',
                  value: 5,
                },
                {
                  text: '选项六',
                  value: 6,
                },
                {
                  text: '选项七',
                  value: 7,
                },
              ]}
            />
          </Form.Item>
          <h3>disable specific items</h3>
          <Form.Item name="p4" initialValue={[1]}>
            <Selector
              onChange={handleChange}
              items={[
                {
                  text: '选项一',
                  value: 1,
                },
                {
                  text: '选项二',
                  value: 2,
                  disabled: true,
                },
                {
                  text: '选项三',
                  value: 3,
                },
              ]}
            />
          </Form.Item>
          <h3>sub text</h3>
          <Form.Item name="p5" initialValue={[1]}>
            <Selector
              onChange={handleChange}
              items={[
                {
                  text: '选项一',
                  subText: '描述文案',
                  value: 1,
                },
                {
                  text: '选项二',
                  subText: '描述文案',
                  value: 2,
                },
              ]}
            />
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
