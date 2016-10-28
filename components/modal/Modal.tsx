import React from 'react';
import {
  View, Text, Modal,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import modalStyle from './style/index';
import ModalPropsType from './ModalPropsType';
import RCModal from 'rc-dialog/lib/Modal';

class AntmModal extends React.Component<ModalPropsType, any> {
  static defaultProps = {
    visible: false,
    closable: false,
    maskClosable: false,
    style: {},
    bodyStyle: {},
    onClose() {
    },
    footer: [],
    transparent: false,
  };

  onMaskClose = () => {
    if (this.props.maskClosable && this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    const {
      title, closable, footer, children, style,
      transparent, visible, onClose, bodyStyle,
    } = this.props;

    const btnGroupStyle = footer && footer.length === 2 ? modalStyle.buttnGroupH : modalStyle.buttnGroupV;
    const buttonWrapStyle = footer && footer.length === 2 ? modalStyle.buttnWrapH : modalStyle.buttnWrapV;

    const footerDom = footer && footer.length ? (
      <View style={[btnGroupStyle, modalStyle.footerRadius]}>
        {
          footer.map((button: any, i) => {
            return (
              <TouchableHighlight key={i} style={{flex: 1}} underlayColor="#ddd" onPress={() => {
                if (button.onPress) {
                  button.onPress();
                }
                if (onClose) {
                  onClose();
                }
              }}>
                <View style={[buttonWrapStyle]}>
                  <Text style={[modalStyle.buttonText]}>{button.text || `按钮${i}`}</Text>
                </View>
              </TouchableHighlight>
            );
          })
        }
      </View>
    ) : null;

    if (transparent) {
      return (
        <RCModal
          onClose={this.onMaskClose}
          animationType="fade"
          wrapStyle={transparent ? modalStyle.container : undefined}
          style={[modalStyle.innerContainer, style]}
          visible={visible}
        >
          <View style={{flex: 1}}>
            {title ? <Text style={[modalStyle.header]}>{title}</Text> : null}
            <View style={[modalStyle.body, bodyStyle]}>{children}</View>
            {footer ? <View>{footerDom}</View> : null}
            {closable ? <View style={[modalStyle.closeWrap]}>
              <TouchableWithoutFeedback onPress={onClose}>
                <View>
                  <Text style={[modalStyle.close]}>×</Text>
                </View>
              </TouchableWithoutFeedback>
            </View> : null}
          </View>
        </RCModal>
      );
    }
    return (
      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={this.onMaskClose}
      >
        <View style={style}>
          {children}
        </View>
      </Modal>
    );
  }
}

export default AntmModal;
