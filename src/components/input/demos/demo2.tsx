import React from 'react'
import { Form, Input } from 'antd-mobile'
import { DemoBlock } from 'demos'
import styles from './demo2.less'

export default () => {
  return (
    <>
      <DemoBlock title='配合列表使用（上下布局）' padding='0' border='none'>
        <Form layout='vertical'>
          <Form.Item label='用户名' name='username'>
            <Input placeholder='请输入用户名' clearable />
          </Form.Item>
          <Form.Item label='密码' name='password'>
            <Input placeholder='请输入密码' clearable type='password' />
          </Form.Item>
        </Form>
      </DemoBlock>

      <DemoBlock title='配合列表使用（左右布局）' padding='0' border='none'>
        <Form layout='horizontal'>
          <Form.Item label='用户名' name='username'>
            <Input placeholder='请输入用户名' clearable />
          </Form.Item>
          <Form.Item label='密码' name='password'>
            <Input placeholder='请输入密码' clearable type='password' />
          </Form.Item>
        </Form>
      </DemoBlock>

      <DemoBlock title='额外的操作按钮' padding='0' border='none'>
        <Form layout='horizontal'>
          <Form.Item
            label='短信验证码'
            extra={
              <div className={styles.extraPart}>
                <a>发送验证码</a>
              </div>
            }
          >
            <Input placeholder='请输入验证码' clearable />
          </Form.Item>
        </Form>
      </DemoBlock>
    </>
  )
}
