import * as React from 'react'
import {
  unstable_Button as Button,
  unstable_Modal as Modal,
} from '@ant-design/mobile'
import { Alipay } from '@ant-design/mobile-icons'
import { useSelect } from '../../_internal/demo'

const fn = (e: any) =>
  Modal.alert({
    content: `trigger type: ${e.type}`,
  })

export default () => {
  const [state, view] = useSelect({
    multiLine: {
      desc: '多行',
      v: false,
    },
    capsule: {
      desc: '胶囊',
      v: false,
    },
    capsuleSize: {
      desc: '胶囊尺寸',
      hide(d) {
        return !d.capsule
      },
      v: 'md',
      type: 'radio',
      options: ['md', 'lg', 'sm'],
    },
    icon: {
      desc: '图标',
      v: false,
    },
    disabled: {
      desc: '禁用',
      v: false,
    },
    loading: {
      desc: '加载中',
      v: false,
    },
  })

  const addProps = {
    subTitle: state.multiLine ? '第二行' : undefined,
    capsule: state.capsule,
    icon: state.icon ? Alipay : undefined,
    disabled: state.disabled,
    loading: state.loading,

    // 这类型暂时没办法处理
    capsuleSize: state.capsule ? (state.capsuleSize as any) : undefined,

    onPress: fn,
  }

  return (
    <div
      style={{ padding: '0 24px' }}
      onClick={() => {
        console.log('should log when button press call')
      }}
    >
      {view}
      <h3>changeable</h3>
      <Button {...addProps} data-y="111">
        default
      </Button>
      <br />
      <Button type="primary" {...addProps}>
        primary
      </Button>
      <br />
      <Button type="ghost" {...addProps}>
        ghost
      </Button>
      <br />
      <Button type="warn" {...addProps}>
        warn
      </Button>
      <br />
      <Button type="warn-ghost" {...addProps}>
        warn-ghost
      </Button>
      <br />
      <Button type="light" {...addProps} loadingText="发送中">
        light
      </Button>
    </div>
  )
}
