import React from 'react';
import classNames from 'classnames';
import SegmentedControlProps from './PropsType';
import SegmentItem from './SegmentItem.web';

export default class SegmentedControl extends React.Component<SegmentedControlProps, any> {
  static defaultProps = {
    prefixCls: 'am-segment',
    selectedIndex: 0,
    enabled: true,
    values: [],
    onChange() {},
    onValueChange() {},
    style: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedIndex !== this.state.selectedIndex) {
      this.setState({
        selectedIndex: nextProps.selectedIndex,
      });
    }
  }

  onClick(e, index, value) {
    const { enabled, onChange, onValueChange } = this.props;
    if (enabled && this.state.selectedIndex !== index) {
      e.nativeEvent.selectedSegmentIndex = index;
      e.nativeEvent.value = value;
      if (onChange) {
        onChange(e);
      }
      if (onValueChange) {
        onValueChange(value);
      }
      this.setState({
        selectedIndex: index,
      });
    }
  }

  render() {
    const {
      prefixCls, style, enabled, values = [], className, tintColor,
    } = this.props;
    const selectedIndex = this.state.selectedIndex;
    const items = values.map((value, idx) => {
      return (
        <SegmentItem
          key={idx}
          prefixCls={prefixCls}
          label={value}
          enabled={enabled}
          tintColor={tintColor}
          selected={idx === selectedIndex}
          onClick={(e) => this.onClick(e, idx, value)}
        />
      );
    });

    const wrapCls = classNames({
      [className as string]: !!className,
      [`${prefixCls}`]: true,
      [`${prefixCls}-disabled`]: !enabled,
    });

    return (
      <div className={wrapCls} style={style}>
        {items}
      </div>
    );
  }
}
