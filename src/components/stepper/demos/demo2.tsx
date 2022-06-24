import React from 'react'
import { Stepper, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
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

      <DemoBlock title='允许清空'>
        <Stepper
          allowEmpty={true}
          min={10}
          max={20}
          onChange={value => {
            console.log(value)
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
            '--input-background-color': 'var(--adm-color-background)',
            '--active-border': '1px solid #1677ff',
          }}
          defaultValue={10000}
          step={10000}
        />
      </DemoBlock>
    </>
  )
}
