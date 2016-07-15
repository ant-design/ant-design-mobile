import { PropTypes } from 'react';
import * as React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import splitObject from '../_util/splitObject';
import modalStyle from './style/index';
import modalProps from './modalPropsType';

class AntmModal extends React.Component<modalProps, any> {
  static propTypes = {
    title: PropTypes.string,
    visible: PropTypes.bool,
    closable: PropTypes.bool,
    maskClosable: PropTypes.bool,
    footer: PropTypes.node,
    onClose: PropTypes.func,
    onShow: PropTypes.func,
    animated: PropTypes.bool,
    transparent: PropTypes.bool,
    style: PropTypes.object,
  };

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

  onRequestClose(visible) {
    this.setState({
      visible,
    });
  }

  onClosePress = () => {
    this.props.onClose();
    this.setState({
      visible: false,
    });
  }

  render() {
    let [{title, visible, closable, maskClosable, footer, animated, onClose, onShow, transparent, children, style}, restProps] = splitObject(
      this.props,
      ['title', 'visible', 'closable', 'maskClosable', 'footer', 'animated', 'onClose', 'onShow', 'transparent', 'children', 'style']
    );

    let showModal = this.state.visible;
    const animationType = animated ? (transparent ? 'fade' : 'slide') : 'none';
    const innerContainerTransparentStyle = transparent ? {backgroundColor: 'white'} : {backgroundColor: 'transparent'};

    const closeDom = <Text>×</Text>;

    return (
      <Modal
        animationType={animationType}
        onRequestClose={() => {this.onRequestClose(false);}}
        onShow={onShow}
        transparent={transparent}
        visible={showModal}
      >
        { transparent ? 
            <View style={[modalStyle.container]}>
              {maskClosable ? <TouchableWithoutFeedback onPress={this.onClosePress}>
                <View style={[modalStyle.maskClosable]}></View>
              </TouchableWithoutFeedback> : null}
              <View style={[modalStyle.innerContainer, innerContainerTransparentStyle, style]}>
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
           : <View style={style}>
            {children}
          </View>
        }
      </Modal>
    );
  }
}

export default AntmModal;
