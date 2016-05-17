import React from 'react';
import { Select } from 'antd';
import { version as antmVersion } from '../../../package.json';
import { docVersions } from '../../website.config';
const Option = Select.Option;

docVersions[antmVersion] = antmVersion;

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.handleVersionChange = this.handleVersionChange.bind(this);
  }

  handleVersionChange(url) {
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
            <div style={{ margin: '10px auto 5px' }}>©2016 蚂蚁金服体验技术部 & 口碑终端技术部</div>
            <div style={{ marginTop: 0 }}>
              文档版本：
              <Select
                size="small"
                dropdownMatchSelectWidth={false}
                defaultValue={antmVersion}
                onChange={this.handleVersionChange}>
                {options}
              </Select>
            </div>
          </li>
        </ul>
      </footer>
    );
  }
}
