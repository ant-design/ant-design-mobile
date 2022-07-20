import React, { useState } from 'react'
import { Radio, Space } from 'antd-mobile'
import { SmileOutline, SmileFill } from 'antd-mobile-icons'
import { DemoBlock } from 'demos'

export default () => {
  const [value, setValue] = useState<string>()
  return (
    <>
      <DemoBlock title='自定义大小'>
        <Radio.Group defaultValue='1'>
          <Space direction='vertical'>
            <Radio
              value='small'
              style={{
                '--icon-size': '18px',
                '--font-size': '14px',
                '--gap': '6px',
              }}
            >
              小
            </Radio>
            <Radio
              value='middle'
              style={{
                '--icon-size': '22px',
                '--font-size': '16px',
                '--gap': '8px',
              }}
            >
              中
            </Radio>
            <Radio
              value='large'
              style={{
                '--icon-size': '28px',
                '--font-size': '20px',
                '--gap': '10px',
              }}
            >
              大
            </Radio>
          </Space>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title='自定义图标'>
        <Radio.Group
          value={value}
          onChange={val => {
            setValue(val as string)
          }}
        >
          <Space direction='vertical'>
            <Radio
              value='radio1'
              icon={checked =>
                checked ? (
                  <SmileFill style={{ color: 'var(--adm-color-primary)' }} />
                ) : (
                  <SmileOutline style={{ color: 'var(--adm-color-weak)' }} />
                )
              }
            >
              单选框一
            </Radio>
            <Radio
              value='radio2'
              icon={checked =>
                checked ? (
                  <SmileFill style={{ color: 'var(--adm-color-primary)' }} />
                ) : (
                  <SmileOutline style={{ color: 'var(--adm-color-weak)' }} />
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
