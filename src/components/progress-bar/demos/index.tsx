import React, {useState} from 'react'
import 'antd-mobile/lib/index.less'
import {DemoBlock} from 'antd-mobile/src/demos/demo-block'
import styles from './index.less'
import {Button, ProgressBar, Space} from 'antd-mobile'

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
              style={{marginRight: '8px'}}
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
          <ProgressBar percent={50} strokeWidth={2} />
          <ProgressBar percent={75} strokeWidth={5} />
          <ProgressBar percent={100} strokeWidth={8} />
        </Space>
      </DemoBlock>
      <DemoBlock title='指定颜色'>
        <ProgressBar percent={100} strokeColor='#FF3141' />
      </DemoBlock>
    </>
  )
}
