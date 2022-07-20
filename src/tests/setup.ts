import '@testing-library/jest-dom'
import { reduceMotion } from '../utils/reduce-and-restore-motion'
import { mockGlobalStyles } from './mock-global-styles'

mockGlobalStyles()
reduceMotion()

jest.mock('../utils/convert-px', () => {
  return {
    convertPx: jest.fn(px => px),
  }
})

// https://github.com/nickcolley/jest-axe/issues/147#issuecomment-758804533
const { getComputedStyle } = window
window.getComputedStyle = el => getComputedStyle(el)
