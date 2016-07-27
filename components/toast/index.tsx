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
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent
          visible
          onRequestClose={() => {}}
        >
          <View style={styles.innerContainer}>
            <View style={styles.innnerWrap}>
              {iconDom}
              <Text style={styles.content}>{content}</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

function notice(content, duration, onClose, type) {
  if (typeof duration === 'function') {
    onClose = duration;
    duration = 3;
  }
  topView.set(
    <ToastContainer content={content} duration={duration} onClose={onClose} type={type} />
  );
}

function noop() {}

export default {
  SHORT: 3,
  LONG: 8,
  show(content, duration) {
    return notice(content, duration, noop, 'info');
  },
  info(content, duration, onClose) {
    return notice(content, duration, onClose, 'info');
  },
  success(content, duration, onClose) {
    return notice(content, duration, onClose, 'success');
  },
  fail(content, duration, onClose) {
    return notice(content, duration, onClose, 'fail');
  },
  offline(content, duration, onClose) {
    return notice(content, duration, onClose, 'offline');
  },
  loading(content, duration, onClose) {
    return notice(content, duration, onClose, 'loading');
  },
  hide() {
    topView.remove();
  },
};
