import React, {
  useState,
  useEffect,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  memo,
} from 'react'
import classNames from 'classnames'
import Popup, { PopupProps } from '../popup'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import {
  PickerColumn,
  PickerColumnItem,
  PickerValue,
  PickerValueExtend,
} from './index'
import PickerView from '../picker-view'
import {
  generateColumnsExtend,
  useColumnsExtend,
} from '../picker-view/columns-extend'
import { useConfig } from '../config-provider'
import { useMemoizedFn } from 'ahooks'
import SafeArea from '../safe-area'
import { defaultRenderLabel } from './picker-utils'

export type PickerActions = {
  open: () => void
  close: () => void
  toggle: () => void
}
export type PickerRef = PickerActions

const classPrefix = `adm-picker`

export type PickerProps = {
  columns: PickerColumn[] | ((value: PickerValue[]) => PickerColumn[])
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  loading?: boolean
  loadingContent?: ReactNode
  onSelect?: (value: PickerValue[], extend: PickerValueExtend) => void
  onConfirm?: (value: PickerValue[], extend: PickerValueExtend) => void
  onCancel?: () => void
  onClose?: () => void
  closeOnMaskClick?: boolean
  visible?: boolean
  title?: ReactNode
  confirmText?: ReactNode
  cancelText?: ReactNode
  children?: (
    items: (PickerColumnItem | null)[],
    actions: PickerActions
  ) => ReactNode
  renderLabel?: (item: PickerColumnItem) => ReactNode
  mouseWheel?: boolean
  popupClassName?: string
  popupStyle?: React.CSSProperties
} & Pick<
  PopupProps,
  | 'getContainer'
  | 'afterShow'
  | 'afterClose'
  | 'onClick'
  | 'stopPropagation'
  | 'forceRender'
  | 'destroyOnClose'
> &
  NativeProps<
    | '--header-button-font-size'
    | '--title-font-size'
    | '--item-font-size'
    | '--item-height'
  >

const defaultProps = {
  defaultValue: [],
  closeOnMaskClick: true,
  renderLabel: defaultRenderLabel,
  destroyOnClose: false,
  forceRender: false,
}

export const Picker = memo(
  forwardRef<PickerRef, PickerProps>((p, ref) => {
    const { locale } = useConfig()
    const props = mergeProps(
      defaultProps,
      {
        confirmText: locale.common.confirm,
        cancelText: locale.common.cancel,
      },
      p
    )

    const [visible, setVisible] = usePropsValue({
      value: props.visible,
      defaultValue: false,
      onChange: v => {
        if (v === false) {
          props.onClose?.()
        }
      },
    })

    const actions: PickerActions = {
      toggle: () => {
        setVisible(v => !v)
      },
      open: () => {
        setVisible(true)
      },
      close: () => {
        setVisible(false)
      },
    }

    useImperativeHandle(ref, () => actions)

    const [value, setValue] = usePropsValue({
      ...props,
      onChange: val => {
        const extend = generateColumnsExtend(props.columns, val)
        props.onConfirm?.(val, extend)
      },
    })

    const extend = useColumnsExtend(props.columns, value)

    const [innerValue, setInnerValue] = useState<PickerValue[]>(value)
    useEffect(() => {
      if (innerValue !== value) {
        setInnerValue(value)
      }
    }, [visible])
    useEffect(() => {
      if (!visible) {
        setInnerValue(value)
      }
    }, [value])

    const onChange = useMemoizedFn((val, ext) => {
      setInnerValue(val)
      if (visible) {
        props.onSelect?.(val, ext)
      }
    })

    const pickerElement = withNativeProps(
      props,
      <div className={classPrefix}>
        <div className={`${classPrefix}-header`}>
          <a
            role='button'
            className={`${classPrefix}-header-button`}
            onClick={() => {
              props.onCancel?.()
              setVisible(false)
            }}
          >
            {props.cancelText}
          </a>
          <div className={`${classPrefix}-header-title`}>{props.title}</div>
          <a
            role='button'
            className={classNames(
              `${classPrefix}-header-button`,
              props.loading && `${classPrefix}-header-button-disabled`
            )}
            onClick={() => {
              if (props.loading) return
              setValue(innerValue, true)
              setVisible(false)
            }}
            aria-disabled={props.loading}
          >
            {props.confirmText}
          </a>
        </div>
        <div className={`${classPrefix}-body`}>
          <PickerView
            loading={props.loading}
            loadingContent={props.loadingContent}
            columns={props.columns}
            renderLabel={props.renderLabel}
            value={innerValue}
            mouseWheel={props.mouseWheel}
            onChange={onChange}
          />
        </div>
      </div>
    )

    const popupElement = (
      <Popup
        style={props.popupStyle}
        className={classNames(`${classPrefix}-popup`, props.popupClassName)}
        visible={visible}
        position='bottom'
        onMaskClick={() => {
          if (!props.closeOnMaskClick) return
          props.onCancel?.()
          setVisible(false)
        }}
        getContainer={props.getContainer}
        destroyOnClose={props.destroyOnClose}
        afterShow={props.afterShow}
        afterClose={props.afterClose}
        onClick={props.onClick}
        forceRender={props.forceRender}
        stopPropagation={props.stopPropagation}
      >
        {pickerElement}
        <SafeArea position='bottom' />
      </Popup>
    )

    return (
      <>
        {popupElement}
        {props.children?.(extend.items, actions)}
      </>
    )
  })
)

Picker.displayName = 'Picker'
