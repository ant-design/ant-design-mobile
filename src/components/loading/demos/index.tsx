import React from 'react'
import 'antd-mobile/lib/index.less'
import {Loading} from 'antd-mobile'
import {DemoBlock} from 'antd-mobile/src/demos/demo-block'

export default () => {
  return (
    <div>
      <DemoBlock title='默认'>
        <Loading />
      </DemoBlock>
      <DemoBlock title='主题色的 Loading'>
        <Loading color='primary' />
      </DemoBlock>
      <DemoBlock title='白色的 Loading' background='#a5a5a5'>
        <Loading color='white' />
      </DemoBlock>
      <DemoBlock title='三种大小'>
        <Loading size='small' />
        <Loading size='middle' />
        <Loading size='large' />
      </DemoBlock>
      <DemoBlock title='自动适配当前文本颜色'>
        <div style={{color: '#00b578'}}>
          <Loading color='currentColor' />
          <span>绿色文字</span>
        </div>
        <div style={{color: '#ff3141'}}>
          <Loading color='currentColor' />
          <span>红色文字</span>
        </div>
      </DemoBlock>
    </div>
  )
}
