import React from 'react';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import QueueAnim from 'rc-queue-anim';

export default function Page3() {
  return (
    <ScrollOverPack id="page3" scrollName="page3" className="content-wrapper page" playScale={1} replay>
      <QueueAnim className="text-wrapper" delay={300} duration={550} type="bottom"
        leaveReverse
      >
        <h2 key="h2">AntDesignMobile配置平台</h2>
        <p key="p">基于设计基础指南和组件库让你可以快速搭建属于你自己的设计规范以及基于React的前端组件库。</p>
        <div className="bottom-imgs" key="images">
          <Row>
            <Col span={8}>
              <img src="https://zos.alipayobjects.com/rmsportal/xPHfUJmQdTvvssW.png" />
              <p>一键搭建设计规范</p>
            </Col>
            <Col span={8}>
              <img src="https://zos.alipayobjects.com/rmsportal/QsbBeYCXnXLQBZY.png" />
              <p>自动生成前端代码</p>
            </Col>
            <Col span={8}>
              <img src="https://zos.alipayobjects.com/rmsportal/HcboKCvvlHYuZkq.png" />
              <p>快速导出Sketch模板</p>
            </Col>
          </Row>
        </div>
      </QueueAnim>
    </ScrollOverPack>
  );
}
