import React, { useState } from 'react'
import { Checkbox, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
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
        </Space>
      </DemoBlock>

      <DemoBlock title='默认选中'>
        <Checkbox defaultChecked>默认选中</Checkbox>
      </DemoBlock>

      <DemoBlock title='占满整行宽度'>
        <Space direction='vertical' block>
          <Checkbox block>块级元素</Checkbox>
          <Checkbox>非块级元素</Checkbox>
        </Space>
      </DemoBlock>

      <DemoBlock title='全选和半选'>
        <DemoIndeterminate />
      </DemoBlock>
    </>
  )
}

const DemoIndeterminate = () => {
  const items = ['Apple', 'Orange', 'Banana']
  const [value, setValue] = useState(['Apple'])
  return (
    <Space direction='vertical'>
      <Checkbox
        indeterminate={value.length > 0 && value.length < items.length}
        checked={value.length === items.length}
        onChange={checked => {
          if (checked) {
            setValue(items)
          } else {
            setValue([])
          }
        }}
      >
        半选
      </Checkbox>
      <Checkbox.Group
        value={value}
        onChange={v => {
          setValue(v as string[])
        }}
      >
        <Space direction='vertical'>
          {items.map(item => (
            <Checkbox key={item} value={item}>
              {item}
            </Checkbox>
          ))}
        </Space>
      </Checkbox.Group>
    </Space>
  )
}
