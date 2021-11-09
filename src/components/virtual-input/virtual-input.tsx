import React, {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react'
import type { InputProps } from '../input'
import { NativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = 'adm-virtual-input'

export type VirtualInputProps = {
  onFocus?: () => void
  onBlur?: () => void
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
} & Pick<InputProps, 'value' | 'placeholder'> &
  NativeProps

const defaultProps = {
  value: '',
}

export type VirtualInputRef = {
  focus: () => void
  blur: () => void
}

export const VirtualInput = forwardRef<VirtualInputRef, VirtualInputProps>(
  (p, ref) => {
    const props = mergeProps(defaultProps, p)
    const rootRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
      const root = rootRef.current
      if (!root) return
      if (document.activeElement !== root) {
        return
      }
      root.scrollTo({
        left: root.clientWidth,
      })
    }, [props.value])

    useImperativeHandle(ref, () => ({
      focus: () => {
        rootRef.current?.focus()
      },
      blur: () => {
        rootRef.current?.blur()
      },
    }))

    return (
      <div
        ref={rootRef}
        className={classPrefix}
        tabIndex={0}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onClick={props.onClick}
      >
        <span className={`${classPrefix}-content`}>{props.value}</span>
        <div className={`${classPrefix}-caret-container`}>
          <div className={`${classPrefix}-caret`} />
        </div>
        {!props.value && (
          <span className={`${classPrefix}-placeholder`}>
            {props.placeholder}
          </span>
        )}
      </div>
    )
  }
)
