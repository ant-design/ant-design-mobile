import React from 'react';
import {
  View, Text, Modal,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import modalStyle from './style/index';
import ModalPropsType from './PropsType';
import RCModal from 'rc-dialog/lib/Modal';

class AntmModal extends React.Component<ModalPropsType, any> {
  static defaultProps = {
    visible: false,
    closable: false,
    maskClosable: false,
    style: {},
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
      transparent, visible, onClose,
    } = this.props;

    const btnGroupStyle = footer && footer.length === 2 ? modalStyle.buttonGroupH : modalStyle.buttonGroupV;
    const buttonWrapStyle = footer && footer.length === 2 ? modalStyle.buttonWrapH : modalStyle.buttonWrapV;

    const footerDom = footer && footer.length ? (
      <View style={[btnGroupStyle, modalStyle.footerRadius]}>
        {
          footer.map((button: any, i) => {
            const noneBorder = footer && footer.length === 2 && i === 1 ? { borderRightWidth: 0} : {};
            return (
              <TouchableHighlight key={i} style={{flex: 1}} underlayColor="#ddd" onPress={() => {
                if (button.onPress) {
                  button.onPress();
                }
                if (onClose) {
                  onClose();
                }
              }}>
                <View style={[buttonWrapStyle, noneBorder]}>
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
          <View>
            {title ? <Text style={[modalStyle.header]}>{title}</Text> : null}
            <View style={modalStyle.body}>{children}</View>
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
