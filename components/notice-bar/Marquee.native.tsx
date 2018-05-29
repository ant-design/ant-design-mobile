import React from 'react';
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  StyleProp,
  Text,
  TextStyle,
  View,
} from 'react-native';

export interface MarqueeProps {
  text: React.ReactNode;
  loop?: boolean;
  leading?: number;
  trailing?: number;
  className?: string;
  fps?: number;
  style?: StyleProp<TextStyle>;
  maxWidth?: number;
}

class Marquee extends React.PureComponent<MarqueeProps, any> {
  static defaultProps = {
    text: '',
    loop: false,
    leading: 500,
    trailing: 800,
    fps: 40,
    maxWidth: 1000,
  };

  texts: any;
  twidth = 0;
  width = 0;

  constructor(props: MarqueeProps) {
    super(props);

    this.texts = {};
    this.state = {
      left: new Animated.Value(0),
    };
  }

  onLayout = (e: LayoutChangeEvent) => {
    if (this.twidth) {
      return;
    }

    this.twidth = e.nativeEvent.layout.width;
    // onLayout may be earlier than onLayoutContainer on android, can not be sure width < twidth at that time.
    this.tryStart();
  }

  tryStart() {
    if (this.twidth > this.width && this.width) {
      this.startMove();
    }
  }

  onLayoutContainer = (e: LayoutChangeEvent) => {
    if (!this.width) {
      this.width = e.nativeEvent.layout.width;
      this.setState(
        {
          left: new Animated.Value(0),
        },
        () => {
          this.tryStart();
        },
      );
    }
  }

  startMove = () => {
    const { fps = 40, loop } = this.props;
    const SPPED = 1 / fps * 1000;
    // tslint:disable-next-line:no-this-assignment
    const { width, twidth, props } = this;
    Animated.timing(this.state.left, {
      toValue: -twidth + width,
      duration: twidth * SPPED,
      easing: Easing.linear,
      delay: props.leading,
      isInteraction: false,
    }).start(() => {
      if (loop) {
        this.moveToHeader();
      }
    });
  }

  moveToHeader = () => {
    Animated.timing(this.state.left, {
      toValue: 0,
      duration: 0,
      delay: this.props.trailing,
      isInteraction: false,
    }).start(() => {
      this.startMove();
    });
  }

  render() {
    const { style, text, maxWidth } = this.props;

    const textChildren = (
      <Text
        onLayout={this.onLayout}
        numberOfLines={1}
        ellipsizeMode="tail"
        style={style}
      >
        {text}
      </Text>
    );

    return (
      <View
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
        onLayout={this.onLayoutContainer}
      >
        <Animated.View
          // tslint:disable-next-line:jsx-no-multiline-js
          style={{
            flexDirection: 'row',
            left: this.state.left,
            width: maxWidth,
          }}
        >
          {textChildren}
        </Animated.View>
      </View>
    );
  }
}

export default Marquee;
