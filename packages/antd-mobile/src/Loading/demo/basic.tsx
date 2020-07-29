import * as React from 'react'
import {
  unstable_Loading as Loading,
  unstable_Button as Button,
} from '@ant-design/mobile'
import './style.less'

const prefixCls = 'amd-loading-demo'

export default () => {
  const [show, updateShow] = React.useState<boolean>(false)

  return (
    <div>
      <div className={prefixCls}>
        <Loading show={true} className={`${prefixCls}-example`}>
          区域加载
        </Loading>
        <Loading
          show={true}
          text={'请稍候'}
          delay={3000}
          className={`${prefixCls}-example`}
        >
          延时3s加载
        </Loading>
        <div className="example3">
          <Loading
            show={show}
            text={'请稍候'}
            delay={3000}
            className={`${prefixCls}-example`}
          />
          <Button
            type="primary"
            onPress={() => {
              updateShow(true)
            }}
          >
            点击延时3s加载
          </Button>
          <Button
            onPress={() => {
              updateShow(false)
            }}
          >
            点击取消加载
          </Button>
        </div>
      </div>
    </div>
  )
}
