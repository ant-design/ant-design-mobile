import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
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
    router: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    const { pathname } = props.location;
    const appLocale = utils.isZhCN(pathname) ? cnLocale : enLocale;
    addLocaleData(appLocale.data);
    this.state = {
      isFirstScreen: true,
      appLocale,
    };
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
          <p style={{ backgroundColor: '#e6f7ff', textAlign: 'center', padding: '10px 0' }}>
            Note: In antd-mobile@2.2.0, React Native components will be transferred to the separate
            <span style={{ color: 'red' }}> antd-mobile-rn </span> package. Ref: <a href="https://github.com/ant-design/ant-design-mobile/issues/2556">#2556</a>
          </p>
          <Header {...restProps} isFirstScreen={isFirstScreen} />
          {cloneElement(children, { isFirstScreen, onEnterChange: this.onEnterChange })}
          <Footer {...restProps} />
        </div>
      </IntlProvider>
    );
  }
}
