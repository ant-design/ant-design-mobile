import { FloatingPanel, List } from 'antd-mobile'
import React from 'react'

const data = Array.from({ length: 17 }, (_, i) => String.fromCharCode(65 + i))

const anchors = [100, window.innerHeight * 0.4, window.innerHeight * 0.8]

export default () => {
  return (
    <>
      <FloatingPanel anchors={anchors} placement='top'>
        <List>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </FloatingPanel>
    </>
  )
}
