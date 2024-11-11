import { Button } from 'antd-mobile'
import { Link } from 'dumi'
import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import { useTrans } from '../../../../hooks/useTrans'
import styles from './index.local.less'

export default (props: { isWidthScreen: boolean }) => {
  const [startFireAnimation, setStartFireAnimation] = useState(false)
  const [startResultAnimation, setStartResultAnimation] = useState(false)
  const { isWidthScreen } = props

  const trans = useTrans()

  useEffect(() => {
    document
      .querySelector('#calendarImage')
      ?.addEventListener('mouseenter', () => {
        setStartFireAnimation(true)
      })
    document
      .querySelector('#resultImage')
      ?.addEventListener('mouseenter', () => {
        setStartResultAnimation(true)
      })
  }, [])

  return (
    <div className={styles.mainSectionContainer}>
      <div>
        <div className={styles.mainSectionTitle}>Ant Design Mobile</div>
        <div className={styles.mainSectionDescription}>
          {trans(
            'Research the final experience of mobile',
            '探索移动端 Web 的极致体验'
          )}
        </div>
        <div className={styles.mainSectionButtonAction}>
          <Link to={trans('/guide/quick-start', '/zh/guide/quick-start')}>
            <Button
              color='primary'
              shape='rounded'
              className={styles.buttonLeft}
            >
              {trans('Get Start', '开始使用')}
            </Button>
          </Link>
          <Link to={trans('/components', '/zh/components')}>
            <Button
              color='primary'
              shape='rounded'
              className={styles.buttonRight}
            >
              {trans('Preview Online', '在线体验')}
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div
          className={styles.calendarImage}
          id='calendarImage'
          style={{
            backgroundImage: trans.en
              ? 'url(https://gw.alipayobjects.com/zos/bmw-prod/8a7ff5c3-269f-41ad-bdc0-461aef57ad09.svg)'
              : 'url(https://gw.alipayobjects.com/zos/bmw-prod/db18b4de-20f5-403e-9075-a413518934e3.svg)',
          }}
        >
          <div className={styles.publishDayAnimation}>
            <Lottie
              options={{
                loop: false,
                autoplay: false,
                path: trans.en
                  ? 'https://gw.alipayobjects.com/os/finxbff/lolita/1fde335f-a603-4594-b253-5fd23198a370/lottie.json'
                  : 'https://gw.alipayobjects.com/os/finxbff/lolita/a31c67dd-ac41-4ca6-a92b-3e459e2035af/lottie.json',
              }}
              eventListeners={[
                {
                  eventName: 'complete',
                  callback: () => {
                    setStartFireAnimation(false)
                  },
                },
              ]}
              height={startFireAnimation ? (isWidthScreen ? 280 : 172) : 0}
              width={startFireAnimation ? (isWidthScreen ? 280 : 172) : 0}
              isStopped={!startFireAnimation}
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </div>
        <div className={styles.resultImage} id='resultImage'>
          <Lottie
            options={{
              loop: false,
              autoplay: false,
              path: 'https://gw.alipayobjects.com/os/finxbff/lolita/01548f7e-9c13-4110-8023-f664ef4736c4/lottie.json',
            }}
            eventListeners={[
              {
                eventName: 'complete',
                callback: () => {
                  setStartResultAnimation(false)
                },
              },
            ]}
            height={isWidthScreen ? 117 : 70}
            width={isWidthScreen ? 94 : 56}
            // isStopped={!startResultAnimation}
            isStopped
            style={{ pointerEvents: 'none' }}
          />
        </div>
        <img
          className={styles.staticImage}
          src={
            isWidthScreen
              ? 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*kQ_zRK8YuGoAAAAAAAAAAAAAARQnAQ'
              : 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*v4isTYsMCNcAAAAAAAAAAAAAARQnAQ'
          }
        ></img>
      </div>
    </div>
  )
}
