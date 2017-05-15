import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'bisheng/router';
import GitHubButton from 'react-github-button';
import { injectIntl } from 'react-intl';
import 'react-github-button/assets/style.css';
import Icon from 'antd/lib/icon';
import * as utils from '../../../../utils';

class Home extends React.Component {
  constructor(props) {
    super(props);
    const pathname = props.location.pathname;
    const isZhCN = utils.isZhCN(pathname);
    this.state = {
      isZhCN,
    };
  }
  componentWillMount() {
    if (location.hash) {
      const pathname = location.hash.replace(/^#/, '').replace('?scrollTo=', '#');
      location.href = pathname;
    }
  }
  render() {
    const { isZhCN } = this.state;
    let iframeUrl = location.port ? 'http://localhost:8002/' : `${location.origin}/kitchen-sink/`;
    if (isZhCN) {
      iframeUrl = `${iframeUrl}?lang=zh-CN`;
    } else {
      iframeUrl = `${iframeUrl}?lang=en-US`;
    }
    return (
      <DocumentTitle title={`Ant Design Mobile - ${this.props.intl.formatMessage({ id: 'app.home.slogan' })}`}>
        <div className="home-main">
          <div className="home-iframe">
            <div style={{ width: '377Px', height: '620Px' }}>
              <div className="demo-preview-wrapper">
                <div className="demo-preview-header">
                  <div className="demo-preview-statbar">
                    <img width="350Px" alt="presentation" style={{ margin: '0 2Px' }} src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png" />
                  </div>
                  <div style={{ height: '40Px' }}>
                    <div className="url-box">{iframeUrl}</div>
                  </div>
                </div>
                <section className="code-box-demo code-box-demo-preview">
                  <iframe
                    id="demoFrame"
                    title="antd-mobile"
                    name="demoFrame"
                    style={{ width: '377Px', height: '548Px', border: '1Px solid #F7F7F7', borderTop: 'none', boxShadow: '0 2Px 4Px #ebebeb' }}
                    src={iframeUrl}
                  />
                </section>
              </div>
            </div>
          </div>
          <div className="banner-text-wrapper">
            <h2 key="h2">{this.props.intl.formatMessage({ id: 'app.home.centerSlogan' })}</h2>
            <div>
              {this.props.intl.formatMessage({ id: 'app.home.centerSubSlogan' })}
              <GitHubButton
                key="github-button"
                type="stargazers"
                namespace="ant-design"
                repo="ant-design-mobile"
              />
            </div>
            <div className="start-button-wrap" key="button">
              <Link to="/docs/react/introduce">
                <Icon type="smile-circle" /> {this.props.intl.formatMessage({ id: 'app.home.centerStart' })}
              </Link>
            </div>
            <img className="qr" src="https://zos.alipayobjects.com/rmsportal/TrdkqxQcrAUcmYelQUNK.png" alt="qrcode" />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default injectIntl(Home);
