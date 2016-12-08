import React from 'react';
import { SegmentedControlIOS } from 'react-native';
import SegmentedControlProps from './PropsType';
import assign from 'object-assign';

export default class SegmentedControl extends React.Component<SegmentedControlProps, any> {
  static defaultProps = {
    tintColor: '#108ee9',
    selectedIndex: 0,
  };

  render() {
    const { tintColor, selectedIndex, disabled } = this.props;
    const restProps = assign({}, this.props);
    delete restProps.tintColor;
    delete restProps.disabled;
    delete restProps.selectedIndex;

    return (
      <SegmentedControlIOS
        tintColor={tintColor}
        selectedIndex={selectedIndex}
        {...restProps}
        enabled={!disabled}
      />
    );
  }
}
