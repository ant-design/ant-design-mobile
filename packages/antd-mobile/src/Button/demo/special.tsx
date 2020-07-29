import * as React from 'react'
import { unstable_Button as Button } from '@ant-design/mobile'

export default () => {
  return (
    <div style={{ padding: '0 24px' }}>
      <h3>capsule</h3>
      auto width:
      <Button type="ghost" capsuleSize="lg" capsule capsuleAutoWidth>
        a
      </Button>
      <br />
      min width:
      <Button type="ghost" capsuleSize="lg" capsule>
        m
      </Button>
      <h3>icon</h3>
      <Button
        icon={
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg"
            alt=""
          />
        }
      >
        icon img
      </Button>
      <br />
    </div>
  )
}
