import React from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  Animated,
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
    onClose() {
    },
  };

  anim: any;

  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const { onClose, duration } = this.props;
    const timing = Animated.timing;
    if (this.anim) {
      this.anim = null;
    }
    const animArr = [
      timing(
        this.state.fadeAnim,
        { toValue: 1, duration: 200 }
      ),
      Animated.delay(duration * 1000),
    ];
    if (duration > 0) {
      animArr.push(
        timing(
          this.state.fadeAnim,
          { toValue: 0, duration: 200 }
        )
      );
    }
    this.anim = Animated.sequence(animArr);
    this.anim.start(() => {
      if (duration > 0) {
        this.anim = null;
        if (onClose) {
          onClose();
        }
        topView.remove();
      }
    });
  }

  componentWillUnmount() {
    if (this.anim) {
      this.anim.stop();
      this.anim = null;
    }
  }

  render() {
    const { type = '', content } = this.props;
    const iconType = {
      success: require('./images/success.png'),
      fail: require('./images/fail.png'),
      offline: require('./images/offline.png'),
    };

    let iconDom: React.ReactElement<any> | null = null;
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
        <View style={[styles.innerContainer]}>
          <Animated.View style={{opacity: this.state.fadeAnim}}>
            <View style={[styles.innnerWrap, iconDom ? styles.iconToast : styles.textToast]}>
              {iconDom}
              <Text style={styles.content}>{content}</Text>
            </View>
          </Animated.View>
        </View>
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
    return notice(content, 'info', duration, () => {
    });
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
