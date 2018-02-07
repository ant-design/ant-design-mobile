import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';
import normalizeColor from 'react-native/Libraries/StyleSheet/normalizeColor';
import setNormalizedColorAlpha from 'react-native/Libraries/StyleSheet/setNormalizedColorAlpha';
import { SegmentedControlPropsType } from './PropsType';
import AndroidStyle, { ISegmentControlStyle } from './style/index.native';

export interface SegmentControlNativeProps extends SegmentedControlPropsType {
  styles?: ISegmentControlStyle;
  style?: StyleProp<ViewStyle>;
}

const AndroidStyles = StyleSheet.create<any>(AndroidStyle);

export default class SegmentedControl extends React.Component<
  SegmentControlNativeProps,
  any
> {
  static defaultProps = {
    selectedIndex: 0,
    disabled: false,
    values: [],
    onChange() {},
    onValueChange() {},
    tintColor: '#108ee9',
    style: {},
    styles: AndroidStyles,
  };

  constructor(props: SegmentControlNativeProps) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex,
    };
  }

  componentWillReceiveProps(nextProps: SegmentControlNativeProps) {
    if (nextProps.selectedIndex !== this.props.selectedIndex) {
      this.setState({
        selectedIndex: nextProps.selectedIndex,
      });
    }
  }

  onPress(e: any, index: number, value: string) {
    const { disabled, onChange, onValueChange } = this.props;
    if (!disabled) {
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
    const { style, disabled, values = [], tintColor } = this.props;
    const styles = this.props.styles!;

    const selectedIndex = this.state.selectedIndex;
    const items = values.map((value, idx) => {
      let itemRadius: any = null;
      if (idx === 0) {
        itemRadius = styles.itemLeftRadius;
      } else if (idx === values.length - 1) {
        itemRadius = styles.itemRightRadius;
      }

      const itemStyle = [
        styles.item,
        itemRadius,
        {
          backgroundColor: idx === selectedIndex ? tintColor : 'transparent',
          borderColor: tintColor,
        },
      ];

      const underlayColor =
        idx === selectedIndex
          ? tintColor
          : setNormalizedColorAlpha(normalizeColor(tintColor), 0.3);

      return (
        <TouchableHighlight
          disabled={disabled}
          key={idx}
          onPress={(e?: any) => this.onPress(e, idx, value)}
          underlayColor={underlayColor}
          style={itemStyle}
          activeOpacity={1}
        >
          <Text
            // tslint:disable-next-line:jsx-no-multiline-js
            style={[
              styles.itemText,
              { color: idx === selectedIndex ? '#fff' : tintColor },
            ]}
          >
            {value}
          </Text>
        </TouchableHighlight>
      );
    });

    const enabledOpacity = !disabled ? 1 : 0.5;
    const segmentedStyle = {
      opacity: enabledOpacity,
      borderColor: tintColor,
    };

    return <View style={[styles.segment, segmentedStyle, style]}>{items}</View>;
  }
}
