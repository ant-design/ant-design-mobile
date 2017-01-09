import React from 'react';
import { DeviceEventEmitter, ActionSheetIOS, Platform } from 'react-native';
import topView from 'rn-topview';
import ActionSheetAndroidContainer from './AndroidContainer';

let ActionSheet = ActionSheetIOS as any;

if (Platform.OS !== 'ios') {
  ActionSheet = {
    showActionSheetWithOptions(config, callback) {
      topView.set(
        <ActionSheetAndroidContainer visible onAnimationEnd={visible => {
          if(!visible) {
            topView.remove();
          }
        }} config={config} callback={callback} />
      );
    },
    showShareActionSheetWithOptions(config: any) {
      topView.set(
        <ActionSheetAndroidContainer visible onAnimationEnd={visible => {
          if(!visible) {
            topView.remove();
          }
        }} config={config} share />
      );
    },
    close() {
       (DeviceEventEmitter as any).emit('antActionSheetHide');
    },
  };
}

export default ActionSheet;
