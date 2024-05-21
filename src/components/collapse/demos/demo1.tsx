import { Collapse, Ellipsis } from 'antd-mobile'
import React from 'react'

const content = `这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本`

// 初次展开Collapse.Panel时，会有空白处
export default function App() {
  return (
    <Collapse bordered={false}>
      <Collapse.Panel title='panel' key='1'>
        <Ellipsis
          direction='end'
          rows={3}
          expandText='展开'
          collapseText='收起'
          content={content}
        />
      </Collapse.Panel>
    </Collapse>
  )
}
