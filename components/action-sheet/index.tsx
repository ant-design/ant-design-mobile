import React from 'react';
import {
  View,
  DeviceEventEmitter,
  ActionSheetIOS,
  Platform,
  Text,
  TouchableHighlight,
} from 'react-native';
import styles, { vars as variables } from './style/index';
import topView from 'rn-topview';
import Modal from 'rc-dialog/lib/Modal';

export interface Props {
  name?: string;
  maskClosable?: boolean;
}

let ActionSheet;

class ActionSheetAndroid extends React.Component<Props, any> {
  static defaultProps = {
    maskClosable: true,
  };

  timer: number;

  anim: any;

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    ActionSheet.instances[props.name] = this;
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('antActionSheetHide', () => {
      this.setState({
        visible: false,
      });
    });
  }

  componentWillUnmount() {
    (DeviceEventEmitter as any).removeAllListeners('antActionSheetHide');
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onAnimationEnd(visible) {
    if (!visible) {
      topView.remove();
    }
  };

  render() {
    return (
      <Modal
        animationDuration={200}
        animateAppear
        onClose={this.onClose}
        visible={this.state.visible}
        onAnimationEnd={this.onAnimationEnd}
        style={styles.content}
      >

        {this.props.children}
      </Modal>
    );
  }
}

if (Platform.OS === 'ios') {
  ActionSheet = ActionSheetIOS;
} else {
  ActionSheet = {
    instances: {},
    showActionSheetWithOptions(config, callback) {
      const { title, message, options, destructiveButtonIndex, cancelButtonIndex } = config;
      const titleMsg = [
        title ? <View style={styles.title} key="0"><Text style={styles.titleText}>{title}</Text></View> : null,
        message ? <View style={styles.message} key="1"><Text>{message}</Text></View> : null,
      ];
      const cb = (index) => {
        (DeviceEventEmitter as any).emit('antActionSheetHide');
        if (callback) {
          callback(index);
        }
      };
      const children = (
        <View>
          {titleMsg}
          <View>
            {options.map((item, index) => (
              <View key={index} style={[cancelButtonIndex === index ? styles.cancelBtn : null]}>
                <TouchableHighlight
                  style={[
                    styles.btn,
                  ]}
                  underlayColor={variables.fill_tap}
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
        <ActionSheetAndroid name={config.androidActionSheetName || 'defaultActionSheet'}>
          {children}
        </ActionSheetAndroid>
      );
    },
    showShareActionSheetWithOptions(config) {
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
        <ActionSheetAndroid name={config.androidActionSheetName || 'defaultShareActionSheet'}>
          {children}
        </ActionSheetAndroid>
      );
    },
    close(androidActionSheetName) {
      // ActionSheet.instances will cause memory leak?
      ActionSheet.instances[androidActionSheetName].animatedHide();
    },
  };
}

export default ActionSheet;
