import React, { useState } from 'react'
import { Stepper, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'

import styles from './demo2.less'

export default () => {
  const [num, setNum] = useState(1)

  return (
    <>
      <DemoBlock title='基础用法(非受控)'>
        <Stepper
          defaultValue={1}
          onChange={value => {
            console.log(value)
          }}
        />
      </DemoBlock>

      <DemoBlock title='受控组件'>
        <Stepper
          value={num}
          onChange={value => {
            setNum(value)
            console.log(value)
          }}
        />
      </DemoBlock>

      <DemoBlock title='步长设置'>
        <Stepper step={10} defaultValue={10} />
      </DemoBlock>

      <DemoBlock title='设置输入范围'>
        <Stepper min={-5} max={5} />
      </DemoBlock>

      <DemoBlock title='格式化到整数'>
        <Stepper digits={0} />
      </DemoBlock>

      <DemoBlock title='格式化到一位小数'>
        <Stepper digits={1} />
      </DemoBlock>

      <DemoBlock title='禁用状态'>
        <Stepper disabled />
      </DemoBlock>

      <DemoBlock title='自定义宽度'>
        <Stepper style={{ width: '120px' }} defaultValue={10000} step={10000} />
      </DemoBlock>

      <DemoBlock title='获得/失去焦点'>
        <Stepper
          onFocus={() => {
            Toast.show('获得焦点')
          }}
          onBlur={() => {
            Toast.show('失去焦点')
          }}
        />
      </DemoBlock>

      <DemoBlock title='自定义css变量'>
        <Stepper
          className={styles.cssVariable}
          defaultValue={10000}
          step={10000}
        />
      </DemoBlock>
    </>
  )
}
