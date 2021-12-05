import React, { useState } from 'react'
import { DesenseText } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const [isDesens, setDesens] = useState<boolean>(true)

  return (
    <>
      <DemoBlock title='基础用法'>
        <DesenseText text='18812341234' desenseText='188****1234' />
      </DemoBlock>

      <DemoBlock title='受控组件'>
        <DesenseText
          text='这是全部数据脱敏信息'
          desenseText='这是**信息'
          desense={isDesens}
          onChange={setDesens}
        />
      </DemoBlock>
    </>
  )
}
