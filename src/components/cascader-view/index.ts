import './cascader-view.less'
import { CascaderView } from './cascader-view'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { optionSkeleton } from './option-skeleton'

export type {
  CascaderViewProps,
  CascaderValue,
  CascaderValueExtend,
  CascaderOption,
} from './cascader-view'

export default attachPropertiesToComponent(CascaderView, {
  optionSkeleton,
})
