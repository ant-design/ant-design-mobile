import * as React from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  DeviceEventEmitter,
  ActionSheetIOS,
  Platform,
  Text,
  TouchableHighlight,
} from 'react-native';
import styles, { vars as variables } from './style/index';
import topView from 'rn-topview';

const WIN_HEIGHT = Dimensions.get('window').height;

export interface Props {
  maskClosable?: boolean;
}

class ActionSheetAndroid extends React.Component<Props, any> {
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
    this.state.translateY.setValue(WIN_HEIGHT);
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
      toValue: WIN_HEIGHT,
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

class ActionSheetCross {
  static showActionSheetWithOptions = (config, callback = (any) => { }) => {
    const { title, message, options, destructiveButtonIndex, cancelButtonIndex } = config;
    const titleMsg = [
      title ? <View style={styles.title} key="0"><Text style={styles.titleText}>{title}</Text></View> : null,
      message ? <View style={styles.message} key="1"><Text>{message}</Text></View> : null,
    ];
    const cb = (index) => {
      DeviceEventEmitter.emit('dropdownHide');
      callback(index);
    };
    const children = (
      <View>
        {titleMsg}
        <View>
          {options.map((item, index) => (
            <View style={[cancelButtonIndex === index ? styles.cancelBtn : null]}>
              <TouchableHighlight
                key={index}
                style={[
                  styles.btn,
                ]}
                underlayColor={variables.neutral_2}
                onPress={() => cb(index) }
                >
                <Text
                  style={[
                    destructiveButtonIndex === index ? styles.destructiveBtn : null,
                  ]}
                  >
                  {item}
                </Text>
              </TouchableHighlight>
              {cancelButtonIndex === index ? <View style={styles.cancelBtnMask} /> : null}
            </View>
          ))}
        </View>
      </View>
    );
    topView.set(
      <ActionSheetAndroid>
        {children}
      </ActionSheetAndroid>
    );
  }
  static showShareActionSheetWithOptions = (config, callback = () => {}) => {
    const { url, message, excludedActivityTypes } = config;
    const titleMsg = [
      url ? <View style={styles.title} key="0"><Text>{url}</Text></View> : null,
      message ? <View style={styles.message} key="1"><Text>{message}</Text></View> : null,
    ];
    const children = (
      <View>
        {titleMsg}
        <View>
          {excludedActivityTypes.map((item, index) => <View key={index}>{item}</View>)}
        </View>
      </View>
    );
    topView.set(
      <ActionSheetAndroid>
        {children}
      </ActionSheetAndroid>
    );
  }
}

let ActionSheet;
if (Platform.OS === 'ios') {
  ActionSheet = ActionSheetIOS;
} else {
  ActionSheet = ActionSheetCross;
}

export default ActionSheet;
