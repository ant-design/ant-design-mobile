import React, { FC } from 'react'
import styles from './ResourceCard.less'

type Props = {
  image?: string
  title: string
  description: string
  link: string
}

const ResourceCard: FC<Props> = props => {
  return (
    <a className={styles.card} href={props.link} target='_blank'>
      {props.image && <img src={props.image} alt={props.title} />}
      <div className={styles.content}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </a>
  )
}

export default ResourceCard
