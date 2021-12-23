import './skeleton.less'
import { Skeleton, SkeletonParagraph, SkeletonTitle } from './skeleton'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

export type { SkeletonProps, SkeletonTitleProps } from './skeleton'

export default attachPropertiesToComponent(Skeleton, {
  Title: SkeletonTitle,
  Paragraph: SkeletonParagraph,
})
