import { BasePropsType } from '../_internal'

export interface AvatarPropsType extends BasePropsType {
  img?: string
  name?: string
  description?: string
  onPress?: (e?: React.SyntheticEvent) => void
}
