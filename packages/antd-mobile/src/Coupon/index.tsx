import * as React from 'react'
import { useTracker } from '../hooks'
import { Touchable, withError } from '../rmc'
import classnames from 'classnames'
import { IconPropsType, TitlePropsType, CouponPropsType } from './PropsType'
import { useState } from 'react'
import Button from '../Button'

import '@ant-design/mobile-styles/lib/Coupon'

const CouponPrefixCls = `amd-coupon`

const Clip: React.FC<any> = ({ prefixCls, disable, type }) => {
  const classes = classnames({
    [`${prefixCls}-clip-wrap`]: true,
    ['disable']: disable,
    [type]: !!type,
  })
  return (
    <div className={classes}>
      <div className={`${prefixCls}-clip-inner`}></div>
    </div>
  )
}

const Icon: React.FC<IconPropsType> = ({ prefixCls, image }) => {
  return (
    <div className={`${prefixCls}-img-inner`}>
      {image ? <img className={`${prefixCls}-img`} src={image} /> : ''}
    </div>
  )
}

const Title: React.FC<TitlePropsType> = ({ title, subTitle, prefixCls }) => {
  return (
    <div className={`${prefixCls}-content`}>
      <h3 className={`${prefixCls}-title`}>{title}</h3>
      {!!subTitle ? <p className={`${prefixCls}-desc`}>{subTitle}</p> : ''}
    </div>
  )
}

const Coupon: React.FC<CouponPropsType> = ({
  title,
  subTitle,
  buttonText,
  image,
  onPress,
  subButtonText,
  children,
}) => {
  const [flag, setFlag] = useState(false)

  useTracker(Coupon.displayName)

  return (
    <div>
      <div className={`${CouponPrefixCls}-wrap`}>
        {!!image ? (
          <div className={`${CouponPrefixCls}-icon-wrap`}>
            <Clip
              prefixCls={CouponPrefixCls}
              type="top2right"
              disable={!image}
            />
            <Clip
              prefixCls={CouponPrefixCls}
              type="bottom2right"
              disable={!image}
            />
            <div className={`${CouponPrefixCls}-img-wrap`}>
              <Icon prefixCls={CouponPrefixCls} image={image} />
            </div>
          </div>
        ) : (
          ''
        )}
        <div
          className={`${CouponPrefixCls}-inner ${!!image ? '' : 'no-image'}`}
        >
          <div>
            <Clip
              prefixCls={CouponPrefixCls}
              type="top2left"
              disable={!image}
            />
            <Clip
              prefixCls={CouponPrefixCls}
              type="bottom2left"
              disable={!image}
            />
            <Title
              prefixCls={CouponPrefixCls}
              title={title}
              subTitle={subTitle}
            />
            {buttonText ? (
              <div className={`${CouponPrefixCls}-ext-wrap`}>
                <Button
                  type="primary"
                  capsuleSize="sm"
                  capsule
                  onPress={onPress}
                >
                  {buttonText}
                </Button>
              </div>
            ) : (
              ''
            )}
          </div>
          {!!children || !!subButtonText ? (
            <div
              className={`${CouponPrefixCls}-tips-wrap ${!!flag ? 'show' : ''}`}
            >
              <div className={`${CouponPrefixCls}-tips`}>{children}</div>
              <Touchable
                onPress={() => {
                  setFlag(!flag)
                }}
              >
                <div className={`${CouponPrefixCls}-tips-btn`}>
                  {subButtonText}
                </div>
              </Touchable>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

Coupon.displayName = 'Coupon'

export default withError(Coupon)
