import React, { useState } from 'react'
import { CascaderView } from 'antd-mobile'
import { DemoBlock } from 'demos'

import { options, sameValueOptions } from '../../cascader/demos/data'

export default () => {
  const [value, setValue] = useState<string[]>([])

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
    </>
  )
}
