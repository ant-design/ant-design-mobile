import { BasePropsType } from '../_internal'

export interface TermsPropsType extends BasePropsType {
  checked?: boolean
  onChange?: (checked: boolean) => void
  term: React.ReactNode
  describe?: boolean
}
