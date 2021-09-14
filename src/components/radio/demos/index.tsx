import React, { useState } from 'react'
import { DemoBlock } from 'demos'
import { Radio, Space } from 'antd-mobile'
import { CopyOutlined, CopyFilled } from '@ant-design/icons'

export default () => {
  const [value, setValue] = useState<string>()
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space direction='vertical'>
          <div
            onClick={() => {
              console.log('点击了')
            }}
          >
            <Radio />
          </div>
          <Radio>有描述的勾选框</Radio>
          <Radio defaultChecked>默认选中</Radio>
          <Radio defaultChecked disabled>
            禁用状态
          </Radio>
        </Space>
      </DemoBlock>
      <DemoBlock title='选项组'>
        <Radio.Group
          value={value}
          onChange={(val: string) => {
            setValue(val)
          }}
        >
          <Space direction='vertical'>
            <Radio value='apple'>苹果</Radio>
            <Radio value='orange'>橘子</Radio>
            <Radio value='banana'>香蕉</Radio>
          </Space>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title='整组禁用'>
        <Radio.Group defaultValue='orange' disabled>
          <Space direction='vertical'>
            <Radio value='apple'>苹果</Radio>
            <Radio value='orange'>橘子</Radio>
            <Radio value='banana'>香蕉</Radio>
          </Space>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title='占满整行宽度'>
        <Space direction='vertical' block>
          <Radio block>块级元素</Radio>
          <Radio>非块级元素</Radio>
        </Space>
      </DemoBlock>
      <DemoBlock title='自定义 icon'>
        <Radio.Group
          value={value}
          onChange={(val: string) => {
            setValue(val)
          }}
        >
          <Space direction='vertical'>
            <Radio
              value='radio1'
              icon={checked =>
                checked ? (
                  <CopyFilled
                    style={{
                      color: 'var(--adm-color-primary)',
                    }}
                  />
                ) : (
                  <CopyOutlined
                    style={{
                      color: 'var(--adm-color-weak)',
                    }}
                  />
                )
              }
            >
              单选框一
            </Radio>
            <Radio
              value='radio2'
              icon={checked =>
                checked ? (
                  <CopyFilled
                    style={{
                      color: 'var(--adm-color-primary)',
                    }}
                  />
                ) : (
                  <CopyOutlined
                    style={{
                      color: 'var(--adm-color-weak)',
                    }}
                  />
                )
              }
            >
              单选框二
            </Radio>
          </Space>
        </Radio.Group>
      </DemoBlock>
    </>
  )
}
