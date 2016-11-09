import React from 'react';
import { View, Text, TouchableWithoutFeedback, Platform } from 'react-native';
import TagStyle from './style/index';
import TagProps from './PropsType';

export default class Modal extends React.Component<TagProps, any> {
  static defaultProps = {
    disabled: false,
    small: false,
    selected: false,
    closable: false,
    onClose() {},
    afterClose() {},
    onChange() {},
  };

  closeDom: any;

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
    const isSelect: boolean = this.state.selected;
    this.setState({
      selected: !isSelect,
    }, () => {
      if (onChange) {
        onChange(!isSelect);
      }
    });
  }

  onTagClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
    this.setState({
      closed: true,
    }, this.props.afterClose);
  }

  onPressIn = () => {
    this.closeDom.setNativeProps({
      style: [TagStyle.close, Platform.OS === 'ios' ? TagStyle.closeIOS : TagStyle.closeAndroid, {
        backgroundColor: '#888',
      }],
    });
  }

  onPressOut = () => {
    this.closeDom.setNativeProps({
      style: [TagStyle.close, Platform.OS === 'ios' ? TagStyle.closeIOS : TagStyle.closeAndroid],
    });
  }

  render() {
    const {children, disabled, small, closable, style} = this.props;
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

    const sizeWrapStyle = small ? TagStyle.wrapSmall : {};
    const sizeTextStyle = small ? TagStyle.textSmall : {};

    return !this.state.closed ? (
      <View style={[ TagStyle.tag, style ]}>
        <TouchableWithoutFeedback onPress={this.onClick}>
          <View style={[TagStyle.wrap, sizeWrapStyle, wrapStyle]}>
            <Text style={[TagStyle.text, sizeTextStyle, textStyle]}>{children} </Text>
          </View>
        </TouchableWithoutFeedback>
        { closable && !small && !disabled && <TouchableWithoutFeedback
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          onPress={this.onTagClose}
        >
          <View
            ref={component => this.closeDom = component}
            style={[TagStyle.close, Platform.OS === 'ios' ? TagStyle.closeIOS : TagStyle.closeAndroid]}>
            <Text style={[TagStyle.closeText, Platform.OS === 'android' ? TagStyle.closeTransform : {}]}>×</Text>
          </View>
        </TouchableWithoutFeedback> }
      </View>
    ) : null;
  }
}
