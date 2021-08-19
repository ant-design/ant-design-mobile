import './cascader.less'
import { Cascader } from './cascader'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Multiple } from './multiple'

export type { CascaderProps, CascaderOption } from './cascader'
export type { MultipleProps } from './multiple'

export default attachPropertiesToComponent(Cascader, {
  Multiple,
})
