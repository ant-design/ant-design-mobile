import { RightOutlined } from '@ant-design/icons'
import { useSize } from 'ahooks'
import { Button, Card } from 'antd-mobile'
import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'
import { useTrans } from '../../../hooks/useTrans'
import { openUrl } from '../../../utils'
import MainSection from './MainSection'
import {
  getGuides,
  getProductDesignValuesBackgroundImage,
  getProductResource,
  getRecommends,
  productDesignValues,
  productDesignValuesEn,
  productIntroduce,
  productIntroduceEn,
  users,
} from './config'
import styles from './index.local.less'

export default () => {
  const [isWidthScreen, setIsWidthScreen] = useState(true)
  const [startAnimation, setStartAnimation] = useState([
    false,
    false,
    false,
    false,
  ])
  const trans = useTrans()

  useEffect(() => {
    setIsWidthScreen(screen?.width > 450)
    /** 绑定触发动画的事件，因为是mouseenter触发，因此无法进行通过事件委托绑定 */
    startAnimation.forEach((item, index) => {
      document
        .querySelector(`#my_lottie_${index}`)
        ?.addEventListener('mouseenter', () => {
          setStartAnimation(pre =>
            pre.map((i, idx) => (index === idx ? true : i))
          )
        })
    })
  }, [])

  const containerRef = useRef<HTMLDivElement>(null)
  const containerSize = useSize(containerRef)

  useEffect(() => {
    if (!containerSize?.width) return

    if (containerSize?.width > 450) {
      setIsWidthScreen(true)
    } else {
      setIsWidthScreen(false)
    }
  }, [containerSize?.width])

  return (
    <div className={styles.mainContainer} ref={containerRef} id='mainContainer'>
      <div className={styles.mainSection}>
        <MainSection isWidthScreen={isWidthScreen} />
      </div>
      <div className={styles.contentSection}>
        {/* 高性能、可定制、原子化、流畅感 */}
        <div className={styles.productIntroduce}>
          {trans(productIntroduceEn, productIntroduce).map(product => (
            <div className={styles.productItem} key={product.title}>
              <img height={32} src={product.image} />
              <div className={styles.productItemTitle}>{product.title}</div>
              <div className={styles.productItemDescription}>
                {product.description}
              </div>
            </div>
          ))}
        </div>
        {/* 设计语言与开发资源 */}
        <div className={styles.productResource}>
          <div className={styles.productResourceTitle}>
            {trans('Design and Development', '语言设计与开发资源')}
          </div>
          <div className={styles.productResourceContent}>
            {getProductResource(isWidthScreen, trans.en).map(resource => (
              <Card
                className={styles.productResourceCard}
                bordered={false}
                style={{
                  backgroundImage: `url(${resource.backgroundImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                key={resource.title}
              >
                <div className={styles.productResourceCardContent}>
                  <div className={styles.productResourceCardTitle}>
                    {resource.title}
                  </div>
                  <div className={styles.productResourceCardDescription}>
                    {resource.description}
                  </div>
                  <Button
                    className={styles.productResourceCardButton}
                    onClick={() =>
                      openUrl({
                        href: resource.buttonLink,
                        target: resource.target,
                      })
                    }
                  >
                    {resource.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <Card
            className={styles.productDesignValues}
            bordered={false}
            style={{
              backgroundImage: `url(${getProductDesignValuesBackgroundImage(
                isWidthScreen
              )})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            {trans(productDesignValuesEn, productDesignValues).map(value => (
              <div key={value.title} className={styles.productDesignValueBody}>
                <div className={styles.productDesignValuesContent}>
                  <div className={styles.productDesignValuesTitle}>
                    {value.title}
                  </div>
                  <div className={styles.productDesignValuesDescription}>
                    {value.description}
                  </div>
                </div>
                <div className={styles.productDesignValuesIconContainer}>
                  {value.icons.map((icon, index) => (
                    <div
                      key={icon.text}
                      className={styles.productDesignValuesIcon}
                      id={`my_lottie_${index}`}
                    >
                      <Lottie
                        options={{
                          loop: false,
                          autoplay: false,
                          path: icon.lottie,
                        }}
                        eventListeners={[
                          {
                            eventName: 'complete',
                            callback: () => {
                              setStartAnimation(pre =>
                                pre.map((item, idx) =>
                                  idx === index ? false : item
                                )
                              )
                            },
                          },
                        ]}
                        height={62}
                        width={62}
                        isStopped={!startAnimation[index]}
                        style={{ pointerEvents: 'none' }}
                      />
                      <div className={styles.productDesignValuesIconText}>
                        {icon.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Card>
        </div>
        {/* 新手指引 */}
        <div className={styles.guides}>
          <div className={styles.guidesTitle}>{trans('Guide', '新手指引')}</div>
          <div className={styles.guidesContent}>
            {getGuides(isWidthScreen, trans.en).map(guide => (
              <Card
                className={styles.guideCard}
                bordered={false}
                style={{
                  backgroundImage: `url(${guide.backgroundImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                key={guide.title}
              >
                <div className={styles.guideCardContent}>
                  <div className={styles.guideCardTitle}>{guide.title}</div>
                  <div className={styles.guideCardDescription}>
                    {guide.description}
                  </div>
                  <div className={styles.guideCardButton}>
                    <a href={guide.buttonLink}>
                      {guide.buttonText}
                      <RightOutlined />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* 精品资源 */}
        <div className={styles.recommends}>
          <div className={styles.recommendsTitle}>
            {trans('Resources', '精品资源')}
          </div>
          <div className={styles.recommendsContent}>
            {getRecommends(trans.en).map(recommend => (
              <Card
                className={styles.recommendCard}
                bordered={false}
                hoverable={true}
                key={recommend.title}
              >
                <div
                  className={styles.recommendCardBody}
                  onClick={() => window.open(recommend.link)}
                >
                  <div className={styles.recommendImage}>
                    <img src={recommend.image} width={50} />
                  </div>
                  <div className={styles.recommendCardContent}>
                    <div className={styles.recommendCardTitle}>
                      {recommend.title}
                    </div>
                    <div className={styles.recommendCardDescription}>
                      {recommend.description}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* 谁在使用 */}
        {trans.zh && (
          <div className={styles.users}>
            <div className={styles.usersTitle}>谁在使用</div>
            <div className={styles.usersContent}>
              {users.map(user => (
                <img
                  key={user.name}
                  className={styles.userImage}
                  src={user.image}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
