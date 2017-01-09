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
import ActionSheetAndroidContainer from './AndroidContainer';

let ActionSheet = ActionSheetIOS as any;

if (Platform.OS !== 'ios') {
  ActionSheet = {
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
            {(options as Array<string>).map((item, index) => (
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
        <ActionSheetAndroidContainer visible onAnimationEnd={visible => {
          if(!visible) {
            topView.remove();
          }
        }}>
          {children}
        </ActionSheetAndroidContainer>
      );
    },
    showShareActionSheetWithOptions(config: any) {
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
        <ActionSheetAndroidContainer visible onAnimationEnd={visible => {
          if(!visible) {
            topView.remove();
          }
        }}>
          {children}
        </ActionSheetAndroidContainer>
      );
    },
    close() {
       (DeviceEventEmitter as any).emit('antActionSheetHide');
    },
  };
}

export default ActionSheet;
