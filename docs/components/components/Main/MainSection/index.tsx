import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import Lottie from 'react-lottie';
import styles from './index.local.less';

export default () => {
  const [startFireAnimation, setStartFireAnimation] = useState(false);
  const [startResultAnimation, setStartResultAnimation] = useState(false);
  const [isWidthScreen, setIsWidthScreen] = useState(true);

  useEffect(() => {
    setIsWidthScreen(screen?.width > 450);
    document.querySelector('#calendarImage')?.addEventListener('mouseenter', () => {
      setStartFireAnimation(true);
    });
    document.querySelector('#resultImage')?.addEventListener('mouseenter', () => {
      setStartResultAnimation(true);
    })
  }, []);

  useEffect(() => {
    const myObserver = new ResizeObserver((entries) => {
      const myContainer = entries?.[0];
      if (myContainer.contentRect.width > 450) {
        setIsWidthScreen(true);
      } else {
        setIsWidthScreen(false);
      }
    });
    myObserver.observe(document.querySelector('#mainContainer') as Element);
    return () => {
      myObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.mainSectionContainer}>
      <div>
        <div className={styles.mainSectionTitle}>Ant Design Mini</div>
        <div className={styles.mainSectionDescription}>探索移动端小程序的体验极限</div>
        <div className={styles.mainSectionButtonAction}>
          <Button shape="round" className={styles.buttonLeft} href="/guide/quick-start">开始使用</Button>
          <Button shape="round" className={styles.buttonRight} href="/components">在线体验</Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.calendarImage} id="calendarImage">
          <div className={styles.publishDayAnimation}>
            <Lottie
              options={{
                loop: false,
                autoplay: false,
                path: 'https://gw.alipayobjects.com/os/sage/02b4e615-c936-4adf-8cb7-095bd305b330/efbccd67-4060-4f50-8c9a-894ec8b6e319.json',
              }}
              eventListeners={
                [{
                  eventName: 'complete',
                  callback: () => {
                    setStartFireAnimation(false);
                  }
                }]
              }
              height={startFireAnimation ? (isWidthScreen ? 280 : 172) : 0}
              width={startFireAnimation ? (isWidthScreen ? 280 : 172) : 0}
              isStopped={!startFireAnimation}
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </div>
        <div className={styles.resultImage} id="resultImage">
          <Lottie
            options={{
              loop: false,
              autoplay: false,
              path: 'https://gw.alipayobjects.com/os/finxbff/lolita/01548f7e-9c13-4110-8023-f664ef4736c4/lottie.json',
            }}
            eventListeners={
              [{
                eventName: 'complete',
                callback: () => {
                  setStartResultAnimation(false);
                }
              }]
            }
            height={isWidthScreen ? 117 : 70}
            width={isWidthScreen ? 94 : 56}
            isStopped={!startResultAnimation}
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