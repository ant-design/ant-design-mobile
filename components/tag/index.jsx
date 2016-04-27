import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Modal extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['action', 'read']),
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    closable: PropTypes.bool,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    afterClose: PropTypes.func,
  }

  static defaultProps = {
    prefixCls: 'am-tag',
    type: 'read',
    disabled: false,
    size: 'large',
    closable: false,
    onChange() {},
    onClose() {},
    afterClose() {},
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      closed: false,
    };
  }

  _handleClick = () => {
    const props = this.props;
    if (props.type === 'read' || props.disabled) return;
    const _selected = this.state.selected;
    this.setState({
      selected: !_selected,
    }, () => {
      props.onChange(!_selected);
    });
  }

  _handleClose = (e) => {
    const props = this.props;
    props.onClose(e);
    this.setState({
      closed: true,
    }, () => {
      props.afterClose();
    });
  }

  render() {
    const { children, className, prefixCls, type, size, disabled, closable, ...others } = this.props;
    const selected = this.state.selected;

    const wrapCls = classNames({
      [className]: className,
      [prefixCls]: true,
      [`${prefixCls}-normal`]: !selected,
      [`${prefixCls}-active`]: selected,
      [`${prefixCls}-read`]: type === 'read',
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-size-small`]: size === 'small',
      [`${prefixCls}-size-large`]: size === 'large',
    });

    const close = closable && selected && size === 'large' ? <div className={`${prefixCls}-close`} onClick={this._handleClose} /> : null;

    return this.state.closed ? null : (
      <div className={wrapCls} {...others} onClick={this._handleClick}>
        <div className={`${prefixCls}-text`}>{children}</div>
        {close}
      </div>
    );
  }
}
