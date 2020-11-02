import * as React from 'react'
import { withError } from '../rmc'
import { useTracker } from '../hooks'
import CheckboxCore from '../Checkbox/Checkbox'
import Group from './Group'
import Item from './Item'
import RadioCore from './Radio'
import { RadioPropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/Radio'

// 由于 Radio 没有 no checked 的展示方式，因此这里暂不提供单独使用
// export const Radio: React.FC<RadioPropsType> & {
//   Group: typeof Group
//   Item: typeof Item
// } = props => {
//   useTracker(Radio.displayName)
//   return <RadioCore {...props} />
// }

// Radio.displayName = 'Radio'

// Radio.Group = Group
// Radio.Item = Item

// export default withError(Radio)

export default {
  Group: Group,
  Item: Item,
}
