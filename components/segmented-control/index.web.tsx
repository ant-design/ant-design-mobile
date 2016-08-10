import * as React from 'react';
import classNames from 'classnames';
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
  };

  onClick(e, index, value) {
    const { enabled, onChange, onValueChange } = this.props;
    if (enabled) {
      e.nativeEvent.selectedSegmentIndex = index;
      e.nativeEvent.value = value;
      onChange(e);
      onValueChange(value);
    }
  }

  render() {
    const {
      prefixCls, enabled, selectedIndex, values, className, tintColor,
    } = this.props;
    const wrapCls = classNames({
      [className]: !!className,
      [`${prefixCls}`]: true,
      [className] : className,
    });
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
    return (
      <div className={wrapCls} style={{
        opacity: enabledOpacity,
        borderColor: tintColor,
      }}>
        {items}
      </div>
    );
  }
}
