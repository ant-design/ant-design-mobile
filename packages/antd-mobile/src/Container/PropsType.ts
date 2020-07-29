import { BasePropsType } from '../_internal'

type Icon = {
  type: 'arrow' | 'close' | 'more'
  onPress?: (e?: React.SyntheticEvent) => void
}

export interface ContainerPropsType extends BasePropsType {
  title: string
  icon?: Icon
  thumb?: string | React.ReactNode
}
