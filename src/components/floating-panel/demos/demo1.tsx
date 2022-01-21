import React from 'react'
import { FloatingPanel, List } from 'antd-mobile'
import { DemoDescription } from 'demos'

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
  const [height, setHeight] = React.useState(100)
  const [still, setStill] = React.useState(false)

  const onHeightChange = (height: number, still: boolean) => {
    setHeight(height)
    setStill(still)
  }

  return (
    <>
      <DemoDescription>
        height: {height}
        still: {still + ''}
      </DemoDescription>
      <FloatingPanel anchors={anchors} onHeightChange={onHeightChange}>
        <List>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </FloatingPanel>
    </>
  )
}
