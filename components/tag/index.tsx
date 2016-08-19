import * as React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import TagStyle from './style/index';
import TagProps from './TagPropsType';

export default class Modal extends React.Component<TagProps, any> {
  static defaultProps = {
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
    const isSelect: boolean = this.state.selected;
    this.setState({
      selected: !isSelect,
    }, () => {
      onChange(!isSelect);
    });
  }

  render() {
    const {children, disabled, style} = this.props;
    const selected = this.state.selected;

    let wrapStyle;
    let textStyle;
    if (!selected && !disabled) {
      wrapStyle = TagStyle.normalWrap;
      textStyle = TagStyle.normalText;
    }
    if (selected && !disabled) {
      wrapStyle = TagStyle.activeWrap;
      textStyle = TagStyle.activeText;
    }
    if (disabled) {
      wrapStyle = TagStyle.disabledWrap;
      textStyle = TagStyle.disabledText;
    }

    return (
      <View style={[ TagStyle.tag, style ]}>
        <TouchableWithoutFeedback onPress={this.onClick}>
          <View style={[TagStyle.wrap, wrapStyle]}>
            <Text style={[TagStyle.text, textStyle]}>{children} </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
