import React from 'react'
import { FloatingPanel, List } from 'antd-mobile'
import { DemoDescription } from '../../../demos'

const data = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
]

const anchors = [100, window.innerHeight * 0.4, window.innerHeight * 0.8]

export default () => {
  return (
    <>
      <DemoDescription></DemoDescription>
      <FloatingPanel anchors={anchors}>
        <List>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </FloatingPanel>
    </>
  )
}
