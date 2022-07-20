import React from 'react'
import { ProgressBar, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='直角的进度条'>
        <ProgressBar percent={50} rounded={false} />
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
