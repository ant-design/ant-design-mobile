import React from 'react';
import ReactDOM from 'react-dom';
// import Promise from 'bluebird';
import { addLocaleData, IntlProvider } from 'react-intl';
import Header from './Header';
import Footer from './Footer';
import enLocale from '../../en-US.js';
import cnLocale from '../../zh-CN.js';
import '../../static/style';
// import * as utils from '../utils';

// Expose to iframe
window.react = React;
window['react-dom'] = ReactDOM;

const isZhCN = (window.localStorage && localStorage.getItem('locale') !== 'en-US');
  // (typeof localStorage !== 'undefined' && localStorage.getItem('locale') === 'zh-CN') ||
  // (navigator.language === 'zh-CN');

const appLocale = isZhCN ? cnLocale : enLocale;
addLocaleData(appLocale.data);

let gaListenerSetted = false;
export default class Layout extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  componentDidMount() {
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
