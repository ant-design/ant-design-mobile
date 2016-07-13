import React from 'react';
import { Select, Modal } from 'antd';
import { version as antmVersion } from 'antm/package.json';
import { docVersions } from '../../';
const Option = Select.Option;

function isLocalStorageNameSupported() {
  const testKey = 'test';
  const storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

docVersions[antmVersion] = antmVersion;

export default class Footer extends React.Component {
  componentDidMount() {
    // for some iOS
    // http://stackoverflow.com/a/14555361
    if (!isLocalStorageNameSupported()) {
      return;
    }
    // 大版本发布后全局弹窗提示
    //   1. 点击『知道了』之后不再提示
    //   2. 超过截止日期后不再提示
    if (localStorage.getItem('infoNewVersionSent') !== 'true' &&
        new Date().getTime() < new Date('2016/05/22').getTime()) {
      this.infoNewVersion();
    }
  }

  infoNewVersion() {
    Modal.info({
      title: 'antd 新版发布！',
      content: (
        <div>
          <img src="https://os.alipayobjects.com/rmsportal/nyqBompsynAQCpJ.svg" alt="Ant Design" />
          <p>
            您好，<a target="_blank" href="/#/changelog">antd@1.0</a> 已正式发布，欢迎升级。
            如果您还需要使用旧版，请查阅 <a target="_blank" href="http://012x.ant.design">012x.ant.design</a>
            ，也可通过页面右下角的文档版本选择框进行切换。
          </p>
        </div>
      ),
      onOk: () => localStorage.setItem('infoNewVersionSent', 'true'),
      className: 'new-version-info-modal',
      width: 470,
    });
  }

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
