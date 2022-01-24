import React, { useState } from 'react'
import { Stepper, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'

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

      <DemoBlock title='输入框只读状态'>
        <Stepper inputReadOnly />
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
          style={{
            '--border': '1px solid #f5f5f5',
            '--border-inner': 'none',
            '--height': '36px',
            '--input-width': '70px',
            '--input-background-color': '#ffffff',
            '--active-border': '1px solid #1677ff',
          }}
          defaultValue={10000}
          step={10000}
        />
      </DemoBlock>
    </>
  )
}
