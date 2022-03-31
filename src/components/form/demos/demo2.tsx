import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Dialog,
  Checkbox,
  Space,
  DatePicker,
} from 'antd-mobile'
import { FormInstance } from 'antd-mobile/es/components/form'
import dayjs from 'dayjs'
import { CloseCircleFill } from 'antd-mobile-icons'

export default () => {
  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldsValue()
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    })
  }

  return (
    <>
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
        <Form.Header>复杂逻辑</Form.Header>
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
        <DatePickerInputItem />
      </Form>

      <RefDemo />
      <WarningOnlyDemo />
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
        <Form.Header>表单方法调用（Class component）</Form.Header>
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

const DatePickerInputItem = () => {
  const [pickerVisible, setPickerVisible] = useState(false)

  return (
    <Form.Item
      noStyle
      shouldUpdate={(prevValues, curValues) =>
        prevValues.birthday !== curValues.birthday
      }
    >
      {({ getFieldValue, setFieldsValue }) => (
        <Form.Item
          name='birthday'
          label='带清除图标的时间选择器'
          trigger='onConfirm'
          arrow={
            getFieldValue('birthday') ? (
              <CloseCircleFill
                style={{
                  color: 'var(--adm-color-light)',
                  fontSize: 14,
                }}
                onClick={e => {
                  e.stopPropagation()
                  setFieldsValue({ birthday: null })
                }}
              />
            ) : (
              true
            )
          }
          onClick={() => {
            setPickerVisible(true)
          }}
        >
          <DatePicker
            visible={pickerVisible}
            onClose={() => {
              setPickerVisible(false)
            }}
          >
            {value =>
              value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期'
            }
          </DatePicker>
        </Form.Item>
      )}
    </Form.Item>
  )
}

const WarningOnlyDemo = () => {
  const onFinish = (values: any) => {
    console.log(values)
  }

  return (
    <Form
      onFinish={onFinish}
      footer={
        <Button block type='submit' color='primary' size='large'>
          提交
        </Button>
      }
    >
      <Form.Header>非阻塞校验</Form.Header>
      <Form.Item
        name='email'
        label='邮箱'
        rules={[
          { required: true },
          { type: 'string', min: 6 },
          { type: 'email', warningOnly: true },
        ]}
      >
        <Input placeholder='请输入邮箱' />
      </Form.Item>
    </Form>
  )
}
