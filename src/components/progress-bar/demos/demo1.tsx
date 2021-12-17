import React, { useState } from 'react'
import { Button, ProgressBar, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const [percent, setPercent] = useState<number>(10)
  return (
    <>
      <DemoBlock title='基本用法'>
        <Space direction='vertical' block>
          <div>
            <Button
              color='primary'
              disabled={percent === 100}
              onClick={() => {
                setPercent(pre => pre + 10)
              }}
              style={{ marginRight: '8px' }}
            >
              进度+10
            </Button>
            <Button
              color='primary'
              fill='outline'
              onClick={() => {
                setPercent(10)
              }}
            >
              重置
            </Button>
          </div>
          <ProgressBar percent={percent} />
        </Space>
      </DemoBlock>

      <DemoBlock title='指定线条宽度'>
        <Space direction='vertical' block>
          <ProgressBar
            percent={50}
            style={{
              '--track-width': '2px',
            }}
          />
          <ProgressBar
            percent={75}
            style={{
              '--track-width': '5px',
            }}
          />
          <ProgressBar
            percent={100}
            style={{
              '--track-width': '8px',
            }}
          />
        </Space>
      </DemoBlock>

      <DemoBlock title='指定颜色'>
        <ProgressBar
          percent={50}
          style={{
            '--fill-color': '#FF3141',
            '--track-color': '#000000',
          }}
        />
      </DemoBlock>
    </>
  )
}
