import { Alert, Button } from 'antd-mobile'
import {
  AppOutline,
  AudioMutedOutline,
  LockOutline,
  PictureWrongOutline,
} from 'antd-mobile-icons'
import { DemoBlock } from 'demos'
import React, { useState } from 'react'

export default () => {
  const [close, setClose] = useState(false)
  return (
    <>
      <DemoBlock title='无图标'>
        <Alert type='success'>Success message</Alert>
        <br />
        <Alert type='info'>Info message</Alert>
        <br />
        <Alert type='warning'>Warning message</Alert>
        <br />
        <Alert type='error'>Error message</Alert>
      </DemoBlock>

      <DemoBlock title='有图标'>
        <Alert type='success' showIcon>
          Success message
        </Alert>
        <br />
        <Alert type='info' showIcon>
          Info message
        </Alert>
        <br />
        <Alert type='warning' showIcon>
          Warning message
        </Alert>
        <br />
        <Alert type='error' showIcon>
          Error message
        </Alert>
      </DemoBlock>

      <DemoBlock title='自定义图标'>
        <Alert type='success' showIcon icon={<AppOutline />}>
          Success message
        </Alert>
        <br />
        <Alert type='info' showIcon icon={<AudioMutedOutline />}>
          Info message
        </Alert>
        <br />
        <Alert type='warning' showIcon icon={<LockOutline />}>
          Warning message
        </Alert>
        <br />
        <Alert type='error' showIcon icon={<PictureWrongOutline />}>
          Error message
        </Alert>
      </DemoBlock>

      <DemoBlock title='右侧额外内容'>
        <Alert type='info' showIcon extra={<a href='#'>Learn more</a>}>
          Info message
        </Alert>
      </DemoBlock>

      <DemoBlock title='省略内容'>
        <Alert type='info' showIcon ellipsis>
          This is a long long long long long long long long long long message
        </Alert>
      </DemoBlock>

      <DemoBlock title='关闭按钮'>
        <Button
          onClick={() => setClose(false)}
          size='small'
          style={{ marginBottom: 8 }}
        >
          展示
        </Button>
        <br />
        {!close && (
          <Alert type='info' showIcon closeable onClose={() => setClose(true)}>
            Info message
          </Alert>
        )}
      </DemoBlock>
    </>
  )
}
