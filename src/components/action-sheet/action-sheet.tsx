import classNames from 'classnames'
import type { CSSProperties, FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { renderImperatively } from '../../utils/render-imperatively'
import { mergeProps } from '../../utils/with-default-props'
import Popup, { PopupProps } from '../popup'
import SafeArea from '../safe-area'

const classPrefix = `adm-action-sheet`

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

export const ActionSheet: FC<ActionSheetProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const { styles } = mergedProps

  return (
    <Popup
      visible={mergedProps.visible}
      onMaskClick={() => {
        mergedProps.onMaskClick?.()
        if (mergedProps.closeOnMaskClick) {
          mergedProps.onClose?.()
        }
      }}
      afterClose={mergedProps.afterClose}
      className={classNames(`${classPrefix}-popup`, mergedProps.popupClassName)}
      style={mergedProps.popupStyle}
      getContainer={mergedProps.getContainer}
      destroyOnClose={mergedProps.destroyOnClose}
      forceRender={mergedProps.forceRender}
      bodyStyle={styles?.body}
      maskStyle={styles?.mask}
    >
      {withNativeProps(
        mergedProps,
        <div className={classPrefix}>
          {mergedProps.extra && (
            <div className={`${classPrefix}-extra`}>{mergedProps.extra}</div>
          )}
          <div className={`${classPrefix}-button-list`}>
            {mergedProps.actions.map((action, index) => (
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
                      [`${classPrefix}-button-item-bold`]: action.bold,
                    }
                  )}
                  onClick={() => {
                    action.onClick?.()
                    mergedProps.onAction?.(action, index)
                    if (mergedProps.closeOnAction) {
                      mergedProps.onClose?.()
                    }
                  }}
                  role='option'
                  aria-disabled={action.disabled}
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

          {mergedProps.cancelText && (
            <div
              className={`${classPrefix}-cancel`}
              role='option'
              aria-label={mergedProps.cancelText}
            >
              <div className={`${classPrefix}-button-item-wrapper`}>
                <a
                  className={classNames(
                    'adm-plain-anchor',
                    `${classPrefix}-button-item`
                  )}
                  onClick={mergedProps.onClose}
                >
                  <div className={`${classPrefix}-button-item-name`}>
                    {mergedProps.cancelText}
                  </div>
                </a>
              </div>
            </div>
          )}

          {mergedProps.safeArea && <SafeArea position='bottom' />}
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
