import React, {
  forwardRef,
  ReactElement,
  Ref,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import classNames from 'classnames'
import Button from '../button'
import { BasePopoverProps, Popover, PopoverRef } from './popover'

const classPrefix = `am-popover`

export type Action = {
  text: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  key?: string
  [key: string]: any
}

type PopoverPropsWithActions<T> = BasePopoverProps & {
  actions: T[]
  onSelect?: (text: T) => void
}

export const PopMenu = forwardRef<PopoverRef, PopoverPropsWithActions<Action>>(
  (props: PopoverPropsWithActions<Action>, ref) => {
    const innerRef = useRef<PopoverRef>(null)
    useImperativeHandle(ref, () => innerRef.current!, [])

    const onClick = useCallback(
      (e: Action) => {
        const { onSelect } = props
        if (onSelect) {
          onSelect(e)
        }
        innerRef.current?.hide()
      },
      [(props as PopoverPropsWithActions<Action>).onSelect]
    )

    const overlay = useMemo(() => {
      return (
        <>
          {((props as PopoverPropsWithActions<Action>).actions || []).map(
            (ele, index) => (
              <div
                className={classNames(`${classPrefix}-inner-menu`, {
                  [`${classPrefix}-inner-menu-with-icon`]: !!ele.icon,
                })}
                key={ele.key ?? index}
              >
                <Button
                  disabled={ele.disabled}
                  onClick={() => {
                    if (!ele.disabled) {
                      onClick(ele)
                    }
                  }}
                  fill='none'
                  block
                >
                  {ele.icon && (
                    <span className={`${classPrefix}-inner-menu-icon`}>
                      {ele.icon}
                    </span>
                  )}
                  {ele.text}
                </Button>
              </div>
            )
          )}
        </>
      )
    }, [(props as PopoverPropsWithActions<Action>).actions, onClick])

    return (
      <Popover
        ref={innerRef}
        {...props}
        overlayClassName={classNames(
          `${classPrefix}-menu`,
          props.overlayClassName
        )}
        content={overlay}
      >
        {props.children}
      </Popover>
    )
  }
) as <T extends Action = Action>(
  props: PopoverPropsWithActions<T> & { ref?: Ref<PopoverRef> }
) => ReactElement
