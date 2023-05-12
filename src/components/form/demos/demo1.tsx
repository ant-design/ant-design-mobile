import React, { RefObject } from 'react'
import {
  Form,
  Input,
  Button,
  Dialog,
  TextArea,
  DatePicker,
  Selector,
  Slider,
  Stepper,
  Switch,
} from 'antd-mobile'
import dayjs from 'dayjs'
import type { DatePickerRef } from 'antd-mobile/es/components/date-picker'

export default () => {
  const onFinish = (values: any) => {
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    })
  }

  return (
    <>
      <Form
        layout='horizontal'
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Header>水平布局表单</Form.Header>
        <Form.Item
          name='name'
          label='姓名'
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input onChange={console.log} placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item name='address' label='地址' help='详情地址'>
          <TextArea
            placeholder='请输入地址'
            maxLength={100}
            rows={2}
            showCount
          />
        </Form.Item>
        <Form.Item name='amount' label='数量' childElementPosition='right'>
          <Stepper />
        </Form.Item>
        <Form.Item
          name='delivery'
          label='送货上门'
          childElementPosition='right'
        >
          <Switch />
        </Form.Item>
      </Form>

      <Form
        name='form'
        onFinish={onFinish}
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Header>竖直布局表单</Form.Header>
        <Form.Item name='name' label='姓名' rules={[{ required: true }]}>
          <Input placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item name='address' label='地址' help='详情地址'>
          <Input placeholder='请输入地址' />
        </Form.Item>
        <Form.Item
          name='birthday'
          label='生日'
          trigger='onConfirm'
          onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
            datePickerRef.current?.open()
          }}
        >
          <DatePicker>
            {value =>
              value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期'
            }
          </DatePicker>
        </Form.Item>
        <Form.Item name='favoriteFruits' label='喜爱的水果'>
          <Selector
            columns={3}
            multiple
            options={[
              { label: '苹果', value: 'apple' },
              { label: '橘子', value: 'orange' },
              { label: '香蕉', value: 'banana' },
            ]}
          />
        </Form.Item>
        <Form.Item name='slider-demo' label='滑块选择'>
          <Slider ticks step={10} />
        </Form.Item>
        <Form.Item
          initialValue={0}
          rules={[
            {
              max: 5,
              min: 1,
              type: 'number',
            },
          ]}
          name='stepper-demo'
          label='数量'
        >
          <Stepper />
        </Form.Item>
        <Form.Item name='disabledField' label='禁用' disabled>
          <Input placeholder='禁止输入' />
        </Form.Item>
      </Form>
    </>
  )
}
