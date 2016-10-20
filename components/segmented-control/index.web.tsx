import React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import SegmentedControlProps from './SegmentedControlPropTypes';
import SegmentItem from './Item.web';

export default class SegmentedControl extends React.Component<SegmentedControlProps, any> {
  static defaultProps = {
    prefixCls: 'am-segment',
    selectedIndex: 0,
    enabled: true,
    values: [],
    onChange() {},
    onValueChange() {},
    tintColor: '#108ee9',
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
      [className as string]: !!className,
      [`${prefixCls}`]: true,
    });
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
