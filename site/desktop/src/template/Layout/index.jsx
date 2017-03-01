import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import Header from './Header';
import Footer from './Footer';
import enLocale from '../../en-US';
import cnLocale from '../../zh-CN';
import * as utils from '../../../../utils';

if (typeof window !== 'undefined') {
  /* eslint-disable global-require */
  require('../../static/style');

  // Expose to iframe
  window.react = React;
  window['react-dom'] = ReactDOM;
}


export default class Layout extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    const pathname = props.location.pathname;
    const appLocale = utils.isZhCN(pathname) ? cnLocale : enLocale;
    addLocaleData(appLocale.data);
    this.state = {
      isFirstScreen: true,
      appLocale,
    };
  }

  checkIfMobile = () => {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('android') !== -1 || ua.indexOf('iphone') !== -1) {
      return true;
    }
    return false;
  }
  componentWillMount() {
    if (this.checkIfMobile()) {
      location.href = location.port ? 'http://127.0.0.1:8002/' : '/kitchen-sink/';
    }
  }
  componentDidMount() {
    if (typeof window.ga !== 'undefined') {
      this.context.router.listen((loc) => {
        window.ga('send', 'pageview', loc.pathname + loc.search);
      });
    }

    const nprogressHiddenStyle = document.getElementById('nprogress-style');
    if (nprogressHiddenStyle) {
      this.timer = setTimeout(() => {
        nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle);
      }, 0);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === 'enter',
    });
  }

  render() {
    const { children, ...restProps } = this.props;
    const { appLocale, isFirstScreen } = this.state;
    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <div className="page-wrapper">
          <Header {...restProps} isFirstScreen={isFirstScreen} />
          {cloneElement(children, { onEnterChange: this.onEnterChange })}
          <Footer {...restProps} />
        </div>
      </IntlProvider>
    );
  }
}
