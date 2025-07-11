import { Swiper } from 'antd-mobile'
import { DemoBlock } from 'demos'
import React from 'react'

import styles from './demo5.less'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

export default () => {
    return (
        <DemoBlock title='竖向虚拟滚动'>
            <Swiper
                direction='vertical'
                style={{ '--height': '200px' }}
                total={100}
            >
                {index => (
                    <Swiper.Item key={index}>
                        <div className={styles.verticalContent} style={{ background: colors[index % colors.length] }}>
                            {index + 1}
                        </div>
                    </Swiper.Item>
                )}
            </Swiper>
        </DemoBlock>
    )
}