import React, { useState } from 'react'
import { Slider, Toast } from 'antd-mobile'
import { HeartOutline } from 'antd-mobile-icons'
import { DemoBlock } from 'demos'

import './demo1.less'

export default () => {
  const marks = {
    0: 0,
    20: 20,
    40: 40,
    60: 60,
    80: 80,
    100: 100,
  }
  const [crtValue, setValue] = useState<number | [number, number]>(20)

  const [onAfterChangeValue, setAfterValue] = useState<
    number | [number, number]
  >(10)

  const toastValue = (value: number | number[]) => {
    let text = ''
    if (typeof value === 'number') {
      text = `${value}`
    } else {
      text = `[${value.join(',')}]`
    }
    Toast.show(`当前选中值为：${text}`)
    console.log(value)
  }

  return (
    <>
      <DemoBlock title='基础用法' padding='13px'>
        <Slider onAfterChange={toastValue} />
      </DemoBlock>

      <DemoBlock title='显示刻度并指定步距' padding='13px'>
        <Slider ticks step={10} />
      </DemoBlock>

      <DemoBlock title='传入刻度标记' padding='13px'>
        <Slider marks={marks} ticks />
      </DemoBlock>

      <DemoBlock title='最大/最小值' padding='13px'>
        <Slider
          step={100}
          min={100}
          max={1000}
          ticks
          onAfterChange={toastValue}
        />
      </DemoBlock>

      <DemoBlock title='默认值' padding='13px'>
        <Slider step={20} defaultValue={40} />
      </DemoBlock>

      <DemoBlock title='指定值(受控组件)' padding='13px'>
        <Slider
          marks={marks}
          ticks
          value={crtValue}
          onChange={(value: number | [number, number]) => {
            setValue(value)
          }}
        />
      </DemoBlock>

      <DemoBlock
        title={`拖拽结束监听 (最终拖拽值${onAfterChangeValue})`}
        padding='13px'
      >
        <Slider step={20} onAfterChange={value => setAfterValue(value)} />
      </DemoBlock>

      <DemoBlock title='双滑块' padding='13px'>
        <Slider
          marks={marks}
          ticks
          range
          onAfterChange={toastValue}
          onChange={value => {
            console.log(value)
          }}
        />
      </DemoBlock>

      <DemoBlock title='禁用状态' padding='13px'>
        <Slider marks={marks} ticks disabled value={40} />
      </DemoBlock>

      <DemoBlock title='自定义样式（通过 style）' padding='13px'>
        <Slider
          style={{ '--fill-color': '#00b578' }}
          defaultValue={40}
          onAfterChange={toastValue}
        />
      </DemoBlock>

      <DemoBlock title='自定义样式（通过 className）' padding='13px'>
        <Slider
          className='my-slider'
          defaultValue={40}
          onAfterChange={toastValue}
        />
      </DemoBlock>
      <DemoBlock title='自定义滑块图标' padding='13px'>
        <Slider
          className='my-slider'
          defaultValue={40}
          onAfterChange={toastValue}
          icon={<HeartOutline />}
        />
      </DemoBlock>
    </>
  )
}
