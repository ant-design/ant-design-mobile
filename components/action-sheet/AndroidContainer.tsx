import React from 'react';
import { DeviceEventEmitter, View, Text, TouchableHighlight } from 'react-native';
import styles, { vars as variables } from './style/index';
import Modal from 'rc-dialog/lib/Modal';

export interface Props {
  onAnimationEnd?: (visibile: boolean) => void;
  visible?: boolean;
  share?: boolean;
  config: any;
  callback?: (index: number) => void;
}

export default class ActionSheetAndroid extends React.Component<Props, any> {
  static defaultProps = {
    share: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible || false,
    };
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('antActionSheetHide', () => {
      this.close();
    });
  }

  componentWillUnmount() {
    (DeviceEventEmitter as any).removeAllListeners('antActionSheetHide');
  }

  close() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { config, share, callback, onAnimationEnd} = this.props;
    const {
      title, message, url, options, destructiveButtonIndex, cancelButtonIndex, excludedActivityTypes,
    } = config;
    const titleMsg = share ? (
      url && <View style={styles.title} key="0"><Text>{url}</Text></View>
    ) : (
      title && <View style={styles.title} key="0"><Text style={styles.titleText}>{title}</Text></View>
    );
    const cb = (index) => {
      (DeviceEventEmitter as any).emit('antActionSheetHide');
      if (callback) {
        callback(index);
      }
    };
    return (
      <Modal
        animationDuration={200}
        animateAppear
        visible={this.state.visible}
        onAnimationEnd={onAnimationEnd}
        style={styles.content}
        animationType="slide-up"
        maskClosable
        onClose={this.close}
      >
        <View>
          {titleMsg}
          {message && <View style={styles.message} key="1"><Text>{message}</Text></View> }
          <View>
            {share ? (
              excludedActivityTypes.map((item, index) => <View key={index}>{item}</View>)
            ) : (options as Array<string>).map((item, index) => (
              <View key={index} style={[cancelButtonIndex === index ? styles.cancelBtn : null]}>
                <TouchableHighlight
                  style={[ styles.btn ]}
                  underlayColor={variables.fill_tap}
                  onPress={() => cb(index) }
                >
                  <Text style={[ destructiveButtonIndex === index ? styles.destructiveBtn : null ]}>
                    {item}
                  </Text>
                </TouchableHighlight>
                {cancelButtonIndex === index ? <View style={styles.cancelBtnMask} /> : null}
              </View>
            ))}
          </View>
        </View>
      </Modal>
    );
  }
}
