import * as React from 'react'
import {
  unstable_ErrorPage as ErrorPage,
  unstable_Button as Button,
} from '@ant-design/mobile'

export default () => (
  <div>
    <ErrorPage
      src={
        'https://gw.alipayobjects.com/mdn/rms_997765/afts/img/A*utEARL8Wu0EAAAAAAAAAAABkARQnAQ'
      }
      text={'付款没成功'}
      subText={'请重新付款'}
    >
      <Button type="ghost" capsule>
        返回
      </Button>
    </ErrorPage>
  </div>
)
