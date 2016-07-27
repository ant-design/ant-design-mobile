import * as React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import TagStyle from './style/index';
import TagProps from './TagPropsType';

export default class Modal extends React.Component<TagProps, any> {
  static defaultProps = {
    type: 'read',
    disabled: false,
    size: 'large',
    closable: false,
    selected: false,
    onChange() {},
    onClose() {},
    afterClose() {},
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected,
      closed: false,
    };
  }

  onClick = () => {
    const { type, disabled, closable, onChange } = this.props;
    if (type === 'read' || disabled) {
      return;
    }
    if (closable) {
      this.onClose();
    } else {
      const isSelect: boolean = this.state.selected;
      this.setState({
        selected: !isSelect,
      }, () => {
        onChange(!isSelect);
      });
    }
  }

  onClose = () => {
    const { onClose, afterClose } = this.props;
    onClose();
    this.setState({
      closed: true,
    }, afterClose);
  }

  render() {
    const {children, type, size, disabled, closable, style} = this.props;

    const selected = this.state.selected;

    const wrapStyles = [TagStyle[`${size}Wrap`]];
    const textStyles = [TagStyle[`${size}Text`]];
    if (!selected) {
      wrapStyles.push(TagStyle.normalWrap);
      textStyles.push(TagStyle.normalText);
    }
    if ((selected || closable) && !disabled && type !== 'read') {
      wrapStyles.push(TagStyle.activeWrap);
      textStyles.push(TagStyle.activeText);
    }
    if (type === 'read') {
      wrapStyles.push(TagStyle.readWrap);
      textStyles.push(TagStyle.readText);
    }
    if (disabled) {
      wrapStyles.push(TagStyle.disabledWrap);
      textStyles.push(TagStyle.disabledText);
    }

    const closeDom = closable && !disabled && type !== 'read' && size === 'large' ? (
      <View style={[TagStyle.closeDom]}>
        {/* https://github.com/facebook/react-native/issues/3198 */}
        <View style={[TagStyle.fixAndroid]}></View>
        <View style={[TagStyle.closeWrap]}>
          <Text style={[TagStyle.closeX]}>×</Text>
        </View>
      </View>
    ) : null;

    return this.state.closed ? null : (
      <View style={[ TagStyle.tag, style ]}>
        <TouchableWithoutFeedback onPress={this.onClick}>
          <View style={[TagStyle.wrap, wrapStyles]}>
            <Text style={textStyles}>{children} </Text>
            {closeDom}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
