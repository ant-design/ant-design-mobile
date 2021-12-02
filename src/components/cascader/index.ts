import { Cascader } from './cascader'
import { prompt } from './prompt'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import './cascader.less'

export type { CascaderProps } from './cascader'

export type {
  CascaderValue,
  CascaderValueExtend,
  CascaderOption,
} from '../cascader-view'

export default attachPropertiesToComponent(Cascader, {
  prompt,
})
