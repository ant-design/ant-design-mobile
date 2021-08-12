import React from 'react'
import { Form, Input, Button, Dialog, TextArea, DatePicker } from 'antd-mobile'
import { DemoBlock } from 'antd-mobile/src/demos/demo-block'
import dayjs from 'dayjs'
import { FormImperativeItem } from '../form-imperative-item'

export default () => {
  const onFinish = (values: any) => {
    Dialog.show({
      content: JSON.stringify(values),
    })
  }

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
          <FormImperativeItem
            name='birthday'
            label='生日'
            initialValue={new Date()}
            renderValue={value => dayjs(value).format('YYYY-MM-DD')}
          ></FormImperativeItem>
          {/*<Form.Item name='birthday' label='生日' initialValue={new Date()}>*/}
          {/*  <DatePicker>*/}
          {/*    {value => dayjs(value).format('YYYY-MM-DD')}*/}
          {/*  </DatePicker>*/}
          {/*</Form.Item>*/}
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
