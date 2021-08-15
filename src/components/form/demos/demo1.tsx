import React, { useState } from 'react'
import { Form, Input, Button, Dialog, TextArea, DatePicker } from 'antd-mobile'
import { DemoBlock } from 'demos'
import dayjs from 'dayjs'

export default () => {
  const onFinish = (values: any) => {
    Dialog.show({
      content: JSON.stringify(values),
    })
  }

  const [pickerVisible, setPickerVisible] = useState(false)

  return (
    <>
      <DemoBlock
        title='基础用法'
        padding='0'
        border='none'
        background='transparent'
      >
        <Form
          onFinish={onFinish}
          footer={
            <Button block type='submit' color='primary'>
              提交
            </Button>
          }
        >
          <Form.Item
            name='姓名'
            label='姓名'
            rules={[{ required: true, message: '姓名不能为空' }]}
          >
            <Input onChange={console.log} placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item name='address' label='地址'>
            <Input placeholder='请输入地址' />
          </Form.Item>
          <Form.Item
            name='birthday'
            label='生日'
            trigger='onConfirm'
            onClick={() => {
              setPickerVisible(true)
            }}
          >
            <DatePicker
              visible={pickerVisible}
              onClose={() => {
                setPickerVisible(false)
              }}
              onClick={e => {
                e.stopPropagation()
              }}
            >
              {value =>
                value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期'
              }
            </DatePicker>
          </Form.Item>
          <Form.Item name='禁用' disabled>
            <Input placeholder='禁止输入' />
          </Form.Item>
        </Form>
      </DemoBlock>
      <DemoBlock
        title='水平布局'
        padding='0'
        border='none'
        background='transparent'
      >
        <Form
          layout='horizontal'
          footer={
            <Button block type='submit' color='primary'>
              提交
            </Button>
          }
        >
          <Form.Item
            name='姓名'
            label='姓名'
            rules={[{ required: true, message: '姓名不能为空' }]}
          >
            <Input onChange={console.log} placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item name='address' label='地址'>
            <TextArea placeholder='请输入地址' maxLength={100} rows={4} />
          </Form.Item>
        </Form>
      </DemoBlock>
    </>
  )
}
