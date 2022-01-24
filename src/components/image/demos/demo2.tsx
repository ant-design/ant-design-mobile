import React, { useState } from 'react'
import { Image, Button, DotLoading } from 'antd-mobile'
import { DemoBlock, DemoDescription } from 'demos'
import { PictureWrongOutline } from 'antd-mobile-icons'

export default () => {
  const imageSrcs = [
    'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    'https://error123',
  ]
  const [success, setSuccess] = useState(true)
  const imageSrc = imageSrcs[success ? 0 : 1]

  return (
    <DemoBlock title='Success and failed'>
      <div>
        <Image
          src={imageSrc}
          placeholder={<DotLoading color='primary' />}
          fallback={
            <PictureWrongOutline
              style={{ fontSize: 96, color: 'var(--adm-color-weak)' }}
            />
          }
        />
      </div>
      <Button
        onClick={() => {
          setSuccess(!success)
        }}
      >
        toggle to {success ? 'error' : 'success'}
      </Button>
      <DemoDescription content={imageSrc} />
    </DemoBlock>
  )
}
