import React from 'react';
import { SegmentedControlIOS } from 'react-native';
import SegmentedControlProps from './SegmentedControlPropTypes';
import assign from 'object-assign';

export default class SegmentedControl extends React.Component<SegmentedControlProps, any> {
  static defaultProps = {
    tintColor: '#2DB7F5',
    selectedIndex: 0,
  };

  render() {
    const { tintColor, selectedIndex } = this.props;
    const restProps = assign({}, this.props);
    delete restProps.tintColor;
    delete restProps.selectedIndex;

    return (
      <SegmentedControlIOS
        tintColor={tintColor}
        selectedIndex={selectedIndex}
        {...restProps} />
    );
  }
}
