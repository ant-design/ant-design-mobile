import React from 'react'
import { Button, ErrorBlock } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <DemoBlock title='自定义'>
      <ErrorBlock
        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
        style={{
          '--image-height': '150px',
        }}
        description={
          <span>
            Customize <a href='#API'>Description</a>
          </span>
        }
      >
        <Button color='primary'>Create Now</Button>
      </ErrorBlock>
    </DemoBlock>
  )
}
