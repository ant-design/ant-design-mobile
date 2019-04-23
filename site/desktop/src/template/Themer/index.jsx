import React from 'react';
import { Icon, Drawer, Divider, message } from 'antd';
import DocumentTitle from 'react-document-title';
import { injectIntl } from 'react-intl';
// import collect from 'bisheng/collect';
import * as utils from '../../../../utils';
import ThemerColor from './ThemerColor';
import AllComponents from './AllComponents';

let lessNodesAppended = false;

class Themer extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = props.location;
    const isZhCN = utils.isZhCN(pathname);
    this.state = {
      isZhCN,
      collapse: false,
      compiled: false,
      color: '#1890FF',
    };
  }

  updateTheme = (color = '#1890FF') => {
    const hideMessage = message.loading('正在编译主题！', 0);
    const self = this;
    function buildIt() {
      if (!window.less) {
        return;
      }
      setTimeout(() => {
        window.less
          .modifyVars({
            '@brand-primary': color,
          })
          .then(() => {
            self.setState({
              compiled: true,
            });
            hideMessage();
          })
          .catch(() => {
            message.error('Failed to update theme');
            hideMessage();
          });
      }, 200);
    }
    if (!lessNodesAppended) {
      // insert less.js and color.less
      const lessStyleNode = document.createElement('link');
      const lessConfigNode = document.createElement('script');
      const lessScriptNode = document.createElement('script');
      lessStyleNode.setAttribute('rel', 'stylesheet/less');
      lessStyleNode.setAttribute('type', 'text/css');
      lessStyleNode.setAttribute('href', '/themer.less');
      lessConfigNode.innerHTML = `
        window.less = {
          async: true,
          env: 'production',
          javascriptEnabled: true
        };
      `;
      lessScriptNode.src = 'https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js';
      lessScriptNode.async = true;
      lessScriptNode.onload = () => {
        buildIt();
        lessScriptNode.onload = null;
      };
      document.body.appendChild(lessStyleNode);
      document.body.appendChild(lessConfigNode);
      document.body.appendChild(lessScriptNode);
      lessNodesAppended = true;
    } else {
      buildIt();
    }
  }

  changeThemer = (color) => {
    this.updateTheme(color);
    this.setState({
      color,
    });
  }

  togglerContent = () => {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  }

  componentDidMount() {
    this.updateTheme();
  }

  render() {
    const { collapse, compiled, color } = this.state;
    return (
      <DocumentTitle title={`Ant Design Mobile - ${this.props.intl.formatMessage({ id: 'app.home.slogan' })}`}>
        <div className="main-wrapper themer">
          {
            compiled ? <AllComponents /> : null
          }
          <Drawer
            title="主题配置面板"
            width={520}
            placement="left"
            closable
            onClose={this.togglerContent}
            visible={collapse}
            handler={
              <div className="handle" onClick={this.togglerContent}>
                <Icon
                  type={collapse ? 'close' : 'setting'}
                  style={{
                    color: '#fff',
                    fontSize: 20,
                  }}
                />
              </div>
            }
            style={{
              zIndex: 999,
            }}
          >
            <ThemerColor
              title="主题色"
              value={color}
              onChange={choosedColor => this.changeThemer(choosedColor)}
            />
            <Divider />
          </Drawer>
        </div>
      </DocumentTitle>
    );
  }
}

export default injectIntl(Themer);
