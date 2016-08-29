import * as React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
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
    footer: [],
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

    const btnGroupStyle = footer.length === 2 ? modalStyle.buttnGroupH : modalStyle.buttnGroupV;
    const buttonWrapStyle = footer.length === 2 ? modalStyle.buttnWrapH : modalStyle.buttnWrapV;

    const footerDom = footer.length ? (
      <View style={[btnGroupStyle]}>
      {
        footer.map((button: any, i) => {
          return (
            <View key={i} style={[buttonWrapStyle]}>
              <TouchableOpacity onPress={() => {
                if (button.onPress) {
                  button.onPress();
                }
                this.onClosePress();
              }}>
                <Text style={[modalStyle.buttonText]}>{button.text || `按钮${i}`}</Text>
              </TouchableOpacity>
            </View>
          );
        })
      }
      </View>
    ) : null;

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
                {footer ? <View>{footerDom}</View> : null}
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
