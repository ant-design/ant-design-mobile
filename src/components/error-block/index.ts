import './error-block.less'
import { ReactNode } from 'react'
import { ErrorBlock } from './error-block'

export { createErrorBlock } from './create-error-block'

export type { ErrorBlockProps } from './create-error-block'

export type ErrorBlockStatus = 'default' | 'disconnected' | 'empty' | 'busy'
export type ImageRecord = Partial<Record<ErrorBlockStatus, string | ReactNode>>

export default ErrorBlock
