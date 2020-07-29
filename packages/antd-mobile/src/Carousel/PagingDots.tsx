import * as React from 'react'
import Touchable from '@ant-design/mobile-touchable'
import Smile from './Smile'

const prefix = 'amd-carousel-dots'

const PagingDots: React.FC<any> = props => {
  const {
    slideCount,
    slidesToScroll,
    slidesToShow,
    cellAlign,
    scrollMode,
  } = props
  const getDotIndexes = () => {
    const dotIndexes = []
    let lastDotIndex = slideCount - slidesToShow

    switch (cellAlign) {
      case 'center':
      case 'right':
        lastDotIndex += slidesToShow - 1
        break
    }

    if (lastDotIndex < 0) {
      return [0]
    }

    for (let i = 0; i < lastDotIndex; i += slidesToScroll) {
      dotIndexes.push(i)
    }

    if (cellAlign === 'left' && scrollMode === 'page') {
      lastDotIndex = Math.floor(
        slideCount - (slideCount % slidesToShow || slidesToShow),
      )
    }

    dotIndexes.push(lastDotIndex)
    return dotIndexes
  }

  const indexes = getDotIndexes()

  return (
    <ul className={prefix}>
      {indexes.map(index => {
        const isActive = props.currentSlide === index

        return (
          <li
            key={index}
            className={isActive ? 'paging-item active' : 'paging-item'}
          >
            <Touchable onPress={props.goToSlide.bind(null, index)}>
              <div
                className={prefix + '-item'}
                aria-label={`slide ${index + 1} bullet`}
              >
                {isActive ? (
                  <Smile className="paging-dot-active" />
                ) : (
                  <div className="paging-dot" />
                )}
              </div>
            </Touchable>
          </li>
        )
      })}
    </ul>
  )
}

export default PagingDots
