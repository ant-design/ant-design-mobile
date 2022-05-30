import { excludeWarning } from './excludeWarning'
import { Globals } from '@react-spring/web'

excludeWarning()

Globals.assign({
  skipAnimation: true,
})
