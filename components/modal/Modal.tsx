import React from 'react';
import {
  View, Text, Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
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

    const btnGroupStyle = footer && footer.length === 2 ? modalStyle.buttnGroupH : modalStyle.buttnGroupV;
    const buttonWrapStyle = footer && footer.length === 2 ? modalStyle.buttnWrapH : modalStyle.buttnWrapV;

    const footerDom = footer && footer.length ? (
      <View style={[btnGroupStyle]}>
        {
          footer.map((button: any, i) => {
            return (
              <View key={i} style={[buttonWrapStyle]}>
                <TouchableOpacity onPress={() => {
                if (button.onPress) {
                  button.onPress();
                }
                if (onClose) {
                  onClose();
                }
              }}>
                  <Text style={[modalStyle.buttonText]}>{button.text || `按钮${i}`}</Text>
                </TouchableOpacity>
              </View>
            );
          })
        }
      </View>
    ) : null;

    if (transparent) {
      return (
        <RCModal
          onClose={this.onMaskClose}
          wrapStyle={transparent ? modalStyle.container : undefined}
          style={[modalStyle.innerContainer, style]}
          visible={visible}
        >
          <View>
            {title ? <Text style={[modalStyle.header]}>{title}</Text> : null}
            <View style={modalStyle.body}>{children}</View>
            {footer ? <View>{footerDom}</View> : null}
            {closable ? <TouchableWithoutFeedback onPress={onClose}>
              <View style={[modalStyle.closeWrap]}>
                <Text style={[modalStyle.close]}>×</Text>
              </View>
            </TouchableWithoutFeedback> : null}
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
