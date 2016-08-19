import * as React from 'react';
import classNames from 'classnames';
import TagProps from './TagPropsType';

export default class Tag extends React.Component<TagProps, any> {
  static defaultProps = {
    prefixCls: 'am-tag',
    disabled: false,
    selected: false,
    onChange() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
      closed: false,
    };
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
      onChange(!isSelect);
    });
  }

  render() {
    const { children, className, prefixCls, disabled } = this.props;
    const wrapCls = classNames({
      [className]: !!className,
      [prefixCls]: true,
      [`${prefixCls}-normal`]: !this.state.selected && !disabled,
      [`${prefixCls}-active`]: this.state.selected && !disabled,
      [`${prefixCls}-disabled`]: disabled,
    });

    return (
      <div className={wrapCls} onClick={this.onClick}>
        <div className={`${prefixCls}-text`}>{children}</div>
      </div>
    );
  }
}
