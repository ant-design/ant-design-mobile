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

      <DemoBlock title='指定线条颜色'>
        <Space block direction='vertical'>
          <ProgressBar
            percent={90}
            style={{
              '--fill-color': 'var(--adm-color-success)',
            }}
          />
          <ProgressBar
            percent={30}
            style={{
              '--fill-color': 'var(--adm-color-warning)',
            }}
          />
          <ProgressBar
            percent={60}
            style={{
              '--fill-color': 'var(--adm-color-danger)',
            }}
          />
          <ProgressBar
            percent={70}
            style={{
              '--fill-color':
                'linear-gradient(to right, var(--adm-color-primary), var(--adm-color-success))',
            }}
          />
        </Space>
      </DemoBlock>

      <DemoBlock title='指定轨道颜色'>
        <ProgressBar
          percent={50}
          style={{
            '--track-color': '#CDE2FF',
          }}
        />
      </DemoBlock>
    </>
  )
}
