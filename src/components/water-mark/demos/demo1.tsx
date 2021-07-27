import { Button, WaterMark, Selector, Space, Switch } from 'antd-mobile'
import { DemoBlock } from 'antd-mobile/src/demos/demo-block'
import React, { useState } from 'react'

const MODE_OPTIONS = [
  { label: '重复展示', value: 'repeat' },
  { label: '错行展示', value: 'interval' },
]

const defaults = {
  image: '',
  gapX: 24,
  gapY: 108,
  width: 120,
  height: 64,
  opacity: 0.15,
}

const textProps = {
  ...defaults,
  content: 'Ant Design Mobile',
}

const multilineTextProps = {
  ...defaults,
  content: ['Ant Design Mobile', 'Poplar'],
}

const imageProps = {
  image:
    'https://gw.alipayobjects.com/zos/bmw-prod/59a18171-ae17-4fc5-93a0-2645f64a3aca.svg',
  imageWidth: 115,
  imageHeight: 36,
  width: 140,
  height: 80,
  opacity: 1,
}

export default () => {
  const [props, updateProps] = useState<Record<string, unknown>>(textProps)

  const setProps = (state: typeof props) => {
    updateProps({ ...props, ...state })
  }

  return (
    <>
      <DemoBlock title='渲染模式'>
        <Selector
          defaultValue={['repeat']}
          options={MODE_OPTIONS}
          onChange={([value]) => setProps({ mode: value })}
        />
      </DemoBlock>
      <DemoBlock title='渲染内容'>
        <Space direction='vertical'>
          <Space>
            <Button onClick={() => setProps(textProps)}>文字水印</Button>
            <Button onClick={() => setProps(multilineTextProps)}>
              多行文字水印
            </Button>
          </Space>
          <Button onClick={() => setProps(imageProps)}>图片水印</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title='开启监视模式'>
        <Switch
          defaultChecked
          onChange={checked => setProps({ monitor: checked })}
        ></Switch>
      </DemoBlock>
      <WaterMark {...props} />
    </>
  )
}
