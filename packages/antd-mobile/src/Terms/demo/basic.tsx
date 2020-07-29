import * as React from 'react'
import {
  unstable_Button as Button,
  unstable_Terms as Terms,
} from '@ant-design/mobile'

export default () => (
  <div>
    <Terms
      term={
        <>
          同意<a>《用户授权协议》</a>
        </>
      }
    >
      <Button type="primary">提交</Button>
    </Terms>

    <Terms
      checked={false}
      term={
        <>
          同意<a>《用户授权协议》</a>
        </>
      }
    >
      <Button type="primary">提交</Button>
    </Terms>

    <Terms
      term={
        <>
          同意<a>《用户授权协议》</a>
        </>
      }
      describe
    >
      <Button type="primary">提交</Button>
    </Terms>
  </div>
)
