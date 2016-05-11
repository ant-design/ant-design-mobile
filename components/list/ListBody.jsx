import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ListBody extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let { prefixCls, children, className, ...others } = this.props;
    const listBodyCls = classNames({
      [`${prefixCls}-body`]: true,
      [className]: className
    });
    let customChildren = children;
    if (Array.isArray(children)) {
      const len = children.length;
      customChildren = [];
      React.Children.forEach(children, (el, idx) => {
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
    } else {
      customChildren = React.cloneElement(children, {
        isLastItem: true
      });
    }
    return (
      <div {...others} className={listBodyCls}>
        {customChildren}
      </div>
    );
  }
}
