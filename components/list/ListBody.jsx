import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ListBody extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let { style, children, className, prefixCls } = this.props;
    const listBodyCls = classNames({
      [`${prefixCls}-body`]: true,
      [className]: className
    });
    let customChildren = children;
    if (Array.isArray(children)) {
      const len = children.length;
      customChildren = [];
      children.forEach((el, idx) => {
        if (idx === len - 1) {
          customChildren.push(React.cloneElement(el, {
            isLastItem: true,
            key: idx
          }));
        } else {
          customChildren.push(React.cloneElement(el, {
            key: idx
          }));
        }
      });
    }
    return (
      <div className={listBodyCls} style={style}>
        {customChildren}
      </div>
    );
  }
}
