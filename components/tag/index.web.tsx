import { PropTypes } from 'react';
import * as React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import splitObject from '../_util/splitObject';
import TagProps from './TagPropsType';

export default class Tag extends React.Component<TagProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    type: PropTypes.oneOf(['action', 'read']),
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    closable: PropTypes.bool,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    afterClose: PropTypes.func,
    selected: PropTypes.bool,
  };

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
    const props = this.props;
    if (props.type === 'read' || props.disabled) {
      return;
    }
    if (props.closable) {
      this.onClose();
    } else {
      const isSelect = this.state.selected;
      this.setState({
        selected: !isSelect,
      }, () => {
        props.onChange(!isSelect);
      });
    }
  }

  onClose = () => {
    const props = this.props;
    props.onClose();
    this.setState({
      closed: true,
    }, () => {
      props.afterClose();
    });
  }

  render() {
    let [{children, className, prefixCls, type, size, disabled, closable}, restProps] = splitObject(
      this.props,
      ['children', 'className', 'prefixCls', 'type', 'size', 'disabled', 'closable']
    );
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
      <div className={wrapCls} {...restProps} onClick={this.onClick}>
        <div className={`${prefixCls}-text`}>{children}</div>
        {close}
      </div>
    );
  }
}
