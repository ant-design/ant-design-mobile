import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <ul>
          <li>
            <h2>源码</h2>
            <a target="_blank " href="http://github.com/ant-design">
              antd
            </a>
            <a target="_blank " href="http://gitlab.alibaba-inc.com/react-ui/ant-mobile">
              antm
            </a>
            <a target="_blank" href="https://github.com/react-component">
              react-component
            </a>
          </li>
          <li>
            <h2>联系我们</h2>
            <a target="_blank" href="http://gitlab.alibaba-inc.com/react-ui/ant-mobile/issues">
              反馈和建议
            </a>
          </li>
          <li>
            <div>©2016 蚂蚁金服体验技术部 & 口碑终端技术部</div>
          </li>
        </ul>
      </footer>
    );
  }
}
