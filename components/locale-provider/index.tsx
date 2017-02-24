import React from 'react';

export interface LocaleProviderProps {
  locale: {
    Pagination?: Object,
    DatePicker?: Object,
  };
  children?: React.ReactElement<any>;
}

export default class LocaleProvider extends React.Component<LocaleProviderProps, any> {
  static propTypes = {
    locale: React.PropTypes.object,
  };

  static childContextTypes = {
    antLocale: React.PropTypes.object,
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
