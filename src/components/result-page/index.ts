import './result-page.less'
import { ResultPage } from './result-page'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { ResultPageCard } from './result-page-card'

export type { ResultPageProps } from './result-page'

export default attachPropertiesToComponent(ResultPage, {
  Card: ResultPageCard,
})
