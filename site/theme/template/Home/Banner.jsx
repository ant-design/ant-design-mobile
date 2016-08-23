import React from 'react';
import { Link } from 'react-router';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import GitHubButton from 'react-github-button';
import 'react-github-button/assets/style.css';
import Icon from 'antd/lib/icon';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

export default class Banner extends React.Component {
  typeFunc(a) {
    if (a.key === 'image') {
      return 'top';
    } else if (a.key === 'button') {
      return 'bottom';
    }
    return 'left';
  }

  render() {
    return (
      <section id="banner">
        <ScrollElement scrollName="banner" className="page">
          <QueueAnim className="banner-text-wrapper" delay={300} key="text" duration={550} type="bottom" leaveReverse>
            <h2 key="h2">移动端设计指南&前端框架</h2>
            <p key="content">设计、前端高效协同，快速搭建移动端组件库</p>
            <div className="start-button-wrap" key="button">
              <Link to="/docs/react/introduce">
                <Icon type="smile-circle" /> 开始探索
              </Link>
            </div>
            <div className="github-button-wrap" key="github">
              <GitHubButton
                key="github-button"
                type="stargazers"
                namespace="ant-design"
                repo="ant-design-mobile"
              />
            </div>
          </QueueAnim>
          <TweenOne key="image" className="banner-img image-wrapper"
            animation={{ x: 0, opacity: 1, delay: 300, duration: 550 }}
            style={{ transform: 'translateX(100Px)', opacity: 0 }}
          />
          <Icon type="down" className="down" />
        </ScrollElement>
      </section>
    );
  }
}
