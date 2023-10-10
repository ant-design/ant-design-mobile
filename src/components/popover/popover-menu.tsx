import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import type { ReactNode } from 'react'
import classNames from 'classnames'
import { Popover, PopoverProps, PopoverRef } from './popover'

const classPrefix = `adm-popover-menu`

export type Action = {
  text: ReactNode
  icon?: ReactNode
  disabled?: boolean
  key?: string | number
  onClick?: () => void
}

export type PopoverMenuProps = Omit<PopoverProps, 'content'> & {
  actions: Action[]
  maxCount?: number
  onAction?: (item: Action) => void
}

export const PopoverMenu = forwardRef<PopoverRef, PopoverMenuProps>(
  (props, ref) => {
    const innerRef = useRef<PopoverRef>(null)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(ref, () => innerRef.current!, [])

    const onClick = useCallback(
      (e: Action) => {
        const { onAction } = props
        if (onAction) {
          onAction(e)
        }
        innerRef.current?.hide()
      },
      [props.onAction]
    )

    const overlay = useMemo(
      () => (
        <div
          className={classNames(`${classPrefix}-list`, {
            [`${classPrefix}-list-scroll`]:
              props?.maxCount && props.actions.length > props?.maxCount,
          })}
          style={{
            height: props?.maxCount && props?.maxCount * 48,
          }}
        >
          <div className={`${classPrefix}-list-inner`}>
            {props.actions.map((action, index) => (
              <a
                key={action.key ?? index}
                className={classNames(
                  `${classPrefix}-item`,
                  'adm-plain-anchor',
                  action.disabled && `${classPrefix}-item-disabled`
                )}
                onClick={() => {
                  if (action.disabled) return
                  onClick(action)
                  action.onClick?.()
                }}
              >
                {action.icon && (
                  <div className={`${classPrefix}-item-icon`}>
                    {action.icon}
                  </div>
                )}
                <div className={`${classPrefix}-item-text`}>{action.text}</div>
              </a>
            ))}
          </div>
        </div>
      ),
      [props.actions, onClick]
    )

    return (
      <Popover
        ref={innerRef}
        {...props}
        className={classNames(classPrefix, props.className)}
        content={overlay}
        bottomArrow={
          !!(props?.maxCount && props.actions.length > props?.maxCount)
        }
      >
        {props.children}
      </Popover>
    )
  }
)
