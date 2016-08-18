import React from 'react';
import { Link } from 'react-router';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import QueueAnim from 'rc-queue-anim';

const clientHeight = document.documentElement.clientHeight;
function onScrollEvent(e) {
  const header = document.getElementById('header');
  if (e.pageY >= clientHeight) {
    if (header.className.indexOf('home-nav-bottom') < 0) {
      header.className += ' home-nav-bottom';
    }
  } else if (header.className.indexOf('home-nav-bottom') >= 0) {
    header.className = header.className.replace(/home-nav-bottom/ig, '');
  }
}

export default function Page1() {
  return (
    <ScrollOverPack id="page1" scrollName="page1"
      className="content-wrapper page" playScale={1} replay
      scrollEvent={onScrollEvent}
      hideProps={{ image: { reverse: true } }}
    >
      <QueueAnim className="text-wrapper left-text" delay={300}
        key="text" duration={550} type="bottom" leaveReverse
      >
        <h2 key="h2">一套完善的设计基础指南</h2>
        <p key="p" style={{ maxWidth: 260 }}>Ant Design Mobile抽象了移动端产品通用的设计基础样式</p>
        <div key="button">
          <Link to="/docs/pattern/color">
            <Button type="primary" size="large">
              了解更多
              <Icon type="right" />
            </Button>
          </Link>
        </div>
      </QueueAnim>

      <TweenOne key="image" className="image1 image-wrapper"
        animation={{ x: 0, opacity: 1, delay: 300, duration: 550 }}
        style={{ transform: 'translateX(100Px)', opacity: 0 }}
      />

      <TweenOne key="image1" className="image11 image-wrapper1"
        animation={{ x: 0, opacity: 1, delay: 300, duration: 550 }}
        style={{ transform: 'translateX(100Px)', opacity: 0 }}
      />

    </ScrollOverPack>
  );
}
