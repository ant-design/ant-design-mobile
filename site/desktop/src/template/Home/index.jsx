import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'bisheng/router';
import GitHubButton from 'react-github-button';
import { injectIntl } from 'react-intl';
import 'react-github-button/assets/style.css';
import * as utils from '../../../../utils';

class Home extends React.Component {
  POINT = 60;
  startTime = +new Date();
  moreTime = false;

  constructor(props) {
    super(props);
    const { pathname } = props.location;
    const isZhCN = utils.isZhCN(pathname);
    this.state = {
      isZhCN,
      welcome: props.isFirstScreen,
      loading: 0,
    };
  }
  componentWillMount() {
    if (window.location.hash) {
      const pathname = window.location.hash.replace(/^#/, '').replace('?scrollTo=', '#');
      window.location.href = pathname;
    }

    const receiveMessage = (event) => {
      if (event) {
        this.setState({ loading: Math.max(this.state.loading, this.POINT) });
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
    this.moreTime = this.moreTime || +new Date() > this.startTime + 2000;
    let speed = 100;
    if (this.state.loading >= this.POINT) {
      if (this.moreTime) {
        speed = 10;
      } else {
        speed = 70;
      }
    }

    setTimeout(() => {
      if (this.state.loading !== this.POINT - 1) {
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
    const { isZhCN, welcome, loading } = this.state;

    let iframeUrl = window.location.port ? 'http://localhost:8002/' : `${window.location.origin}/kitchen-sink/`;
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

    const count = Math.floor(loading / 10);
    let prg = '';
    for (let i = 0; i < 10; i += 1) {
      prg += i < count ? '=' : '-';
    }

    return (
      <DocumentTitle title={`Ant Design Mobile - ${this.props.intl.formatMessage({ id: 'app.home.slogan' })}`}>
        <div className="home-main">
          {
            false &&
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
            <div style={{ width: '424Px', height: '810Px', position: 'relative' }}>
              <div className="holo" />
              <div className="demo-preview-wrapper">
                <div className="hold" />
                <section className="code-box-demo code-box-demo-preview"
                  style={{
                    background: welcome ? '#041928' : '#F5F5F9',
                  }}
                >
                  <iframe
                    id="demoFrame"
                    title="antd-mobile"
                    name="demoFrame"
                    style={{ width: '424Px', height: '662Px' }}
                    src={iframeUrl}
                  />

                  {
                    welcome &&
                    <div className="phone"
                      style={{ width: '424Px', height: '662Px' }}
                    >
                      <div className="title">Ant Design Mobile</div>
                      <div className="title">2.0</div>
                      <div className="prg">loading</div>
                      <div className="prg">[{prg}]</div>
                      <div className="prg">{this.state.loading}%</div>
                      <div className="feat">/* Faster */</div>
                      <div className="feat">/* easy to use */</div>
                      <div className="feat">/* lightweight */</div>
                    </div>
                  }
                </section>
                <div className="oval" />
              </div>
            </div>
          </div>
          {
            false &&
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
      </DocumentTitle >
    );
  }
}

export default injectIntl(Home);
