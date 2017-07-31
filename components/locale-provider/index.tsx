import React from 'react';
import PropTypes from 'prop-types';

export interface LocaleProviderProps {
  locale: {
    Pagination?: Object,
    DatePicker?: Object,
    InputItem?: Object,
  };
  children?: React.ReactElement<any>;
}

export default class LocaleProvider extends React.Component<LocaleProviderProps, any> {
  static propTypes = {
    locale: PropTypes.object,
  };

  static childContextTypes = {
    antLocale: PropTypes.object,
  };

  getChildContext() {
    return {
      antLocale: {
        ...this.props.locale,
        exist: true,
      },
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
