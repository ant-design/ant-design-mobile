import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
import getDataAttr from '../_util/getDataAttr';
import Icon from '../icon';
import { TagPropsType } from './PropsType';

export interface TagProps extends TagPropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
}

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

  constructor(props: TagProps) {
    super(props);
    this.state = {
      selected: props.selected,
      closed: false,
    };
  }

  componentWillReceiveProps(nextProps: TagProps) {
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
    this.setState(
      {
        selected: !isSelect,
      },
      () => {
        if (onChange) {
          onChange(!isSelect);
        }
      },
    );
  }

  onTagClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
    this.setState(
      {
        closed: true,
      },
      this.props.afterClose,
    );
  }

  render() {
    const {
      children,
      className,
      prefixCls,
      disabled,
      closable,
      small,
      style,
    } = this.props;
    const wrapCls = classnames(className, prefixCls, {
      [`${prefixCls}-normal`]:
        !disabled && (!this.state.selected || small || closable),
      [`${prefixCls}-small`]: small,
      [`${prefixCls}-active`]:
        this.state.selected && !disabled && !small && !closable,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-closable`]: closable,
    });

    const closableDom =
      closable && !disabled && !small ? (
        <TouchFeedback activeClassName={`${prefixCls}-close-active`}>
          <div
            className={`${prefixCls}-close`}
            role="button"
            onClick={this.onTagClose}
            aria-label="remove tag"
          >
            <Icon type="cross-circle" size="xs" aria-hidden="true" />
          </div>
        </TouchFeedback>
      ) : null;

    return !this.state.closed ? (
      <div
        {...getDataAttr(this.props)}
        className={wrapCls}
        onClick={this.onClick}
        style={style}
      >
        <div className={`${prefixCls}-text`}>{children}</div>
        {closableDom}
      </div>
    ) : null;
  }
}
