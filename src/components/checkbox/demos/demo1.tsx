import React, { useState } from 'react'
import { Checkbox, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { SmileFill, SmileOutline } from 'antd-mobile-icons'

export default () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space direction='vertical'>
          <div
            onClick={() => {
              console.log('点击了')
            }}
          >
            <Checkbox />
          </div>
          <Checkbox>有描述的复选框</Checkbox>
          <Checkbox defaultChecked>默认选中</Checkbox>
        </Space>
      </DemoBlock>

      <DemoBlock title='状态'>
        <Space direction='vertical'>
          <Checkbox defaultChecked disabled>
            禁用状态
          </Checkbox>
          <Checkbox indeterminate={true}>半选</Checkbox>
        </Space>
      </DemoBlock>

      <DemoBlock title='选项组'>
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

      <DemoBlock title='整组禁用'>
        <Checkbox.Group defaultValue={['orange', 'banana']} disabled>
          <Space direction='vertical'>
            <Checkbox value='apple'>苹果</Checkbox>
            <Checkbox value='orange'>橘子</Checkbox>
            <Checkbox value='banana'>香蕉</Checkbox>
          </Space>
        </Checkbox.Group>
      </DemoBlock>

      <DemoBlock title='占满整行宽度'>
        <Space direction='vertical' block>
          <Checkbox block>块级元素</Checkbox>
          <Checkbox>非块级元素</Checkbox>
        </Space>
      </DemoBlock>

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
    </>
  )
}
