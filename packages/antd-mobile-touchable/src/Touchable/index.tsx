import * as React from 'react'
import View from '../View'
import convertRef from '../View/convertRef'
import { TouchablePropType } from '../PropsType'
import usePressEvents from '../usePressEvents'

const delayPressIn = 50
const delayPressOut = 0
const delayLongPress = 450

const Touchable: React.FC<TouchablePropType> = props => {
  const {
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,

    disabled,
    children,
  } = props

  // 将没有交互反馈的元素都视为 disabled ，这样子才不会对上层 Touchable 元素产生影响
  const sysDisabled =
    disabled || (!onLongPress && !onPress && !onPressIn && !onPressOut)

  const pressConfig = React.useMemo(
    () => ({
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled: sysDisabled,
      onLongPress,
      onPress: event => {
        // 类型为 touchend 表示是 touch 集合的 onPress
        if (event.type === 'touchend') {
          // 由于 onPress(touchend) 比 click input focus 等事件早执行，为了避免一些穿透现象，这里阻止了 onPress 的默认行为
          event.preventDefault()
          // 由于上一行取消了 onPress (touchend) 的默认行为，即按钮不会再触发 click 事件，这里做一个 click 事件补偿，以免上层元素有 click 相关的事件（比如自动埋点）没办法触发
          event.target?.click?.()
        }
        onPress?.(event)

        // TODO: 类型为 mouseup 表示为 mouse 集合的 onPress
        // 目前这一类并没有点击穿透的现象，因此这里不做特殊处理
      },
      onPressIn,
      onPressOut,
    }),
    [sysDisabled, onLongPress, onPress, onPressIn, onPressOut],
  )

  const child = React.Children.only(children) as any
  const { hostRef, ref } = convertRef(child?.ref)
  const pressEventHandlers = usePressEvents(hostRef, pressConfig)

  return (
    <View {...pressEventHandlers}>
      {React.cloneElement(child, {
        ref,
      })}
    </View>
  )
}

export default Touchable
