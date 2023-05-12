import React, { useState } from 'react'
import { Checkbox, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { SmileFill, SmileOutline } from 'antd-mobile-icons'

export default () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <>
      <DemoBlock title='自定义图标'>
        <Checkbox
          value='banana'
          icon={checked =>
            checked ? (
              <SmileFill style={{ color: 'var(--adm-color-primary)' }} />
            ) : (
              <SmileOutline style={{ color: 'var(--adm-color-weak)' }} />
            )
          }
        >
          自定义图标
        </Checkbox>
      </DemoBlock>

      <DemoBlock title='自定义大小'>
        <Checkbox
          style={{
            '--icon-size': '18px',
            '--font-size': '14px',
            '--gap': '6px',
          }}
        >
          小号的复选框
        </Checkbox>
      </DemoBlock>

      <DemoBlock title='禁用状态'>
        <Checkbox defaultChecked disabled>
          禁用状态
        </Checkbox>
      </DemoBlock>

      <DemoBlock title='复选框组'>
        <Checkbox.Group
          value={value}
          onChange={val => {
            setValue(val as string[])
          }}
        >
          <Space direction='vertical'>
            <Checkbox value='apple'>苹果</Checkbox>
            <Checkbox value='orange'>橘子</Checkbox>
            <Checkbox value='banana'>香蕉</Checkbox>
          </Space>
        </Checkbox.Group>
      </DemoBlock>

      <DemoBlock title='复选框组禁用'>
        <Checkbox.Group defaultValue={['orange', 'banana']} disabled>
          <Space direction='vertical'>
            <Checkbox value='apple'>苹果</Checkbox>
            <Checkbox value='orange'>橘子</Checkbox>
            <Checkbox value='banana'>香蕉</Checkbox>
          </Space>
        </Checkbox.Group>
      </DemoBlock>
    </>
  )
}
