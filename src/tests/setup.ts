import { reduceMotion } from '../utils/reduce-and-restore-motion'
import { mockGlobalStyles } from './mock-global-styles'

mockGlobalStyles()
reduceMotion()

jest.mock('../utils/convert-px', () => {
  return {
    convertPx: jest.fn(px => px),
  }
})
