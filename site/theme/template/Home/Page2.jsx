import React from 'react';
import { Link } from 'react-router';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';

export default function Page2() {
  return (
    <ScrollOverPack id="page2" scrollName="page2" className="content-wrapper page" playScale={1} replay>
      <QueueAnim className="text-wrapper left-text" delay={300} duration={550} type="bottom"
        leaveReverse
      >
        <h2 key="h2">一套可灵活配置的组件库</h2>
        <p key="p">Ant Design Mobile提供了40+个通用组件，并抽象出组件的通用属性，使用者可根据需求选择需要的属性进行配置，也可在此基础上自行拓展。
        </p>
        <div key="button">
          <Link to="/docs/react/introduce">
            <Button type="primary" size="large">
              了解更多
              <Icon type="right" />
            </Button>
          </Link>
        </div>
      </QueueAnim>
      <TweenOne className="image2 image-wrapper" animation={{ x: 0, opacity: 1, delay: 300, duration: 550 }}
        style={{ transform: 'translateX(100Px)', opacity: 0 }}
      />
    </ScrollOverPack>
  );
}
