import React from 'react'
import { DemoBlock } from 'demos'
import { Button, Dialog, setDefaultConfig } from 'antd-mobile'
import enUS from 'antd-mobile/src/locales/en-US'

setDefaultConfig({
  locale: enUS,
})

export default () => {
  return (
    <DemoBlock title='设置全局默认值'>
      <Button
        onClick={() => {
          Dialog.alert({
            content: 'Hello',
          })
        }}
      >
        Show Dialog
      </Button>
    </DemoBlock>
  )
}
