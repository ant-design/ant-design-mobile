import React from 'react'
import { NavBar, Toast } from 'antd-mobile'
import {
  ArrowLeftOutlined,
  SearchOutlined,
  EllipsisOutlined,
} from '@ant-design/icons'
import { DemoBlock } from 'demos'
import './index.less'

export default () => {
  const right = (
    <>
      <SearchOutlined style={{ fontSize: '18px', marginRight: '16px' }} />
      <EllipsisOutlined style={{ fontSize: '18px' }} />
    </>
  )

  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
    })

  return (
    <>
      <DemoBlock title='基础使用' padding='0'>
        <NavBar onBack={back}>标题</NavBar>
      </DemoBlock>
      <DemoBlock title='自定义返回文字' padding='0'>
        <NavBar back='返回' onBack={back}>
          标题
        </NavBar>
      </DemoBlock>
      <DemoBlock title='自定义返回 Icon' padding='0'>
        <NavBar back='返回' backArrow={<ArrowLeftOutlined />} onBack={back}>
          标题
        </NavBar>
      </DemoBlock>
      <DemoBlock title='自定义右侧区域' padding='0'>
        <NavBar right={right} onBack={back}>
          标题
        </NavBar>
      </DemoBlock>
      <DemoBlock title='自定义标题内容' padding='0'>
        <NavBar onBack={back}>
          <div>
            <div>标题</div>
            <div className='my-nav-bar-subtitle'>副标题</div>
          </div>
        </NavBar>
      </DemoBlock>
      <DemoBlock title='自定义高度和下边框' padding='0'>
        <NavBar
          style={{
            '--height': '36px',
            '--border-bottom': '1px #eee solid',
          }}
          onBack={back}
        >
          标题
        </NavBar>
      </DemoBlock>
    </>
  )
}
