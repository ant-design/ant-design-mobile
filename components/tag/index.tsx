import { PropTypes } from 'react';
import * as React from 'react';
import splitObject from '../_util/splitObject';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import TagStyle from './style/index';

export default class Modal extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['action', 'read']),
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    closable: PropTypes.bool,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    afterClose: PropTypes.func,
    selected: PropTypes.bool,
  }

  static defaultProps = {
    type: 'read',
    disabled: false,
    size: 'large',
    closable: false,
    selected: false,
    onChange() {},
    onClose() {},
    afterClose() {},
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected,
      closed: false,
    };
  }

  onClick = () => {
    console.log('clicked')
    const props = this.props;
    if (props.type === 'read' || props.disabled) return;
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

  onClose = (e) => {
    const props = this.props;
    props.onClose(e);
    this.setState({
      closed: true,
    }, () => {
      props.afterClose();
    });
  }

  render() {
    let [{children, className, prefixCls, type, size, disabled, closable, style}, restProps] = splitObject(this.props,
      ['children', 'className','prefixCls', 'type','size', 'disabled','closable', 'style']);
    const selected = this.state.selected;

    // const wrapCls = classNames({
    //   [className]: !!className,
    //   [prefixCls]: true,
    //   [`${prefixCls}-normal`]: !selected,
    //   [`${prefixCls}-active`]: (selected || closable) && !disabled && type !== 'read',
    //   [`${prefixCls}-read`]: type === 'read',
    //   [`${prefixCls}-disabled`]: disabled,
    //   [`${prefixCls}-size-small`]: size === 'small',
    //   [`${prefixCls}-size-large`]: size === 'large',
    // });

    const styles = [TagStyle[size]];
    if (!selected) {
      styles.push(TagStyle.normal);
    }
    if ((selected || closable) && !disabled && type !== 'read') {
      styles.push(TagStyle.active);
    }
    if (type === 'read') {
      styles.push(TagStyle.read);
    }
    if (disabled) {
      styles.push(TagStyle.disabled);
    }

    const closeDom = closable && !disabled && type !== 'read' && size === 'large' ? (
      <Text style={TagStyle.close}>
        X
      </Text>
    ) : null;

    const contentDom = React.isValidElement(children) ? (
      <View style={{ flex: 1 }}>{children}</View>
    ) : (
      <Text style={TagStyle.text}>{children}</Text>
    );

    return this.state.closed ? null : (
      <TouchableWithoutFeedback onPress={this.onClick}>
        <View style={[ TagStyle.tag, styles, style ]} {...restProps}>
          {contentDom}
          {closeDom}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
