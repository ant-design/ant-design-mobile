import * as React from 'react'
import { unstable_Carousel as Carousel } from '@ant-design/mobile'
import { useSelect } from '../../_internal/demo'
import './demo.less'

export default () => {
  const [state, view] = useSelect({
    dots: {
      desc: 'dots',
      v: true,
    },
    vertical: {
      desc: '纵向',
      v: false,
    },
    autoplay: {
      desc: '自动播放',
      v: false,
    },
    infinite: {
      desc: '循环播放',
      v: false,
    },
  })

  return (
    <div>
      {view}
      <Carousel
        // 这里加 key 是为了强制刷新
        // 实际项目中不要加
        key={Math.random()}
        {...state}
      >
        <p className="carousel-p">1</p>
        <p className="carousel-p">2</p>
        <p className="carousel-p">3</p>
        <p className="carousel-p">4</p>
      </Carousel>
    </div>
  )
}
