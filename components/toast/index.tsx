import * as React from 'react';
import {
  View,
  Modal,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import topView from 'rn-topview';
import styles from './style/';

export interface ToastProps {
  content: string;
  duration?: number;
  onClose?: () => void;
  type?: string;
}

class ToastContainer extends React.Component<ToastProps, any> {
  static defaultProps = {
    duration: 3,
    onClose() {},
  };

  timer: number;

  constructor(props) {
    super(props);
    this.timer = setTimeout(() => {
      props.onClose();
      topView.remove();
    }, props.duration * 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { type, content } = this.props;
    const iconType = {
      success: require('./images/success.png'),
      fail: require('./images/fail.png'),
      offline: require('./images/offline.png'),
    };

    let iconDom = null;
    if (type === 'loading') {
      iconDom = <ActivityIndicator
        animating
        style={[styles.centering]}
        color="white"
        size="large"
      />;
    } else if (type === 'info') {
      iconDom = null;
    } else {
      iconDom = <Image
        source={iconType[type]}
        style={styles.image}
      />;
    }

    return (
      <View style={[styles.container]}>
        <Modal
          animationType="fade"
          transparent
          visible
          onRequestClose={() => {}}
        >
          <View style={[styles.innerContainer]}>
            <View style={[styles.innnerWrap]}>
              {iconDom}
              <Text style={styles.content}>{content}</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

function notice(content, type, duration = 3, onClose) {
  if (typeof duration === 'function') {
    onClose = duration;
    duration = 3;
  }
  topView.set(
    <ToastContainer content={content} duration={duration} onClose={onClose} type={type} />
  );
}

export default {
  SHORT: 3,
  LONG: 8,
  show(content: string, duration?: number) {
    return notice(content, 'info', duration, () => {});
  },
  info(content: string, duration?: number, onClose?: () => void) {
    return notice(content, 'info', duration, onClose);
  },
  success(content: string, duration?: number, onClose?: () => void) {
    return notice(content, 'success', duration, onClose);
  },
  fail(content: string, duration?: number, onClose?: () => void) {
    return notice(content, 'fail', duration, onClose);
  },
  offline(content: string, duration?: number, onClose?: () => void) {
    return notice(content, 'offline', duration, onClose);
  },
  loading(content: string, duration?: number, onClose?: () => void) {
    return notice(content, 'loading', duration, onClose);
  },
  hide() {
    topView.remove();
  },
};
