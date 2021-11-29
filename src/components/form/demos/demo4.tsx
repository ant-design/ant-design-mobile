import React, { useState, FC } from 'react'
import { Form, Input, Button, Picker, Space } from 'antd-mobile'
import { DownOutline } from 'antd-mobile-icons'
import { DemoBlock } from 'demos'

const columns = [['86', '11', '00', '22']]

interface MobileValue {
  preValue?: string
  realValue?: string
}

interface MobileInputProps {
  value?: MobileValue
  onChange?: (value: MobileValue) => void
}

const CustomMobile: FC<MobileInputProps> = ({ value = {}, onChange }) => {
  const [preValue, setPreValue] = useState(['86'])
  const [realValue, setRealValue] = useState(value.realValue || '')
  const [visible, setVisible] = useState(false)

  const triggerValue = (changedValue: MobileValue) => {
    onChange?.({ preValue: preValue[0], realValue, ...value, ...changedValue })
  }

  const onValueChange = (value: string) => {
    setRealValue(value)
    triggerValue({ realValue: value })
  }

  const onPreValueChange = (value: string[]) => {
    setPreValue(value)
    triggerValue({ preValue: value[0] })
  }
  return (
    <>
      <Space align='center'>
        <div onClick={() => setVisible(true)}>
          <Space align='center'>
            <div>+{preValue}</div>
            <DownOutline />
          </Space>
        </div>
        <Input placeholder='手机' value={realValue} onChange={onValueChange} />
      </Space>
      <Picker
        columns={columns}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        value={preValue}
        onConfirm={onPreValueChange}
      />
    </>
  )
}

export default () => {
  const onFinish = (values: any) => {
    console.log(values)
  }
  return (
    <>
      <DemoBlock
        title='自定义表单控件'
        padding='0'
        border='none'
        background='transparent'
      >
        <Form
          layout='horizontal'
          onFinish={onFinish}
          footer={
            <Button block type='submit' color='primary'>
              加入
            </Button>
          }
        >
          <Form.Item
            name='name'
            rules={[{ required: true, message: '姓名不能为空' }]}
          >
            <Input onChange={console.log} placeholder='姓名' />
          </Form.Item>
          <Form.Item
            name='mobile'
            rules={[{ required: true, message: '手机号不能为空' }]}
          >
            <CustomMobile />
          </Form.Item>
        </Form>
      </DemoBlock>
    </>
  )
}
