import React from 'react'
import { createErrorBlock, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { defaultImage } from 'antd-mobile/es/components/error-block/images'

const ErrorBlock = createErrorBlock({
  'default': defaultImage,
  'empty':
    'https://gw.alipayobjects.com/zos/bmw-prod/7a2970f8-9247-4196-b3b3-2d0218c18b59.svg',
})

export default () => {
  return (
    <>
      <DemoBlock title='四种状态'>
        <Space block direction='vertical' style={{ '--gap': '16px' }}>
          <ErrorBlock status='default' />
          <ErrorBlock status='empty' />
        </Space>
      </DemoBlock>
    </>
  )
}
