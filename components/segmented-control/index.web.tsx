import * as React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import SegmentedControlProps from './SegmentedControlPropTypes';

export default class SegmentedControl extends React.Component<SegmentedControlProps, any> {
  static defaultProps = {
    prefixCls: 'am-segment',
    selectedIndex: 0,
    enabled: true,
    values: [],
    onChange() {},
    onValueChange() {},
    tintColor: '#2DB7F5',
    style: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex,
    };
  }

  onClick(e, index, value) {
    const { enabled, onChange, onValueChange } = this.props;
    if (enabled) {
      e.nativeEvent.selectedSegmentIndex = index;
      e.nativeEvent.value = value;
      onChange(e);
      onValueChange(value);
      this.setState({
        selectedIndex: index,
      });
    }
  }

  render() {
    const {
      prefixCls, style, enabled, values, className, tintColor,
    } = this.props;
    const wrapCls = classNames({
      [className]: !!className,
      [`${prefixCls}`]: true,
      [className] : className,
    });
    const selectedIndex = this.state.selectedIndex;
    const items = values.map((value, idx) => {
      const itemCls = classNames({
        [`${prefixCls}-item`]: true,
        [`${prefixCls}-item-selected`]: idx === selectedIndex,
      });
      return (
        <div
          className={itemCls}
          key={idx}
          onClick={(e) => this.onClick(e, idx, value)}
          style={{
            color: idx === selectedIndex ? '#fff' : tintColor,
            backgroundColor: idx === selectedIndex ? tintColor : '#fff',
            borderColor: tintColor,
          }}
        >
          {value}
        </div>
      );
    });

    const enabledOpacity = enabled ? 1 : 0.5;
    const segmentedStyle = assign({}, style, {
      opacity: enabledOpacity,
      borderColor: tintColor,
    });
    return (
      <div className={wrapCls} style={segmentedStyle}>
        {items}
      </div>
    );
  }
}
