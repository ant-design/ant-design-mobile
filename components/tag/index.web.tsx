import React from 'react';
import classNames from 'classnames';
import TagProps from './TagPropsType';
import Icon from '../icon';
import getDataAttr from '../_util/getDataAttr';

export default class Tag extends React.Component<TagProps, any> {
  static defaultProps = {
    prefixCls: 'am-tag',
    disabled: false,
    selected: false,
    closable: false,
    small: false,
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

  componentWillReceiveProps(nextProps) {
    if (this.props.selected !== nextProps.selected) {
      this.setState({
        selected: nextProps.selected,
      });
    }
  }

  onClick = () => {
    const { disabled, onChange } = this.props;
    if (disabled) {
      return;
    }
    const isSelect = this.state.selected;
    this.setState({
      selected: !isSelect,
    }, () => {
      if (onChange) {
        onChange(!isSelect);
      }
    });
  }

  onTagClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
    this.setState({
      closed: true,
    }, this.props.afterClose);
  }

  render() {
    const { children, className, prefixCls, disabled, closable, small, style } = this.props;
    const wrapCls = classNames({
      [className as string]: !!className,
      [`${prefixCls}`]: true,
      [`${prefixCls}-small`]: small,
      [`${prefixCls}-normal`]: !this.state.selected && !disabled,
      [`${prefixCls}-active`]: this.state.selected && !disabled,
      [`${prefixCls}-disabled`]: disabled,
    });

    return !this.state.closed ? (
      <div {...getDataAttr(this.props)} className={wrapCls} onClick={this.onClick} style={style}>
        <div className={`${prefixCls}-text`}>{children}</div>
        { closable && !disabled && !small && <div
          className={`${prefixCls}-close`}
          onClick={this.onTagClose}
        >
          <Icon type="cross-circle" />
        </div> }
      </div>
    ) : null;
  }
}
