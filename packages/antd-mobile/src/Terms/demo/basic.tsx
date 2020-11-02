import * as React from 'react'
import {
  unstable_Terms as Terms,
  unstable_Form as Form,
  unstable_Modal as Modal,
  unstable_Button as Button,
} from '@ant-design/mobile'
import WhiteSpace from '../../WhiteSpace'
import WingBlank from '../../WingBlank'

export default () => {
  return (
    <>
      <Form
        initialValues={{ p1: true, p2: false }}
        onFinish={values => Modal.alert({ content: JSON.stringify(values) })}
      >
        <Form.Item name="p1" valuePropName="checked" unstable_noStyle>
          <Terms
            hasChecked
            term={
              <>
                同意<a>《用户授权协议》</a>
              </>
            }
          ></Terms>
        </Form.Item>
        <Form.Item name="p2" valuePropName="checked" unstable_noStyle>
          <Terms
            id="idp2"
            hasChecked
            term={
              <>
                <label htmlFor="idp2">我也可以点</label>
                <a>《我不可以点》</a>
              </>
            }
          >
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Terms>
        </Form.Item>
      </Form>

      <h3>其他用法</h3>
      <Terms
        term={
          <>
            同意<a>《用户授权协议》</a>
          </>
        }
      >
        <Button type="primary">按钮</Button>
      </Terms>
      <Terms
        describe
        term={
          <>
            同意<a>《用户授权协议》</a>
          </>
        }
      >
        <Button type="primary">按钮</Button>
      </Terms>
    </>
  )
}
