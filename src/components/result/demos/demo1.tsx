import React from 'react'
import { Result } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { SmileOutline } from 'antd-mobile-icons'

import './demo1.less'

export default () => {
  return (
    <>
      <DemoBlock title='成功状态' padding='0'>
        <Result
          status='success'
          title='操作成功'
          description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
        />
      </DemoBlock>

      <DemoBlock title='等待状态' padding='0'>
        <Result
          status='waiting'
          title='等待处理'
          description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
        />
      </DemoBlock>

      <DemoBlock title='提示状态' padding='0'>
        <Result
          status='info'
          title='信息提示'
          description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
        />
      </DemoBlock>

      <DemoBlock title='警告状态' padding='0'>
        <Result
          status='warning'
          title='警告提示'
          description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
        />
      </DemoBlock>

      <DemoBlock title='失败状态' padding='0'>
        <Result
          status='error'
          title='无法完成操作'
          description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
        />
      </DemoBlock>

      <DemoBlock title='自定义图标' padding='0'>
        <Result
          icon={<SmileOutline />}
          status='success'
          title='Well done'
          description='内容详情可折行，建议不超过两行建议不超过两行建议不超过两行'
        />
      </DemoBlock>
    </>
  )
}
