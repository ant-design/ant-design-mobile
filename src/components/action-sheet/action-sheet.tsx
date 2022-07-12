import React, { FC, ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'
import Popup, { PopupProps } from '../popup'
import SafeArea from '../safe-area'
import { renderImperatively } from '../../utils/render-imperatively'

const classPrefix = `adm-action-sheet`

export type Action = {
  key: string | number
  text: ReactNode
  disabled?: boolean
  description?: ReactNode
  danger?: boolean
  onClick?: () => void
}

export type ActionSheetProps = {
  visible?: boolean
  actions: Action[]
  extra?: React.ReactNode
  cancelText?: React.ReactNode
  onAction?: (action: Action, index: number) => void
  onClose?: () => void
  onMaskClick?: () => void
  closeOnAction?: boolean
  closeOnMaskClick?: boolean
  safeArea?: boolean
  popupClassName?: string
  popupStyle?: React.CSSProperties
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
      className={classNames(`${classPrefix}-popup`, props.popupClassName)}
      style={props.popupStyle}
      getContainer={props.getContainer}
      destroyOnClose={props.destroyOnClose}
      forceRender={props.forceRender}
    >
      {withNativeProps(
        props,
        <div className={classPrefix}>
          {props.extra && (
            <div className={`${classPrefix}-extra`}>{props.extra}</div>
          )}
          <div className={`${classPrefix}-button-list`}>
            {props.actions.map((action, index) => (
              <div
                key={action.key}
                className={`${classPrefix}-button-item-wrapper`}
              >
                <a
                  className={classNames(
                    'adm-plain-anchor',
                    `${classPrefix}-button-item`,
                    {
                      [`${classPrefix}-button-item-danger`]: action.danger,
                      [`${classPrefix}-button-item-disabled`]: action.disabled,
                    }
                  )}
                  onClick={() => {
                    action.onClick?.()
                    props.onAction?.(action, index)
                    if (props.closeOnAction) {
                      props.onClose?.()
                    }
                  }}
                >
                  <div className={`${classPrefix}-button-item-name`}>
                    {action.text}
                  </div>
                  {action.description && (
                    <div className={`${classPrefix}-button-item-description`}>
                      {action.description}
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>

          {props.cancelText && (
            <div className={`${classPrefix}-cancel`}>
              <div className={`${classPrefix}-button-item-wrapper`}>
                <a
                  className={classNames(
                    'adm-plain-anchor',
                    `${classPrefix}-button-item`
                  )}
                  onClick={() => {
                    props.onClose?.()
                  }}
                >
                  <div className={`${classPrefix}-button-item-name`}>
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

export function showActionSheet(props: Omit<ActionSheetProps, 'visible'>) {
  return renderImperatively(
    <ActionSheet {...props} />
  ) as ActionSheetShowHandler
}
