import * as React from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  DeviceEventEmitter,
} from 'react-native';
import styles from './style/index';
import topView from 'rn-topview';

const WIN_HEIGHT = Dimensions.get('window').height;

export interface DropdownProps {
  children: any;
  maskClosable?: boolean;
}

class Dropdown extends React.Component<DropdownProps, any> {
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
    DeviceEventEmitter.addListener('dropdownHide', () => {
      this.animatedHide();
    });
  }

  componentDidMount() {
    this.state.translateY.setValue(-WIN_HEIGHT);
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
    DeviceEventEmitter.removeAllListeners('dropdownHide');
  }

  onMaskClose = () => {
    if (this.props.maskClosable) {
      this.animatedHide();
    }
  };

  animatedHide() {
    this.state.translateY.setValue(0);
    this.anim = Animated.timing(this.state.translateY, {
      duration: 200,
      toValue: -WIN_HEIGHT,
      delay: 5,
    });
    this.anim.start(() => {
      this.anim = null;
      topView.remove();
    });
  }

  render() {
    return (
      <View style={styles.wrap}>
        <Modal
          animationType={'none'}
          transparent
          visible
          onRequestClose={() => {}}
        >
          <TouchableWithoutFeedback onPress={this.onMaskClose}>
            <View style={styles.mask}/>
          </TouchableWithoutFeedback>
          <Animated.View style={[styles.content, {
            transform: [
              { translateY: this.state.translateY },
            ],
          }]}>
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
      <Dropdown maskClosable={options.maskClosable}>
        {content}
      </Dropdown>
    );
  },
  hide() {
    DeviceEventEmitter.emit('dropdownHide');
  },
};
