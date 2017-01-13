import React from 'react';
import { ActionSheetIOS, Platform } from 'react-native';
import topView from 'rn-topview';
import ActionSheetAndroidContainer from './AndroidContainer';

let ActionSheet = ActionSheetIOS as any;

if (Platform.OS !== 'ios') {
  let instance;

  const saveInstance = (i) => {
    instance = i;
  };

  ActionSheet = {
    showActionSheetWithOptions(config, callback) {
      topView.set(
        <ActionSheetAndroidContainer
          visible
          ref={saveInstance}
          onAnimationEnd={visible => {
          if(!visible) {
            topView.remove();
          }
        }} config={config} callback={callback}/>
      );
    },
    showShareActionSheetWithOptions(config: any) {
      topView.set(
        <ActionSheetAndroidContainer
          visible
          ref={saveInstance}
          onAnimationEnd={visible => {
            if(!visible) {
              topView.remove();
            }
          }} config={config} share
        />
      );
    },
    close() {
      if (instance) {
        instance.close();
      }
    },
  };
}

export default ActionSheet;
