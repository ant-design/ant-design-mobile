import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class WingBlank extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    mode: PropTypes.oneOf([4, 8, 12, 16, 20, 24, 28, 32]),
  };

  static defaultProps = {
    prefixCls: 'am-wingblank',
    mode: 8,
  };

  render() {
    const { prefixCls, style, mode, children, className } = this.props;
    let wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: className
    });
    wrapCls += ` ${prefixCls}-wb${mode}`;

    return (
      <div {...this.props} style={style} className={wrapCls}>
        {children}
      </div>
    );
  }
}
