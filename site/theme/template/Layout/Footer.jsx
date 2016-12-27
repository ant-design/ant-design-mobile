import React from 'react';
import Select from 'antd/lib/select';
import { version as packageVersions } from 'antd-mobile/package.json';
import { docVersions } from '../../';

const Option = Select.Option;
docVersions[packageVersions] = packageVersions;

export default class Footer extends React.Component {

  handleVersionChange = (url) => {
    window.location.href = url;
  }

  render() {
    const options = Object.keys(docVersions).map(version => (
      <Option value={docVersions[version]} key={version}>{version}</Option>
    ));
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
            <div><a href="http://motion.ant.design">Ant Motion</a> - 设计动效</div>
            <div><a href="http://ux.ant.design">Ant UX</a> - 页面逻辑素材</div>
          </li>
          <li>
            <h2>联系我们</h2>
            <a target="_blank" rel="noopener noreferrer" href="http://github.com/ant-design/ant-design-mobile/issues">
              反馈和建议
            </a>
          </li>
          <li>
            <div>©2016 蚂蚁金服体验技术部 & 口碑终端技术部出品</div>
            <div>Powered by <a href="https://github.com/benjycui/bisheng">BiSheng</a></div>
            <div>
              文档版本：
              <Select
                size="small"
                dropdownMatchSelectWidth={false}
                defaultValue={packageVersions}
                onChange={this.handleVersionChange}
              >
                {options}
              </Select>
            </div>
          </li>
        </ul>
      </footer>
    );
  }
}
