import * as React from 'react'
import { unstable_Tabs as Tabs } from '@ant-design/mobile'
import { useSelect } from '../../_internal/demo'

const { Item } = Tabs

const handleChange = (index: number) => {
  console.log(index)
}

const tabItemStyle = {
  height: 100,
}

export default () => {
  const [state, view] = useSelect({
    type: {
      desc: '类型',
      v: 'basis',
      type: 'radio',
      options: ['basis', 'capsule', 'mixin'],
    },
    badge: {
      desc: '红点',
      v: false,
    },
    animate: {
      desc: '过渡动画',
      v: false,
    },
    overLength: {
      desc: '超过最多选项',
      v: false,
    },
  })

  const len = [{}, {}, {}, {}]
  if (state.overLength) len.push({})
  return (
    <div>
      {view}
      <Tabs
        onChange={handleChange}
        type={state.type}
        disabled={!state.animate}
        animateTransitions={!state.animate}
      >
        {len.map((v, i) => {
          return (
            <Item
              key={i}
              tab={{
                title: '选项卡',
                desc: '描述文案',
                badge: state.badge ? '6' : undefined,
              }}
            >
              <div style={tabItemStyle}>选项卡{i + 1}</div>
            </Item>
          )
        })}
      </Tabs>
    </div>
  )
}
