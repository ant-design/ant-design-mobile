export interface BasePropsType {
  className?: string
}

export interface BaseFormItemType<V = any>
  extends BaseFormItemTypeWithOutFocus<V> {
  autoFocus?: boolean
  tabIndex?: number
  ref?: React.Ref<{
    focus: () => void
    blur: () => void
  }>
  onFocus?: (v: V) => void
  onBlur?: (v: V) => void
}

export interface BaseFormItemTypeWithOutFocus<V = any> {
  id?: string
  name?: string
  disabled?: boolean
  onChange?: (v: V) => void
}
