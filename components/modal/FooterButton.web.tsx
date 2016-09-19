import * as React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import touchableFeedback from '../_util/touchableFeedback';

class FooterButton extends React.Component<any, any> {
  render() {
    const { button, prefixCls, touchFeedback } = this.props;
    const restProps = assign({}, this.props);
    ['button', 'prefixCls', 'touchFeedback'].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    const wrapCls = classNames({
      [`${prefixCls}-button`]: true,
      [`${prefixCls}-button-touchFeedback`]: touchFeedback,
    });

    return (
      <a className={wrapCls} href="#" onClick={(e) => {
        e.preventDefault();
        if (button.onPress) {
          button.onPress();
        }
      }} {...restProps}>{button.text || `Button`}</a>
    );
  }
};

export default touchableFeedback(FooterButton);
