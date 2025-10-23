import classNames from 'classnames'
import type { CSSProperties, FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { renderImperatively } from '../../utils/render-imperatively'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import Popup, { PopupProps } from '../popup'
import SafeArea from '../safe-area'

export type Action = {
  key: string | number
  text: ReactNode
  disabled?: boolean
  description?: ReactNode
  danger?: boolean
  bold?: boolean
  onClick?: () => void
}

export type ActionSheetProps = {
  visible?: boolean
  actions: Action[]
  extra?: ReactNode
  cancelText?: ReactNode
  onAction?: (action: Action, index: number) => void
  onClose?: () => void
  onMaskClick?: () => void
  closeOnAction?: boolean
  closeOnMaskClick?: boolean
  safeArea?: boolean
  popupClassName?: string
  /** @deprecated use `styles` instead */
  popupStyle?: CSSProperties
  styles?: Partial<Record<'body' | 'mask', CSSProperties>>
  prefixCls?: string
} & Pick<
  PopupProps,
  'afterClose' | 'getContainer' | 'destroyOnClose' | 'forceRender'
> &
  NativeProps

const defaultProps = {
  visible: false,
  actions: [],
  cancelText: '',
  closeOnAction: false,
  closeOnMaskClick: true,
  safeArea: true,
  destroyOnClose: false,
  forceRender: false,
}

export const ActionSheet: FC<ActionSheetProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { getPrefixCls } = useConfig()
  const { styles } = props
  const prefixCls = getPrefixCls('action-sheet', props.prefixCls)
  return (
    <Popup
      visible={props.visible}
      onMaskClick={() => {
        props.onMaskClick?.()
        if (props.closeOnMaskClick) {
          props.onClose?.()
        }
      }}
      afterClose={props.afterClose}
      className={classNames(`${prefixCls}-popup`, props.popupClassName)}
      style={props.popupStyle}
      getContainer={props.getContainer}
      destroyOnClose={props.destroyOnClose}
      forceRender={props.forceRender}
      bodyStyle={styles?.body}
      maskStyle={styles?.mask}
    >
      {withNativeProps(
        props,
        <div className={prefixCls}>
          {props.extra && (
            <div className={`${prefixCls}-extra`}>{props.extra}</div>
          )}
          <div className={`${prefixCls}-button-list`}>
            {props.actions.map((action, index) => (
              <div
                key={action.key}
                className={`${prefixCls}-button-item-wrapper`}
              >
                <a
                  className={classNames(
                    'adm-plain-anchor',
                    `${prefixCls}-button-item`,
                    {
                      [`${prefixCls}-button-item-danger`]: action.danger,
                      [`${prefixCls}-button-item-disabled`]: action.disabled,
                      [`${prefixCls}-button-item-bold`]: action.bold,
                    }
                  )}
                  onClick={() => {
                    action.onClick?.()
                    props.onAction?.(action, index)
                    if (props.closeOnAction) {
                      props.onClose?.()
                    }
                  }}
                  role='option'
                  aria-disabled={action.disabled}
                >
                  <div className={`${prefixCls}-button-item-name`}>
                    {action.text}
                  </div>
                  {action.description && (
                    <div className={`${prefixCls}-button-item-description`}>
                      {action.description}
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>

          {props.cancelText && (
            <div
              className={`${prefixCls}-cancel`}
              role='option'
              aria-label={props.cancelText}
            >
              <div className={`${prefixCls}-button-item-wrapper`}>
                <a
                  className={classNames(
                    'adm-plain-anchor',
                    `${prefixCls}-button-item`
                  )}
                  onClick={props.onClose}
                >
                  <div className={`${prefixCls}-button-item-name`}>
                    {props.cancelText}
                  </div>
                </a>
              </div>
            </div>
          )}

          {props.safeArea && <SafeArea position='bottom' />}
        </div>
      )}
    </Popup>
  )
}

export type ActionSheetShowHandler = {
  close: () => void
}

export function showActionSheet(
  props: Omit<ActionSheetProps, 'visible' | 'destroyOnClose' | 'forceRender'>
) {
  return renderImperatively(
    <ActionSheet {...props} />
  ) as ActionSheetShowHandler
}
