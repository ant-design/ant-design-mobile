import * as React from 'react'
import Touchable from './Touchable'
import { TouchablePropType } from './PropsType'

// Why need TouchableExport ?
// to make test simulate press work
const TouchableExport: React.FC<TouchablePropType> = props => {
  return <Touchable {...props} />
}
TouchableExport.displayName = 'Touchable'

export default TouchableExport
