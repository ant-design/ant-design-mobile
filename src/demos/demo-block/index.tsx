import 'antd-mobile/lib/index.less'
import {FC} from 'react'
import styles from './index.less'

interface Props {
  title: string
  padding?: string
  background?: string
}

export const DemoBlock: FC<Props> = props => {
  return (
    <div>
      <div className={styles.title}>{props.title}</div>
      <div
        className={styles.content}
        style={{padding: props.padding, background: props.background}}
      >
        {props.children}
      </div>
    </div>
  )
}

DemoBlock.defaultProps = {
  padding: '12px 12px',
  background: '#ffffff',
}
