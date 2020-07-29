import * as React from 'react'
import {
  unstable_List as List,
  unstable_Toast as Toast,
  unstable_Switch as Switch,
  unstable_Button as Button,
} from '@ant-design/mobile'
import { Alipay } from '@ant-design/mobile-icons'
import { useSelect } from '../../_internal/demo'
const { Item } = List

export default () => {
  const [c, SetC] = React.useState(false)
  const [state, view] = useSelect({
    radius: {
      desc: '圆角',
      v: false,
    },
    arrow: {
      desc: '箭头/方向',
      v: 'horizontal',
      type: 'radio',
      options: ['horizontal', 'up', 'down', 'empty'],
    },
    align: {
      desc: '箭头/对齐',
      v: 'middle',
      type: 'radio',
      hide: d => d.arrow === 'empty' || d.arrow === '',
      options: ['top', 'middle', 'bottom'],
    },
    android: {
      desc: '安卓效果',
      v: false,
    },
    brief: {
      desc: '多行',
      v: false,
    },
    thumb: {
      desc: '缩略图',
      v: 'icon',
      type: 'radio',
      options: ['icon', 'image'],
    },
    extra: {
      desc: '右边信息',
      v: false,
    },
    wrap: {
      desc: '右边信息换行',
      v: false,
      hide: d => !d.extra,
    },
  })

  const { radius, thumb, brief, extra, android, ...rest } = state
  const addProps = {
    ...rest,
    thumb:
      thumb === 'icon'
        ? Alipay
        : thumb === 'image'
        ? 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'
        : undefined,
    brief: brief ? '第二行' : undefined,
    extra: extra
      ? '详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细详细'
      : undefined,
    platform: android ? ('android' as any) : undefined,
  }

  return (
    <>
      {view}
      <List
        renderHeader="列表头部"
        renderFooter="列表底部"
        radius={state.radius}
      >
        <Item {...addProps} onPress={() => null}>
          基本可变
        </Item>
        <Item thumb={Alipay} extra="错误信息" error brief="第二行">
          多行
        </Item>
        <Item extra={<Switch checked={c} onChange={v => SetC(v)} />}>
          其他控件
        </Item>
        <Item
          extra={
            <Button type="ghost" capsule>
              按钮
            </Button>
          }
        >
          其他控件
        </Item>
      </List>
    </>
  )
}
