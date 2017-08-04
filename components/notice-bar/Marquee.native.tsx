import React from 'react';
import { Text, View, Animated, Easing } from 'react-native';
import createReactClass from 'create-react-class';

export interface MarqueeProp {
  text: string;
  loop?: boolean;
  leading?: number;
  trailing?: number;
  className?: string;
  fps?: number;
}

function until (test, iterator, callback) {
  if (!test()) {
    iterator((err) => {
      if (err) {
        return callback(err);
      }
      until(test, iterator, callback);
    });
  } else {
    callback();
  }
}

const Marquee = createReactClass<MarqueeProp, any>({
  getDefaultProps() {
    return {
      text: '',
      loop: false,
      leading: 500,
      trailing: 800,
      fps: 40,
    };
  },

  getInitialState () {
    this.texts = {};
    return {
      left: new Animated.Value(0),
    };
  },

  onLayout(e, i) {
    this.texts[i] = e.nativeEvent.layout.width;
    const textList = this.props.text.split('');
    const textkeys = Object.keys(this.texts);
    if (textkeys.length === textList.length) {
      this.twidth = textkeys.reduce((prev, curKey) => prev + this.texts[curKey], 0);
      this.texts = {};
      if (this.twidth > this.width) {
        until(
          () => this.width > 0,
          (cb) => setTimeout(cb, 10),
          () => this.startMove(),
        );
      }
    }
  },

  onLayoutContainer(e) {
    if (!this.width) {
      this.width = e.nativeEvent.layout.width;
      this.setState({
        left: new Animated.Value(0),
      });
    }
  },

  startMove() {
    const SPPED = 1 / this.props.fps * 1000;
    const { width, twidth, props } = this;
    Animated.timing(this.state.left, {
      toValue: -twidth + width,
      duration: twidth * SPPED,
      easing: Easing.linear,
      delay: props.leading,
    }).start(() => {
      if (this.props.loop) {
        this.moveToHeader();
      }
    });
  },

  moveToHeader() {
    Animated.timing(this.state.left, {
      toValue: 0,
      duration: 0,
      delay: this.props.trailing,
    }).start(() => {
      this.startMove();
    });
  },

  render() {
    const { style, text } = this.props;

    const textChildren = text.split('').map((t, i) => (
      <Text key={i} onLayout={(e) => this.onLayout(e, i)} style={style}>{t}</Text>
    ));

    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} onLayout={this.onLayoutContainer}>
        <Animated.View style={{ flexDirection: 'row', left: this.state.left }}>
          {textChildren}
        </Animated.View>
      </View>
    );
  },
});

export default Marquee;
