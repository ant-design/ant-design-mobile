import React from 'react'
import {
  Button,
  ConfigProvider,
  Dialog,
  setDefaultConfig,
  Space,
  Toast,
} from 'antd-mobile'
import { DemoBlock } from 'demos'
import zhCN from 'antd-mobile/es/locales/zh-CN'

export default () => {
  return (
    <>
      <div id='root-wrap' />
      <DemoBlock title='默认全局配置'>
        <ConfigProvider locale={zhCN}>
          <Button
            onClick={() =>
              Toast.show({
                content: 'Hello World',
              })
            }
          >
            轻提示
          </Button>
        </ConfigProvider>
      </DemoBlock>

      <DemoBlock title='自定义全局配置'>
        <Space>
          <Button
            onClick={() => {
              setDefaultConfig({
                globalConfig: {
                  getContainer: document.getElementById('root-wrap'),
                },
              })
              Dialog.alert({
                content: 'getContainer #root-id',
              })
            }}
          >
            自定义全局配置
          </Button>
          <Button
            onClick={() => {
              setDefaultConfig({
                globalConfig: {
                  Toast: { duration: 5000 },
                },
              })
              Toast.show({
                content: 'Toast duration 5000',
              })
            }}
          >
            轻提示
          </Button>
        </Space>
      </DemoBlock>
    </>
  )
}
