import React, { useState } from 'react'
import { Radio, Space } from 'antd-mobile'
import { SmileOutline, SmileFill } from 'antd-mobile-icons'
import { DemoBlock } from 'demos'

export default () => {
  const [value, setValue] = useState<string>()
  return (
    <>
      <DemoBlock title='自定义大小'>
        <Radio
          style={{
            '--icon-size': '18px',
            '--font-size': '14px',
            '--gap': '6px',
          }}
        >
          小号的单选框
        </Radio>
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
