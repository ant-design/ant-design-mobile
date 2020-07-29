import { BasePropsType } from '../_internal'

type KeyType = string | number | (string | number)[]

export interface CollapsePropsType extends BasePropsType {
  activeKey?: KeyType
  defaultActiveKey?: KeyType
  accordion?: boolean
  onChange?: (key: KeyType) => void
  openAnimation?: object
}

export interface CollapsePanelPropsType extends BasePropsType {
  key?: string
  header?: React.ReactNode | string
}
