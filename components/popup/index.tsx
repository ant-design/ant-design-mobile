import * as React from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  Platform,
  Dimensions,
  DeviceEventEmitter,
} from 'react-native';
import styles from './style/index';
import topView from 'rn-topview';

const WIN_HEIGHT = Dimensions.get('window').height;

export interface PopupProps {
  animationType?: string;
  maskClosable?: boolean;
}

class Popup extends React.Component<PopupProps, any> {
  static defaultProps = {
    maskClosable: true,
  };

  timer: number;

  anim: any;

  constructor(props) {
    super(props);
    this.state = {
      translateY: new Animated.Value(0),
    };
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('PopupHide', () => {
      this.animatedHide();
    });
  }

  componentDidMount() {
    this.state.translateY.setValue(this.props.animationType === 'slide-up' ? WIN_HEIGHT : -WIN_HEIGHT);
    this.anim = Animated.timing(this.state.translateY, {
      duration: 200,
      toValue: 0,
      delay: 5,
    });
    this.anim.start(() => {
      this.anim = null;
    });
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.anim) {
      this.anim.stop();
      this.anim = null;
    }
    DeviceEventEmitter.removeAllListeners('PopupHide');
  }

  onMaskClose = () => {
    if (this.props.maskClosable) {
      this.animatedHide();
    }
  };

  animatedHide = () => {
    this.state.translateY.setValue(0);
    this.anim = Animated.timing(this.state.translateY, {
      duration: 200,
      toValue: this.props.animationType === 'slide-up' ? WIN_HEIGHT : -WIN_HEIGHT,
      delay: 5,
    });
    this.anim.start(() => {
      this.anim = null;
      topView.remove();
    });
  };

  render() {
    return (
      <View style={styles.wrap}>
        <Modal
          animationType={'none'}
          transparent
          visible
          onRequestClose={Platform.OS === 'android' ? this.animatedHide : undefined}
        >
          <TouchableWithoutFeedback onPress={this.onMaskClose}>
            <View style={styles.mask}/>
          </TouchableWithoutFeedback>
          <Animated.View style={[
            styles.content,
            this.props.animationType === 'slide-up' ? { bottom: 0 } : { top: 0 },
            {
              transform: [
                { translateY: this.state.translateY },
              ],
            },
          ]}>
            {this.props.children}
          </Animated.View>
        </Modal>
      </View>
    );
  }
}

export default {
  show(content, options) {
    topView.set(
      <Popup maskClosable={options.maskClosable} animationType={options.animationType}>
        {content}
      </Popup>
    );
  },
  hide() {
    DeviceEventEmitter.emit('PopupHide');
  },
};
