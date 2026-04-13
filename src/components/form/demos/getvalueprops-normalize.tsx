import type { DatePickerRef, PickerRef } from 'antd-mobile'
import { Button, DatePicker, Dialog, Form, Picker, Selector } from 'antd-mobile'
import dayjs from 'dayjs'
import React, { RefObject } from 'react'

export default () => {
  return (
    <Form
      layout='horizontal'
      footer={
        <Button block type='submit' color='primary' size='large'>
          提交
        </Button>
      }
      initialValues={{ birthday: '2021-01-01', gender: '男', hobby: '羽毛球' }}
      onFinish={values => {
        Dialog.alert({
          content: <pre>{JSON.stringify(values, null, 2)}</pre>,
        })
      }}
    >
      <Form.Item
        label='生日'
        name='birthday'
        trigger='onConfirm'
        getValueProps={value => ({ value: value ? new Date(value) : value })}
        normalize={value => (value ? dayjs(value).format('YYYY-MM-DD') : value)}
        onClick={(_, ref: RefObject<DatePickerRef>) => ref.current?.open()}
      >
        <DatePicker>
          {value => (value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期')}
        </DatePicker>
      </Form.Item>
      <Form.Item
        label='性别'
        name='gender'
        getValueProps={value => ({ value: value && [value] })}
        normalize={value => (value && value.length > 0 ? value[0] : value)}
      >
        <Selector
          options={[
            { label: '男', value: '男' },
            { label: '女', value: '女' },
          ]}
        />
      </Form.Item>
      <Form.Item
        label='爱好'
        name='hobby'
        trigger='onConfirm'
        onClick={(_, ref: RefObject<PickerRef>) => ref.current?.open()}
        getValueProps={value => ({ value: value && [value] })}
        normalize={value => (value && value.length > 0 ? value[0] : value)}
      >
        <Picker
          columns={[
            [
              { label: '羽毛球', value: '羽毛球' },
              { label: '乒乓球', value: '乒乓球' },
            ],
          ]}
        >
          {value => (value && value.length > 0 ? value[0]?.label : '')}
        </Picker>
      </Form.Item>
    </Form>
  )
}
