import React from 'react';
import { View, Text, TouchableWithoutFeedback, Platform } from 'react-native';
import TagStyle from './style/index';
import TagProps from './PropsType';

export default class Tag extends React.Component<TagProps, any> {
  static defaultProps = {
    disabled: false,
    small: false,
    selected: false,
    closable: false,
    onClose() {},
    afterClose() {},
    onChange() {},
    styles: TagStyle,
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
    const styles = this.props.styles;
    this.closeDom.setNativeProps({
      style: [styles.close, Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid, {
        backgroundColor: '#888',
      }],
    });
  }

  onPressOut = () => {
    const styles = this.props.styles;
    this.closeDom.setNativeProps({
      style: [styles.close, Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid],
    });
  }

  render() {
    const {children, disabled, small, closable, styles, style} = this.props;
    const selected = this.state.selected;

    let wrapStyle;
    let textStyle;
    if (!selected && !disabled) {
      wrapStyle = styles.normalWrap;
      textStyle = styles.normalText;
    }
    if (selected && !disabled) {
      wrapStyle = styles.activeWrap;
      textStyle = styles.activeText;
    }
    if (disabled) {
      wrapStyle = styles.disabledWrap;
      textStyle = styles.disabledText;
    }

    const sizeWrapStyle = small ? styles.wrapSmall : {};
    const sizeTextStyle = small ? styles.textSmall : {};

    const closableDom = closable && !small && !disabled ? (
      <TouchableWithoutFeedback
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onPress={this.onTagClose}
      >
        <View
          ref={component => this.closeDom = component}
          style={[styles.close, Platform.OS === 'ios' ? styles.closeIOS : styles.closeAndroid]}
        >
          <Text style={[styles.closeText, Platform.OS === 'android' ? styles.closeTransform : {}]}>×</Text>
        </View>
      </TouchableWithoutFeedback>
    ) : null;

    return !this.state.closed ? (
      <View style={[ styles.tag, style ]}>
        <TouchableWithoutFeedback onPress={this.onClick}>
          <View style={[styles.wrap, sizeWrapStyle, wrapStyle]}>
            <Text style={[styles.text, sizeTextStyle, textStyle]}>{children} </Text>
          </View>
        </TouchableWithoutFeedback>
        {closableDom}
      </View>
    ) : null;
  }
}
