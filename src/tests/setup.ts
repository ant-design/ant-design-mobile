import { excludeWarning } from './excludeWarning'
import { reduceMotion } from '../utils/reduce-and-restore-motion'

excludeWarning()

reduceMotion()

process.on('unhandledRejection', (reason, promise) => {
  if (reason === 'mock request failed') {
    process.exit(1)
  }
})
