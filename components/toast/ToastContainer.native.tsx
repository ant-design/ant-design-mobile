// tslint:disable:jsx-no-multiline-js

import React from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ToastContainerStyle, { IToastStyle } from './style/index.native';

export interface ToastProps {
  content: string;
  duration?: number;
  onClose?: () => void;
  mask?: boolean;
  type?: string;
  onAnimationEnd?: () => void;
  styles?: IToastStyle;
}

const ToastContainerStyles = StyleSheet.create<any>(ToastContainerStyle);

export default class ToastContainer extends React.Component<ToastProps, any> {
  static defaultProps = {
    duration: 3,
    mask: true,
    onClose() {},
    styles: ToastContainerStyles,
  };

  anim: Animated.CompositeAnimation | null;

  constructor(props: ToastProps) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const { onClose, onAnimationEnd } = this.props;
    const duration = this.props.duration as number;
    const timing = Animated.timing;
    if (this.anim) {
      this.anim = null;
    }
    const animArr = [
      timing(this.state.fadeAnim, { toValue: 1, duration: 200 }),
      Animated.delay(duration * 1000),
    ];
    if (duration > 0) {
      animArr.push(timing(this.state.fadeAnim, { toValue: 0, duration: 200 }));
    }
    this.anim = Animated.sequence(animArr);
    this.anim.start(() => {
      if (duration > 0) {
        this.anim = null;
        if (onClose) {
          onClose();
        }
        if (onAnimationEnd) {
          onAnimationEnd();
        }
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
    const { type = '', content, mask } = this.props;
    const styles = this.props.styles!;
    const iconType: {
      [key: string]: any;
    } = {
      success: require('./images/success.png'),
      fail: require('./images/fail.png'),
      offline: require('./images/offline.png'),
    };

    let iconDom: React.ReactElement<any> | null = null;
    if (type === 'loading') {
      iconDom = (
        <ActivityIndicator
          animating
          style={[styles.centering]}
          color="white"
          size="large"
        />
      );
    } else if (type === 'info') {
      iconDom = null;
    } else {
      iconDom = <Image source={iconType[type]} style={styles.image} />;
    }

    return (
      <View
        style={[styles.container]}
        pointerEvents={mask ? undefined : 'box-none'}
      >
        <View style={[styles.innerContainer]}>
          <Animated.View style={{ opacity: this.state.fadeAnim }}>
            <View
              style={[
                styles.innerWrap,
                iconDom ? styles.iconToast : styles.textToast,
              ]}
            >
              {iconDom}
              <Text style={styles.content}>{content}</Text>
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}
