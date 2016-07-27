import * as React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import TagProps from './TagPropsType';

export default class Tag extends React.Component<TagProps, any> {
  static defaultProps = {
    prefixCls: 'am-tag',
    type: 'read',
    disabled: false,
    size: 'large',
    closable: false,
    selected: false,
    onChange() {},
    onClose() {},
    afterClose() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
      closed: false,
    };
  }

  onClick = () => {
    const { type, disabled, closable, onChange } = this.props;
    if (type === 'read' || disabled) {
      return;
    }
    if (closable) {
      this.onClose();
    } else {
      const isSelect = this.state.selected;
      this.setState({
        selected: !isSelect,
      }, () => {
        onChange(!isSelect);
      });
    }
  }

  onClose = () => {
    const { onClose, afterClose } = this.props;
    onClose();
    this.setState({
      closed: true,
    }, afterClose);
  }

  render() {
    const {
      children, className, prefixCls, type, size, disabled, closable,
    } = this.props;
    const selected = this.state.selected;
    const wrapCls = classNames({
      [className]: !!className,
      [prefixCls]: true,
      [`${prefixCls}-normal`]: !selected,
      [`${prefixCls}-active`]: (selected || closable) && !disabled && type !== 'read',
      [`${prefixCls}-read`]: type === 'read',
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-size-small`]: size === 'small',
      [`${prefixCls}-size-large`]: size === 'large',
    });

    const close = closable && !disabled && type !== 'read' && size === 'large' ? (
      <div className={`${prefixCls}-close`}>
        <Icon type="cross" />
      </div>
    ) : null;

    return this.state.closed ? null : (
      <div className={wrapCls} onClick={this.onClick}>
        <div className={`${prefixCls}-text`}>{children}</div>
        {close}
      </div>
    );
  }
}
