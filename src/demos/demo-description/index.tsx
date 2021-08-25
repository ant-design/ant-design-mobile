import React, { FC, ReactNode } from 'react'
import styles from './index.less'

export const DemoDescription: FC<{
  content?: ReactNode
}> = props => {
  return (
    <div className={styles.demoDescription}>
      {props.content || props.children}
    </div>
  )
}
