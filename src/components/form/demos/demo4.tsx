import React, { useState, FC } from 'react'
import { Form, Input, Button, Picker, Switch, Space } from 'antd-mobile'
import { DownOutline } from 'antd-mobile-icons'
import { DemoBlock } from 'demos'

const columns = [['86', '01', '02', '03']]

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
  const [realValue, setRealValue] = useState('')
  const [visible, setVisible] = useState(false)

  const triggerValue = (changedValue: MobileValue) => {
    onChange?.({ preValue: preValue[0], realValue, ...value, ...changedValue })
  }

  const onRealValueChange = (value: string) => {
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
        <Input
          placeholder='请输入手机号'
          value={realValue}
          onChange={onRealValueChange}
        />
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

interface CustomSwitchProps {
  value?: string
  onChange?: (value: string) => void
}

// If you need use "0" or "1" replace true or false
const CustomSwitch: FC<CustomSwitchProps> = ({ value, onChange }) => {
  const [checked, setChecked] = useState(value !== '0')
  const handleSwicth = (checked: boolean) => {
    setChecked(checked)
    onChange?.(checked ? '1' : '0')
  }
  return <Switch checked={checked} onChange={handleSwicth} />
}

export default () => {
  const onFinish = (values: any) => {
    console.log(values)
  }

  const checkMobile = (_: any, value: MobileValue) => {
    if (value.realValue) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('手机号不能为空!'))
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
          initialValues={{
            mobile: {
              realValue: '',
            },
            status: '0',
          }}
          footer={
            <Button block type='submit' color='primary'>
              提交
            </Button>
          }
        >
          <Form.Item
            label='姓名'
            name='name'
            rules={[{ required: true, message: '姓名不能为空!' }]}
          >
            <Input placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item
            label='手机号'
            name='mobile'
            rules={[{ required: true }, { validator: checkMobile }]}
          >
            <CustomMobile />
          </Form.Item>
          <Form.Item label='状态' name='status'>
            <CustomSwitch />
          </Form.Item>
        </Form>
      </DemoBlock>
    </>
  )
}
