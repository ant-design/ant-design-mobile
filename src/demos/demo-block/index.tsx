import type { FC, ReactNode } from 'react'
import React from 'react'
import styles from './index.less'

interface Props {
  title: string
  padding?: string
  background?: string
  children?: ReactNode
}

export const DemoBlock: FC<Props> = ({
  title,
  padding = '12px 12px',
  background = 'var(--adm-color-background)',
  children,
}) => {
  return (
    <div className={styles.demoBlock}>
      <div className={styles.title}>{title}</div>
      <div
        className={styles.main}
        style={{
          padding,
          background,
        }}
      >
        {children}
      </div>
    </div>
  )
}
