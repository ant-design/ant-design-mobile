import React, { useRef } from 'react'
import { FloatingBubble, Toast } from 'antd-mobile'
import { QuestionCircleFill } from 'antd-mobile-icons'
import { DemoBlock, lorem } from 'demos'

const longText = lorem.generateParagraphs(2)

export default () => {
  const onClick = () => {
    Toast.show('点击事件')
  }
  const containerRef = useRef<HTMLDivElement>({} as HTMLDivElement)
  return (
    <DemoBlock title='浮动气泡'>
      <div style={{ position: 'relative' }} ref={containerRef}>
        {longText}
        <FloatingBubble
          style={{
            '--initial-position-bottom': '16px',
            '--initial-position-right': '16px',
          }}
          onClick={onClick}
          bounds={containerRef.current}
        >
          <div className='children'>
            <QuestionCircleFill color='#2477ff' fontSize={36} />
          </div>
        </FloatingBubble>
      </div>
    </DemoBlock>
  )
}
