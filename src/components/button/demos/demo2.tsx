import React from 'react'
import { Button, Space } from 'antd-mobile'
import { DemoBlock, sleep } from 'demos'
import { SearchOutline } from 'antd-mobile-icons'

export default () => {
  return (
    <>
      <DemoBlock title='带图标的按钮'>
        <Button>
          <Space>
            <SearchOutline />
            <span>搜索</span>
          </Space>
        </Button>
      </DemoBlock>

      <DemoBlock title='禁用状态'>
        <Space wrap>
          <Button disabled>Disabled</Button>
          <Button disabled color='primary'>
            Disabled
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='加载状态'>
        <Space wrap>
          <Button loading color='primary' loadingText='正在加载'>
            Loading
          </Button>
          <Button loading>Loading</Button>
          <Button
            loading='auto'
            onClick={async () => {
              await sleep(1000)
            }}
          >
            Auto Loading
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='不同类型圆角'>
        <Space wrap>
          <Button shape='default' color='primary'>
            Default Button
          </Button>
          <Button block shape='rounded' color='primary'>
            Rounded Button
          </Button>
          <Button block shape='rectangular' color='primary'>
            Rectangular Button
          </Button>
        </Space>
      </DemoBlock>
    </>
  )
}
