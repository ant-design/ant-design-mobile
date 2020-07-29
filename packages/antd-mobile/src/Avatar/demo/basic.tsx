import * as React from 'react'
import { unstable_Avatar as Avatar } from '@ant-design/mobile'
import { useSelect } from '../../_internal/demo'

export default () => {
  const [state, view] = useSelect({
    name: {
      desc: '名字',
      v: false,
    },
    description: {
      desc: '描述',
      v: false,
    },
  })

  const addProps = {
    name: state.name ? '小蚂蚁' : undefined,
    description: state.description ? '一二一一二一' : undefined,
  }

  return (
    <div>
      {view}
      <Avatar {...addProps} />
    </div>
  )
}
