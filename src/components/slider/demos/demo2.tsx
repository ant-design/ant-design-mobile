import React, { useState } from 'react'
import { Slider, Toast } from 'antd-mobile'
import { HeartOutline } from 'antd-mobile-icons'
import { DemoBlock } from 'demos'

import styles from './demo2.less'

const marks = {
  0: 0,
  20: 20,
  40: 40,
  60: 60,
  80: 80,
  100: 100,
}

export default () => {
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
      <DemoBlock title={`拖拽结束监听 (最终拖拽值${onAfterChangeValue})`}>
        <Slider step={20} onAfterChange={value => setAfterValue(value)} />
      </DemoBlock>

      <DemoBlock title='双滑块'>
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

      <DemoBlock title='禁用状态'>
        <Slider marks={marks} ticks disabled value={40} />
      </DemoBlock>

      <DemoBlock title='自定义样式（通过 style）'>
        <Slider
          style={{ '--fill-color': '#00b578' }}
          defaultValue={40}
          onAfterChange={toastValue}
        />
      </DemoBlock>

      <DemoBlock title='自定义样式（通过 className）'>
        <Slider
          className={styles.mySlider}
          defaultValue={40}
          onAfterChange={toastValue}
        />
      </DemoBlock>
      <DemoBlock title='自定义滑块图标'>
        <Slider
          defaultValue={40}
          onAfterChange={toastValue}
          icon={<HeartOutline className={styles.myThumbIcon} />}
        />
      </DemoBlock>
    </>
  )
}
