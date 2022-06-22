import React, { useState } from 'react'
import { Button, ProgressBar, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const [percent, setPercent] = useState<number>(20)
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space direction='vertical' block>
          <Space block>
            <Button
              color='primary'
              disabled={percent === 100}
              onClick={() => {
                setPercent(pre => pre + 10)
              }}
            >
              进度+10
            </Button>
            <Button
              color='primary'
              fill='outline'
              onClick={() => {
                setPercent(0)
              }}
            >
              重置
            </Button>
          </Space>
          <ProgressBar percent={percent} />
        </Space>
      </DemoBlock>

      <DemoBlock title='显示进度文字'>
        <Space direction='vertical' block>
          <ProgressBar percent={50} text />
          <ProgressBar
            percent={50}
            text='已完成 3/6 步'
            style={{
              '--text-width': '80px',
            }}
          />
        </Space>
      </DemoBlock>

      <DemoBlock title='指定线条宽度'>
        <Space direction='vertical' block>
          <ProgressBar
            percent={50}
            style={{
              '--track-width': '4px',
            }}
          />
          <ProgressBar
            percent={80}
            style={{
              '--track-width': '12px',
            }}
          />
        </Space>
      </DemoBlock>
    </>
  )
}
