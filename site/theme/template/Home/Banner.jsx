import React from 'react';
import { Link } from 'react-router';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import GitHubButton from 'react-github-button';
import 'react-github-button/assets/style.css';
import Icon from 'antd/lib/icon';
import QueueAnim from 'rc-queue-anim';

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
          <QueueAnim className="banner-text-wrapper" type={this.typeFunc} delay={300}>
            <div className="banner-img" key="image" />
            <div className="start-button-wrap" key="button">
              <Link to="/docs/react/introduce">
                开始探索
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
          <Icon type="down" className="down" />
        </ScrollElement>
      </section>
    );
  }
}
