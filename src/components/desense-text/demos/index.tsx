import { DemoBlock } from 'antd-mobile/src/demos/demo-block'
import React, { useState } from 'react'
import { DesensText } from 'antd-mobile'

export default () => {
  const [isDesens, setDesens] = useState<boolean>(true)

  return (
    <>
      <DemoBlock title='基础用法'>
        <DesensText text='18812341234' desenseText='188****1234' />
      </DemoBlock>
      <DemoBlock title='受控组件'>
        <DesensText
          text='这是全部数据脱敏信息'
          desenseText='这是**信息'
          desense={isDesens}
          onChange={setDesens}
        />
      </DemoBlock>
    </>
  )
}
