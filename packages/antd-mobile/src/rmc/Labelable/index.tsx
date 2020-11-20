/**
 * Labelable
 *
 * 作用是让普通非表单组件拥有 label 可控的能力
 *
 * 1.
 * 如下所示，点击 label 的时候，X 组件内部的 handleFocus 会被触发
 * <label htmlFor="id" />
 *
 * <X id="id" />
 *
 * const X = props => {
 *  return <Labelable id={props.id} onFocus={handleFocus} />
 * }
 *
 * 2. Labelable 本身接受一个子元素，点击子元素的 div 也会触发 handleFocus
 *
 * const X = props => {
 *  return <Labelable onFocus={handleFocus}>
 *    <div />
 *  </Labelable>
 * }
 *
 * 3. autoFocus 属性会让组件渲染后就触发 handleFocus
 *
 * 4. 保留了 id, disabled, name, value, tabIndex, 使得表单提交的时候能正确获取值
 */

import * as React from 'react'
import { withError } from '../ErrorBoundary'

const hiddenStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  padding: 0,
  margin: 0,
  border: 0,
  display: 'block',
}

interface InputProps {
  id?: string
  name?: string
  disabled?: boolean
  tabIndex?: number
  value?: string
}

export interface LabelInstance {
  focus(): void
  blur(): void
}

const Labelable: React.FC<
  Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'ref'
  > & {
    ref?: React.Ref<LabelInstance>
  }
> & {
  getProps: (props: any) => InputProps
} = props => {
  const {
    children,
    // @ts-ignore
    forwardRef,
    ...rest
  } = props

  const inputRef = React.useRef<HTMLInputElement>(null)

  // 暂时只提供 focus 和 blur 两个方法
  React.useImperativeHandle(forwardRef, () => ({
    focus: () => {
      inputRef.current?.focus()
    },
    blur: () => {
      inputRef.current?.blur()
    },
  }))

  return (
    <>
      <label>
        <input
          {...rest}
          ref={inputRef}
          // 必须有 readOnly , 不然会唤起真的键盘
          readOnly
          style={hiddenStyle}
        />
        {children}
      </label>
    </>
  )
}

Labelable.defaultProps = {
  type: 'text',
}

Labelable.getProps = (props: any) => {
  const keyMap: { [k: string]: boolean } = {
    id: true,
    name: true,
    tabIndex: true,
    value: true,
    disabled: true,
  }
  return Object.keys(props).reduce((prev, item) => {
    if (keyMap[item]) {
      // @ts-ignore
      prev[item] = props[item]
    }

    return prev
  }, {} as InputProps)
}

export default withError(Labelable, {
  forwardRef: true,
})
