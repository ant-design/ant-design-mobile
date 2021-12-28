import React from 'react'
import { Calendar } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Calendar
          // selectionMode='single'
          selectionMode='range'
          // value={[new Date('2021-12-10'), new Date('2021-12-15')]}
          onChange={val => {
            console.log(val)
          }}
        />
      </DemoBlock>
    </>
  )
}
