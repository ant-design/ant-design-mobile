import React, { useState } from 'react'
import { CascaderView, Button } from 'antd-mobile'
import { DemoBlock } from 'demos'

import { options, sameValueOptions } from '../../cascader/demos/data'

const list1 = [
  {
    label: '西湖区',
    value: '西湖区',
  },
  {
    label: '上城区',
    value: '上城区',
  },
  {
    label: '余杭区',
    value: '余杭区',
    disabled: true,
  },
]

export default () => {
  const [value, setValue] = useState<string[]>([])
  const [list, setList] = useState<any[]>([])

  return (
    <>
      <DemoBlock title='基础用法' padding='0'>
        <CascaderView options={options} />
      </DemoBlock>

      <DemoBlock title='受控模式' padding='0'>
        <CascaderView
          options={options}
          value={value}
          onChange={(val, extend) => {
            setValue(val)
            console.log('onChange', val, extend.items)
          }}
        />
      </DemoBlock>

      <DemoBlock title='自定义高度' padding='0'>
        <CascaderView options={options} style={{ '--height': '320px' }} />
      </DemoBlock>

      <DemoBlock title='不同层级中存在 value 重复的选项' padding='0'>
        <CascaderView
          options={sameValueOptions}
          onChange={(val, ext) => {
            console.log(val, ext.items)
          }}
        />
      </DemoBlock>
      <DemoBlock title='开启loding并且options为空时会开启骨架屏' padding='0'>
        <CascaderView options={list} loading={!list.length} />
        <Button onClick={() => setList(list1)}>push数据</Button>
      </DemoBlock>
    </>
  )
}
