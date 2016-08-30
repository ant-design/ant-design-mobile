---
order: 1
title: 九宫格
---

最简单的用法。

````jsx
import { Carousel, Flex } from 'antd-mobile';
import classNames from 'classnames';

const data = [
  {
    icon: 'https://gw.alicdn.com/tps/TB1CgMrMpXXXXXcXpXXXXXXXXXX-96-96.png',
    text: '美食外卖',
    link: 'hehe',
  }, {
    icon: 'https://gw.alicdn.com/tps/TB1dvomMpXXXXa0XpXXXXXXXXXX-96-96.png',
    text: '鲜花蛋糕',
    link: 'hehe',
  }, {
    icon: 'https://gw.alicdn.com/tps/TB1dZAtMpXXXXcyXXXXXXXXXXXX-96-96.png',
    text: '品牌馆',
    link: 'hehe',
  }, {
    icon: 'https://gw.alicdn.com/tps/TB1H6RaMFXXXXXvXVXXXXXXXXXX-96-96.png',
    text: '蜂鸟专送',
    link: 'hehe',
  }, {
    icon: 'https://gw.alicdn.com/tps/TB1iWkXMpXXXXX6XVXXXXXXXXXX-96-96.png',
    text: '甜品饮品',
    link: 'hehe',
  }, {
    icon: 'https://gw.alicdn.com/tps/TB1sHgoMpXXXXaPXpXXXXXXXXXX-96-96.png',
    text: '超市便利',
    link: 'hehe',
  }, {
    icon: 'https://gw.alicdn.com/tps/TB1XKsjMpXXXXcRXpXXXXXXXXXX-97-96.png',
    text: '果蔬生鲜',
    link: 'hehe',
  }, {
    icon: 'https://gw.alicdn.com/tps/TB1CgMrMpXXXXXcXpXXXXXXXXXX-96-96.png',
    text: '生活馆',
    link: 'hehe',
  }, {
    icon: 'https://gw.alicdn.com/tps/TB1z73sMpXXXXcKXXXXXXXXXXXX-96-96.png',
    text: '名字',
    link: 'hehe',
  }, {
    icon: 'https://gw.alicdn.com/tps/TB1H6RaMFXXXXXvXVXXXXXXXXXX-96-96.png',
    text: '名字',
    link: 'hehe',
  },
];

const CarouselExample = React.createClass({

  componentWillMount() {
    this.clientWidth = document.documentElement.clientWidth;
  },

  render() {
    const dataLength = data.length;
    const FlexCount = Math.ceil(dataLength / 4);
    const gridContent = [];
    const carouselContent = [];
    const prefixCls = 'am-grid';

    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
    });

    const flexItemStyle = {
      height: `${this.clientWidth / 4}px`,
      paddingTop: `${this.clientWidth / 16}px`,
    };

    for (let i = 0; i < FlexCount; i++) {
      const flexContent = [];
      for (let j = 0; j < 4; j++) {
        if ((i * 4) + j < dataLength) {
          flexContent.push(<Flex.Item
            className={itemCls}
            style={flexItemStyle}
            onClick={() => { this.props.onClick(data[(i * 4) + j], ((i * 4) + j)); }}
            key={`griditem-${(i * 4) + j}`}
          >
            <div className={`${prefixCls}-icon`} style={{ backgroundImage: `url(${data[(i * 4) + j].icon})` }} />
            <div className={`${prefixCls}-text`}>{data[(i * 4) + j].text}</div>
          </Flex.Item>);
        } else {
          flexContent.push(<Flex.Item style={flexItemStyle} key={`griditem-${(i * 4) + j}`} />);
        }
      }

      gridContent.push(<Flex key={`fridflex${i}`}>{flexContent}</Flex>);
    }

    const gridContentLength = gridContent.length;
    for (let k = 0, len = Math.ceil(gridContentLength / 2); k < len; k++) {
      if (k * 2 < gridContentLength) {
        carouselContent.push();
      }
      if ((k * 2) + 1 < gridContentLength) {
        carouselContent.push(<div
          key={`carouselitem-${(k * 2) + 1}`}
        >
          {gridContent[k * 2]}
          {gridContent[(k * 2) + 1]}
        </div>);
      } else {
        carouselContent.push(<div
          key={`carouselitem-${k * 2}`}
        >
          {gridContent[k * 2]}
          <Flex>
            <Flex.Item className={itemCls} style={flexItemStyle} />
            <Flex.Item className={itemCls} style={flexItemStyle} />
            <Flex.Item className={itemCls} style={flexItemStyle} />
            <Flex.Item className={itemCls} style={flexItemStyle} />
          </Flex>
        </div>);
      }
    }

    return (
      <Carousel mode="banner" infinite={false}>
        {carouselContent}
      </Carousel>
    );
  },
});

ReactDOM.render(<CarouselExample />, mountNode);
````

<style>
.slick-slide {
  padding-bottom: 67.5px;
}
.am-flexbox {
  background: #fff;  
}
.am-flexbox-item {
  margin-left: 0;
}
.am-grid-icon {
  width: 88px;
  height: 88px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0 auto;
}
.am-grid-text {
  margin-top: 36px;
  font-size: 48px;
  color: #000;
  text-align: center;
}
.am-grid-item:active {
  background-color: #ddd;
}
</style>
