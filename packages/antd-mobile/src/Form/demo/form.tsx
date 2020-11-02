import * as React from 'react'
import {
  unstable_Form as Form,
  unstable_Checkbox as Checkbox,
  unstable_Radio as Radio,
  unstable_NumericInput as NumericInput,
  unstable_List as List,
  unstable_Button as Button,
  unstable_Switch as Switch,
  unstable_Selector as Selector,
  unstable_Terms as Terms,
  unstable_InputItem as InputItem,
  unstable_Stepper as Stepper,
  unstable_Picker as Picker,
  unstable_Modal as Modal,
} from '@ant-design/mobile'
import { Alipay } from '@ant-design/mobile-icons'
import WhiteSpace from '../../WhiteSpace'
import WingBlank from '../../WingBlank'

const { Group, Item } = Form

import './index.less'

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
]

export default () => {
  const initialValues = {
    a1: true,
    b1: '156',
    c1: '',
    d1: false,
    e1: [2],
    f1: [],
    g1: 6,
    h1: '2',
    i1: ['2', '3'],
    j1: false,
  }
  const [form] = Form.useForm()
  const [disabled, setDisabled] = React.useState(false)

  return (
    <div>
      <List>
        <List.Item
          extra={<Switch checked={disabled} onChange={setDisabled}></Switch>}
        >
          全部禁用
        </List.Item>
      </List>
      <Form
        form={form}
        ref={console.log}
        initialValues={initialValues}
        onFinish={v => {
          Modal.alert({
            title: 'success',
            content: JSON.stringify(v),
          })
        }}
        onFinishFailed={err => {
          Modal.alert({
            title: 'error',
            content: err.errorFields[0].errors[0],
          })
        }}
      >
        <Group renderHeader="Single">
          <Item
            disabled={disabled}
            label="a1: Checkbox"
            position="thumb"
            name="a1"
            valuePropName="checked"
          >
            <Checkbox />
          </Item>
          <Item
            disabled={disabled}
            label="a1: Checkbox"
            position="thumb"
            name="a1"
            valuePropName="checked"
          >
            <Checkbox />
          </Item>
          <Item
            disabled={disabled}
            label="b1: NumericInput"
            name="b1"
            arrow
            rules={[{ required: true }]}
          >
            <NumericInput clear />
          </Item>
          <Item
            disabled={disabled}
            label="b1: NumericInput"
            name="b1"
            extra={<Alipay />}
            rules={[{ required: true }]}
            position="brief"
          >
            <NumericInput />
          </Item>
          <Item
            disabled={disabled}
            label="c1: InputItem"
            name="c1"
            rules={[{ required: true }]}
          >
            <InputItem />
          </Item>
          <Item
            disabled={disabled}
            label="d1: Switch"
            name="d1"
            valuePropName="checked"
          >
            <Switch />
          </Item>
          <Item
            disabled={disabled}
            label="e1: Selector"
            position="brief"
            name="e1"
          >
            <Selector
              items={[
                {
                  text: '选项一',
                  value: 1,
                },
                {
                  text: '选项二',
                  value: 2,
                },
              ]}
            />
          </Item>
          <Item disabled={disabled} label="f1: Picker" name="f1" arrow>
            <Picker data={seasons} title="我是沙" cascade={false}>
              请选择
            </Picker>
          </Item>
          <Item disabled={disabled} label="g1: Stepper" name="g1" arrow>
            <Stepper min={1} max={20} />
          </Item>
        </Group>

        <Item disabled={disabled} name="h1" unstable_noStyle>
          <Radio.Group renderHeader="h1: Radio Group">
            <Radio.Item value="1">1</Radio.Item>
            <Radio.Item value="2">2</Radio.Item>
            <Radio.Item value="3">3</Radio.Item>
          </Radio.Group>
        </Item>

        <Item disabled={disabled} name="i1" unstable_noStyle>
          <Checkbox.Group renderHeader="i1: Checkbox Group">
            <Checkbox.Item value="1">1</Checkbox.Item>
            <Checkbox.Item value="2">2</Checkbox.Item>
            <Checkbox.Item value="3">3</Checkbox.Item>
          </Checkbox.Group>
        </Item>

        <Item
          disabled={disabled}
          name="j1"
          valuePropName="checked"
          unstable_noStyle
          rules={[
            {
              message: '你必须同意协议',
              validator: (rule, value) => {
                if (!value) {
                  return Promise.reject()
                }

                return Promise.resolve()
              },
            },
          ]}
        >
          <Terms
            hasChecked
            term={
              <>
                j1: 同意<a>《用户授权协议》</a>
              </>
            }
          />
        </Item>

        <WhiteSpace />

        <WingBlank>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </WingBlank>
      </Form>
    </div>
  )
}
