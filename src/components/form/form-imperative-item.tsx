import React, {
  FC,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
} from 'react'
import { FormItem, FormItemProps } from './form-item'
import DatePicker from '../date-picker'

type InnerRef = {
  trigger: () => void
}

const Inner = forwardRef<
  InnerRef,
  {
    value?: any
    onChange?: (value: any) => void
    renderValue: (value: any) => ReactNode
  }
>((props, ref) => {
  useImperativeHandle(ref, () => ({
    trigger: async () => {
      const v = await DatePicker.prompt({
        defaultValue: props.value,
      })
      if (v !== null) {
        props.onChange?.(v)
      }
    },
  }))
  return <>{props.renderValue(props.value)}</>
})

export const FormImperativeItem: FC<
  {
    renderValue: (value: any) => ReactNode
  } & Omit<FormItemProps, 'children'>
> = props => {
  const { renderValue, ...formItemProps } = props

  const ref = useRef<InnerRef>(null)

  return (
    <FormItem
      {...formItemProps}
      onClick={() => {
        ref.current?.trigger()
      }}
    >
      <Inner ref={ref} renderValue={renderValue} />
    </FormItem>
  )
}
