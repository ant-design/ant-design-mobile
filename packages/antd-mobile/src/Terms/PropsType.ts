import { BasePropsType, BaseFormItemTypeWithOutFocus } from '../_internal'

export interface TermsPropsType
  extends BasePropsType,
    BaseFormItemTypeWithOutFocus<boolean> {
  // value for html form
  value?: string
  checked?: boolean
  defaultChecked?: boolean
  term: React.ReactNode

  // 在内容下侧
  describe?: boolean
  // 是否需要勾选
  hasChecked?: boolean
}
