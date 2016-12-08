import React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';

class FooterButton extends React.Component<any, any> {
  render() {
    const { button, prefixCls, touchFeedback } = this.props;
    const restProps = assign({}, this.props);
    ['button', 'prefixCls', 'touchFeedback', 'activeStyle'].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    const wrapCls = classNames({
      [`${prefixCls}-button`]: true,
      [`${prefixCls}-button-active`]: touchFeedback,
    });

    let buttonStyle = {};
    if (button.style) {
      buttonStyle = button.style;
      if (typeof buttonStyle === 'string') {
        const styleMap = {
          'cancel': { fontWeight: 'bold' },
          'default': {},
          'destructive': { color: 'red' },
        };
        buttonStyle = styleMap[buttonStyle] || {};
      }
    }

    return (
      <a className={wrapCls} style={buttonStyle} href="#" onClick={(e) => {
        e.preventDefault();
        if (button.onPress) {
          button.onPress();
        }
      }} {...restProps}>{button.text || `Button`}</a>
    );
  }
};

export default (FooterButton);
