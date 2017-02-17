import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import Header from './Header';
import Footer from './Footer';
import config from '../../';
import '../../static/style';

// Expose to iframe
window.react = React;
window['react-dom'] = ReactDOM;

const isZhCN = (window.localStorage && localStorage.getItem('locale') !== 'en-US');
  // (typeof localStorage !== 'undefined' && localStorage.getItem('locale') === 'zh-CN') ||
  // (navigator.language === 'zh-CN');

const appLocale = isZhCN ? config.zhLocale : config.enLocale;
addLocaleData(appLocale.data);

let gaListenerSetted = false;
export default class Layout extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  checkIfMobile = () => {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('android') !== -1 || ua.indexOf('iphone') !== -1) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    if (this.checkIfMobile()) {
      location.href = '/kitchen-sink/';
    }
    if (typeof ga !== 'undefined' && !gaListenerSetted) {
      this.context.router.listen((loc) => {
        window.ga('send', 'pageview', loc.pathname + loc.search);
      });
      gaListenerSetted = true;
    }
  }

  render() {
    const props = this.props;
    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <div className="page-wrapper">
          <Header {...props} />
          {props.children}
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}
