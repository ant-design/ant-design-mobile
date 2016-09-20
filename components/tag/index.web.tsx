import React from 'react';
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
      onChange(!isSelect);
    });
  }

  render() {
    const { children, className, prefixCls, disabled, style } = this.props;
    const wrapCls = classNames({
      [className]: !!className,
      [prefixCls]: true,
      [`${prefixCls}-normal`]: !this.state.selected && !disabled,
      [`${prefixCls}-active`]: this.state.selected && !disabled,
      [`${prefixCls}-disabled`]: disabled,
    });

    return (
      <div className={wrapCls} onClick={this.onClick} style={style}>
        <div className={`${prefixCls}-text`}>{children}</div>
      </div>
    );
  }
}
