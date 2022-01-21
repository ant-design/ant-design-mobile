import React from 'react'
import { Form, Input, Button, Dialog, Checkbox, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { FormInstance } from 'antd-mobile/es/components/form'

export default () => {
  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldsValue()
    Dialog.alert({
      content: JSON.stringify(values),
    })
  }

  return (
    <>
      <DemoBlock
        title='表单'
        padding='0'
        border='none'
        background='transparent'
      >
        <Form
          form={form}
          initialValues={{
            a: 'aaa',
            b: [],
          }}
          footer={
            <Button block color='primary' onClick={onSubmit} size='large'>
              提交
            </Button>
          }
        >
          <Form.Item name='a' label='字段A'>
            <Input placeholder='请输入' />
          </Form.Item>
          <Form.Item name='b' label='字段B' required>
            <Checkbox.Group>
              <Space direction='vertical'>
                <Checkbox value='1'>选项1</Checkbox>
                <Checkbox value='2'>选项2</Checkbox>
                <Checkbox value='3' disabled>
                  选项3
                </Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            label='表单联动-字段B'
            shouldUpdate={(prevValues, curValues) => {
              return prevValues.b !== curValues.b
            }}
          >
            {({ getFieldValue }) => {
              return JSON.stringify(getFieldValue('b'))
            }}
          </Form.Item>
          <Form.Item name='c' label='字段C' noStyle>
            <Input placeholder='自定义样式' />
          </Form.Item>
        </Form>
      </DemoBlock>

      <DemoBlock
        title='表单方法调用（Class component）'
        padding='0'
        border='none'
        background='transparent'
      >
        <RefDemo />
      </DemoBlock>
    </>
  )
}

class RefDemo extends React.Component {
  formRef = React.createRef<FormInstance>()

  componentDidMount() {
    this.formRef.current?.setFieldsValue({ a: 'antd mobile', b: '2' })
  }

  render() {
    return (
      <Form
        ref={this.formRef}
        layout='horizontal'
        footer={
          <Button
            block
            color='primary'
            onClick={() => {
              this.formRef.current?.resetFields()
            }}
            size='large'
          >
            重置
          </Button>
        }
      >
        <Form.Item
          name='a'
          label='字段A'
          rules={[{ required: true, message: '字段A不能为空' }]}
        >
          <Input placeholder='请输入字段A' />
        </Form.Item>
        <Form.Item name='b' label='字段B' required>
          <Checkbox.Group>
            <Space direction='vertical'>
              <Checkbox value='1'>选项1</Checkbox>
              <Checkbox value='2'>选项2</Checkbox>
              <Checkbox value='3'>选项3</Checkbox>
            </Space>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    )
  }
}
