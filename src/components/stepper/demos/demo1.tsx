import React from 'react'
import { Stepper } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Stepper
          defaultValue={1}
          onChange={value => {
            console.log(value)
          }}
        />
      </DemoBlock>

      <DemoBlock title='步长设置'>
        <Stepper step={10} defaultValue={10} />
      </DemoBlock>

      <DemoBlock title='限制输入范围'>
        <Stepper min={-5} max={5} />
      </DemoBlock>

      <DemoBlock title='格式化到整数'>
        <Stepper digits={0} />
      </DemoBlock>

      <DemoBlock title='格式化到一位小数'>
        <Stepper digits={1} />
      </DemoBlock>
    </>
  )
}
