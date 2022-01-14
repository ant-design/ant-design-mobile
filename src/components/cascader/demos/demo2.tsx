import React, { useState } from 'react'
import { Cascader, Button } from 'antd-mobile'
import { DemoBlock } from 'demos'

export const options = [
  {
    label: '浙江',
    value: '浙江',
    children: [
      {
        label: '杭州',
        value: '杭州',
        children: Cascader.optionSkeleton,
      },
    ],
  },
]

// 基础用法
function BasicDemo() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<string[]>(['浙江', '杭州', '西湖区'])
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <Cascader
        options={options}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        value={value}
        onConfirm={v => {
          setValue(v)
        }}
      />
    </>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='加载中显示骨架屏'>
        <BasicDemo />
      </DemoBlock>
    </>
  )
}
