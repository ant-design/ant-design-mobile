import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'bisheng/router';
import GitHubButton from 'react-github-button';
import { injectIntl } from 'react-intl';
import 'react-github-button/assets/style.css';
import * as utils from '../../../../utils';

class Home extends React.Component {
  constructor(props) {
    super(props);
    const pathname = props.location.pathname;
    const isZhCN = utils.isZhCN(pathname);
    this.state = {
      isZhCN,
      welcome: props.isFirstScreen,
      loading: 0,
    };
  }
  componentWillMount() {
    if (location.hash) {
      const pathname = location.hash.replace(/^#/, '').replace('?scrollTo=', '#');
      location.href = pathname;
    }

    const receiveMessage = (event) => {
      if (event) {
        this.setState({ loading: Math.max(this.state.loading, 70) });
      }
    };
    window.addEventListener('message', receiveMessage, false);
  }

  componentWillUnmount() {
    const { onEnterChange } = this.props;
    if (onEnterChange) {
      onEnterChange('exit');
    }
  }

  componentDidMount() {
    this.loading();
  }

  loading() {
    const speed = this.state.loading < 60 ? 30 : 20;
    setTimeout(() => {
      if (this.state.loading !== 69) {
        this.setState({
          loading: this.state.loading + 1,
        });
      }
      if (this.state.loading < 100) {
        this.loading();
      } else {
        this.setState({
          welcome: false,
        });
      }
    }, speed);
  }

  render() {
    const { isZhCN, welcome } = this.state;

    let iframeUrl = location.port ? 'http://localhost:8002/' : `${location.origin}/kitchen-sink/`;
    if (isZhCN) {
      iframeUrl = `${iframeUrl}?lang=zh-CN`;
    } else {
      iframeUrl = `${iframeUrl}?lang=en-US`;
    }

    let iframeCls = 'home-iframe';
    if (!welcome) {
      iframeCls += ' move-left';
    } else {
      iframeCls += ' fade-in';
    }

    return (
      <DocumentTitle title={`Ant Design Mobile - ${this.props.intl.formatMessage({ id: 'app.home.slogan' })}`}>
        <div className="home-main">
          {
            welcome &&
            <div className="welcome-icon fade-in">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/aKoUQpToTfJVKGFQdmFd.png" alt="" />
              <img src="https://gw.alipayobjects.com/zos/rmsportal/vWsYHYMWcdjmpIagCokB.png" alt="" />
              <img src="https://gw.alipayobjects.com/zos/rmsportal/CQuJgTfsOeYTVYyGVxZm.png" alt="" />
              <img src="https://gw.alipayobjects.com/zos/rmsportal/JYKUUhZWeDWnyrwyqXcf.png" alt="" />
              <img src="https://gw.alipayobjects.com/zos/rmsportal/zPnYQbPrVkPgAeXXbTTT.png" alt="" />
              <img src="https://gw.alipayobjects.com/zos/rmsportal/BlvJVPzFvsNlRwVIrBVm.png" alt="" />
            </div>
          }
          <div className={iframeCls}>
            <div style={{ width: '424Px', height: '810Px' }}>
              <div className="demo-preview-wrapper">
                <div className="hold" />
                <section className="code-box-demo code-box-demo-preview">
                  <iframe
                    id="demoFrame"
                    title="antd-mobile"
                    name="demoFrame"
                    style={{ width: '424Px', height: '662Px', border: '1Px solid #F7F7F7', borderTop: 'none', borderRadius: 10 }}
                    src={iframeUrl}
                  />

                  {
                    welcome &&
                    <div className="phone"
                      style={{ width: '424Px', height: '662Px', border: '1Px solid #F7F7F7', borderTop: 'none', borderRadius: 10 }}
                    >
                      <div className="title">AntDesign Mobile</div>
                      <div className="title">V2.0</div>
                      <div className="prg">loading</div>
                      <div className="prg">[==========]</div>
                      <div className="prg">{this.state.loading}%</div>
                      <div className="feat">{'/* Faster */'}</div>
                      <div className="feat">{'/* easy to use */'}</div>
                      <div className="feat">{'/* lightweight */'}</div>
                    </div>
                  }
                </section>
                <div className="oval" />
              </div>
            </div>
          </div>
          {
            welcome &&
            <div className="welcome-icon fade-in">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/agaKKXVNzwIVZMttqJbz.png" alt="" />
              <img src="https://gw.alipayobjects.com/zos/rmsportal/AgPJWjTZZEcLxPYWFWZV.png" alt="" />
              <img src="https://gw.alipayobjects.com/zos/rmsportal/rjKSrrgfyLgDcrjQwsGu.png" alt="" />
              <img src="https://gw.alipayobjects.com/zos/rmsportal/nyijBOGoiMaZmXejuflR.png" alt="" />
              <img src="https://gw.alipayobjects.com/zos/rmsportal/cGvpeIopGvhyZXvDcxfA.png" alt="" />
              <img src="https://gw.alipayobjects.com/zos/rmsportal/bzVjQwHEElzSFptaGFuX.png" alt="" />
            </div>
          }
          {
            !welcome &&
            <div className="banner-text-wrapper content-in">
              <h2 key="h2">{this.props.intl.formatMessage({ id: 'app.home.centerSlogan' })}</h2>
              {this.props.intl.formatMessage({ id: 'app.home.centerSubSlogan' })}
              <div className="op-area">
                <div className="start-button-wrap" key="button">
                  <Link to={`/docs/react/introduce${isZhCN ? '-cn' : ''}`}>
                    {this.props.intl.formatMessage({ id: 'app.home.centerStart' })}
                  </Link>
                </div>
                <GitHubButton
                  key="github-button"
                  type="stargazers"
                  namespace="ant-design"
                  repo="ant-design-mobile"
                />
              </div>
              <img className="qr" src="https://zos.alipayobjects.com/rmsportal/TrdkqxQcrAUcmYelQUNK.png" alt="qrcode" />
              <div className="qr-tip">{this.props.intl.formatMessage({ id: 'app.home.qrtip' })}</div>
            </div>
          }
        </div>
      </DocumentTitle>
    );
  }
}

export default injectIntl(Home);
