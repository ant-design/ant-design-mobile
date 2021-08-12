import React from 'react'
import { Button, ErrorBlock } from 'antd-mobile'

export default () => {
  return (
    <div className='container'>
      <ErrorBlock
        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
        description={
          <span>
            Customize <a href='#API'>Description</a>
          </span>
        }
      >
        <Button color='primary'>Create Now</Button>
      </ErrorBlock>
    </div>
  )
}
