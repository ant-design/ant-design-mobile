import * as React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import modalStyle from './style/index';
import ModalPropsType from './ModalPropsType';

class AntmModal extends React.Component<ModalPropsType, any> {
  static defaultProps = {
    visible: false,
    closable: false,
    maskClosable: false,
    transparent: false,
    animated: true,
    style: {},
    onClose() {},
    onShow() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({
        visible: nextProps.visible,
      });
    }
  }

  onRequestClose = () => {
    this.setState({
      visible: false,
    });
  };

  onClosePress = () => {
    this.props.onClose();
    this.setState({
      visible: false,
    });
  }

  render() {
    const {
      title, closable, maskClosable, footer, animated, onShow, transparent, children, style,
      onRequestClose,
    } = this.props;

    let showModal = this.state.visible;
    const animationType: 'fade' | 'slide' | 'none' = animated ? (transparent ? 'fade' : 'slide') : 'none';
    const innerStyle = transparent ? {backgroundColor: 'white'} : {backgroundColor: 'transparent'};

    return (
      <Modal
        animationType={animationType}
        onRequestClose={onRequestClose || this.onRequestClose}
        onShow={onShow}
        transparent={transparent}
        visible={showModal}
      >
        { transparent ? (
            <View style={[modalStyle.container]}>
              {maskClosable ? <TouchableWithoutFeedback onPress={this.onClosePress}>
                <View style={[modalStyle.maskClosable]}></View>
              </TouchableWithoutFeedback> : null}
              <View style={[modalStyle.innerContainer, innerStyle, style]}>
                {title ? <Text style={[modalStyle.header]}>{title}</Text> : null}
                <View style={modalStyle.body}>{children}</View>
                {footer ? <View>{footer}</View> : null}
                {closable ? <TouchableWithoutFeedback onPress={this.onClosePress}>
                  <View style={[modalStyle.closeWrap]}>
                    <Text style={[modalStyle.close]}>×</Text>
                  </View>
                </TouchableWithoutFeedback> : null}
              </View>
            </View>
          ) : (
            <View style={style}>
              {children}
            </View>
          )
        }
      </Modal>
    );
  }
}

export default AntmModal;
