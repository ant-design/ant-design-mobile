import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import GitHubButton from 'react-github-button';
import 'react-github-button/assets/style.css';
import Icon from 'antd/lib/icon';
import { logoText } from '../../';

export default class Home extends React.Component {
  componentWillMount() {
    if (location.hash) {
      const pathname = location.hash.replace(/^#/, '').replace('?scrollTo=', '#');
      location.href = pathname;
    }
  }
  render() {
    const title = `${logoText} | 移动端设计规范`;
    return (
      <DocumentTitle title={title}>
        <div style={{ width: 500, padding: '150px 100px' }}>
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
        </div>
      </DocumentTitle>
    );
  }
}
