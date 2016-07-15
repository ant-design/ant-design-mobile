import { PropTypes } from 'react';
import * as React from 'react';
import splitObject from '../_util/splitObject';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import TagStyle from './style/index';
import TagProps from './TagPropsType';

export default class Modal extends React.Component<TagProps, any> {
  static propTypes = {
    type: PropTypes.oneOf(['action', 'read']),
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    closable: PropTypes.bool,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    afterClose: PropTypes.func,
    selected: PropTypes.bool,
  };

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
    const props = this.props;
    if (props.type === 'read' || props.disabled) {
      return;
    }
    if (props.closable) {
      this.onClose();
    } else {
      const _selected = this.state.selected;
      this.setState({
        selected: !_selected,
      }, () => {
        props.onChange(!_selected);
      });
    }
  }

  onClose = () => {
    const props = this.props;
    props.onClose();
    this.setState({
      closed: true,
    }, () => {
      props.afterClose();
    });
  }

  render() {
    let [{children, className, prefixCls, type, size, disabled, closable, style}, restProps] = splitObject(
      this.props,
      ['children', 'className', 'prefixCls', 'type', 'size', 'disabled', 'closable', 'style']
    );
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
      <View style={[ TagStyle.tag, style ]} {...restProps}>
        <TouchableWithoutFeedback onPress={this.onClick}>
          <View style={[TagStyle.wrap, wrapStyles]}>
            <Text style={[textStyles]}>{children} </Text>
            {closeDom}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
