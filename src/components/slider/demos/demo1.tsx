import React from 'react'
import { Slider, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'

const marks = {
  0: 0,
  20: 20,
  40: 40,
  60: 60,
  80: 80,
  100: 100,
}

export default () => {
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
      <DemoBlock title='基础用法'>
        <Slider onAfterChange={toastValue} />
      </DemoBlock>

      <DemoBlock title='显示刻度并指定步距'>
        <Slider ticks step={10} />
      </DemoBlock>

      <DemoBlock title='传入刻度标记'>
        <Slider marks={marks} ticks />
      </DemoBlock>

      <DemoBlock title='最大/最小值'>
        <Slider
          step={100}
          min={100}
          max={1000}
          ticks
          onAfterChange={toastValue}
        />
      </DemoBlock>

      <DemoBlock title='默认值'>
        <Slider step={20} defaultValue={40} />
      </DemoBlock>

      <DemoBlock title='在拖动时显示悬浮提示'>
        <Slider step={20} defaultValue={60} popover />
      </DemoBlock>
    </>
  )
}
