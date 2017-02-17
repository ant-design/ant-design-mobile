import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <ul>
          <li>
            <h2>源码</h2>
            <div>
              <a target="_blank " rel="noopener noreferrer" href="http://github.com/ant-design">antd</a>
            </div>
            <div>
              <a target="_blank " rel="noopener noreferrer" href="http://github.com/ant-design/ant-design-mobile">antd-mobile</a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/react-component">react-component</a>
            </div>
          </li>
          <li>
            <h2>相关站点</h2>
            <div><a href="http://motion.ant.design">Ant Motion</a> - 设计动效</div>
            <div><a href="http://ux.ant.design">Ant UX</a> - 页面逻辑素材</div>
          </li>
          <li>
            <h2>联系我们</h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design">
                谈论
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="http://github.com/ant-design/ant-design-mobile/issues">
                报告 Bug
              </a>
            </div>
          </li>
          <li>
            <div>©2016 蚂蚁金服体验技术部 & 口碑终端技术部出品</div>
            <div>Powered by <a href="https://github.com/benjycui/bisheng">BiSheng</a></div>
          </li>
        </ul>
      </footer>
    );
  }
}
