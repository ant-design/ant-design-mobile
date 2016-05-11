import React from 'react';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import TweenOne from 'rc-tween-one';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';

export default class Banner extends React.Component {
  typeFunc(a) {
    if (a.key === 'image') {
      return 'top';
    } else if (a.key === 'text') {
      return 'bottom';
    }
    return 'left';
  }

  render() {
    return (
      <section id="banner">
        <ScrollElement scrollName="banner" className="page">
          <QueueAnim className="banner-text-wrapper" type={this.typeFunc} delay={300}>
            <div className="banner-img" key="image" />
            <h2 key="text">移动端H5规范库</h2>
          </QueueAnim>
          <TweenOne className="down" animation={[{ opacity: 1 }, { y: 10, duration: 800, yoyo: true, repeat: -1 }]}>
            <Icon type="down" />
          </TweenOne>
        </ScrollElement>
      </section>
    );
  }
}
