import { BasePropsType } from '../_internal'

export interface FooterPropsType extends BasePropsType {}

interface Tag {
  value: string
  onPress?: (e?: React.SyntheticEvent) => void
}

export interface TagsPropsType extends BasePropsType {
  tags: Tag[]
}

export interface LinksPropsType extends BasePropsType {
  links: Tag[]
}

export interface LogoPropsType extends BasePropsType {
  src: string
}
