import React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import Touchable from 'rc-touchable';

class FooterButton extends React.Component<any, any> {
  render() {
    const { button, prefixCls, activeStyle } = this.props;
    const restProps = assign({}, this.props);
    ['button', 'prefixCls', 'activeStyle'].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    const wrapCls = classNames({
      [`${prefixCls}-button`]: true,
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
      <Touchable activeClassName={`${prefixCls}-button-active`} activeStyle={activeStyle}>
        <a className={wrapCls} style={buttonStyle} href="#" onClick={(e) => {
        e.preventDefault();
        if (button.onPress) {
          button.onPress();
        }
      }} {...restProps}>{button.text || `Button`}</a>
      </Touchable>
    );
  }
}

export default FooterButton;
