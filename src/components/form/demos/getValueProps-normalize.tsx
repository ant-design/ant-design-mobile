import { Button, DatePicker, Dialog, Form } from 'antd-mobile'
import type { DatePickerRef } from 'antd-mobile/es/components/date-picker'
import dayjs from 'dayjs'
import React, { RefObject } from 'react'

export default () => {
  const onFinish = (values: any) => {
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    })
  }

  return (
    <Form
      name='form'
      onFinish={onFinish}
      footer={
        <Button block type='submit' color='primary' size='large'>
          提交
        </Button>
      }
      initialValues={{ date: '2025-10-25' }}
    >
      <Form.Item
        name='date'
        label='日期'
        trigger='onConfirm'
        onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
          datePickerRef.current?.open()
        }}
        getValueProps={value => ({ value: value && new Date(value) })}
        normalize={value => value && `${dayjs(value).format('YYYY-MM-DD')}`}
      >
        <DatePicker>
          {value => (value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期')}
        </DatePicker>
      </Form.Item>
    </Form>
  )
}
