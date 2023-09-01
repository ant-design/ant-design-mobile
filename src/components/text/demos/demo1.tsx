import React from 'react'
import Text from '../.'
import { DemoBlock } from 'demos'
import styles from './demo1.less'

export default () => {
  return (
    <>
      <DemoBlock title='Colors'>
        <div className={styles.content}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quos a voluptates, labore fugiat fugit? Magni quas et quae
            perferendis. Accusantium amet repudiandae quis tempora alias,
            doloribus ea eaque cum.
          </Text>

          <Text color='primary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quos a voluptates, labore fugiat fugit? Magni quas et quae
            perferendis. Accusantium amet repudiandae quis tempora alias,
            doloribus ea eaque cum.
          </Text>

          <Text color='secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quos a voluptates, labore fugiat fugit? Magni quas et quae
            perferendis. Accusantium amet repudiandae quis tempora alias,
            doloribus ea eaque cum.
          </Text>

          <Text color='success'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quos a voluptates, labore fugiat fugit? Magni quas et quae
            perferendis. Accusantium amet repudiandae quis tempora alias,
            doloribus ea eaque cum.
          </Text>

          <Text color='warning'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quos a voluptates, labore fugiat fugit? Magni quas et quae
            perferendis. Accusantium amet repudiandae quis tempora alias,
            doloribus ea eaque cum.
          </Text>

          <Text color='danger'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quos a voluptates, labore fugiat fugit? Magni quas et quae
            perferendis. Accusantium amet repudiandae quis tempora alias,
            doloribus ea eaque cum.
          </Text>

          <Text color='weak'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quos a voluptates, labore fugiat fugit? Magni quas et quae
            perferendis. Accusantium amet repudiandae quis tempora alias,
            doloribus ea eaque cum.
          </Text>

          <Text color='light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quos a voluptates, labore fugiat fugit? Magni quas et quae
            perferendis. Accusantium amet repudiandae quis tempora alias,
            doloribus ea eaque cum.
          </Text>
        </div>
      </DemoBlock>

      <DemoBlock title='Font style'>
        <div className={styles.content}>
          <Text strong={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quos a voluptates, labore fugiat fugit? Magni quas et quae
            perferendis. Accusantium amet repudiandae quis tempora alias,
            doloribus ea eaque cum.
          </Text>

          <Text italic={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quos a voluptates, labore fugiat fugit? Magni quas et quae
            perferendis. Accusantium amet repudiandae quis tempora alias,
            doloribus ea eaque cum.
          </Text>

          <Text strong={true} italic={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quos a voluptates, labore fugiat fugit? Magni quas et quae
            perferendis. Accusantium amet repudiandae quis tempora alias,
            doloribus ea eaque cum.
          </Text>
        </div>
      </DemoBlock>
    </>
  )
}
