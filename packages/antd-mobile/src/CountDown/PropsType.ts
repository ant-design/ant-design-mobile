import { BasePropsType } from '../_internal'

export interface CountDownPropsType extends BasePropsType {
  t: number
  renderDuration?: number
  render?:
    | React.ComponentClass<{
        t: number
      }>
    | React.FC<{ t: number }>
  onComplete?: () => void
}
