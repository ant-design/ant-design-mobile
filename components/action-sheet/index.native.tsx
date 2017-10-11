import React from 'react';
import { Share, Platform, ActionSheetIOS } from 'react-native';
import topView from 'rn-topview';
import ActionSheetAndroidContainer from './AndroidContainer.native';

let instance;

const saveInstance = (i) => {
  instance = i;
};

const onAnimationEnd = (visible) => {
  if (!visible) {
    topView.remove();
  }
};

export default {
  showActionSheetWithOptions(config, callback) {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(config, callback);
    } else {
      topView.set(
        <ActionSheetAndroidContainer
          visible
          ref={saveInstance}
          onAnimationEnd={onAnimationEnd}
          config={config}
          callback={callback}
        />,
      );
    }
  },

  showShareActionSheetWithOptions(config: any, failureCallback?: Function, successCallback?: Function) {
    const content: any = {};
    const options: any = {};
    content.message = config.message;
    if (config.title) {
      content.title = config.title;
      options.dialogTitle = config.title;
    }
    if (config.url) {
      content.url = config.url;
    }
    if (config.excludedActivityTypes) {
      options.excludedActivityTypes = config.excludedActivityTypes;
    }
    if (config.tintColor) {
      options.tintColor = config.tintColor;
    }
    // promise is not called in Android
    // https://github.com/facebook/react-native/blob/master/Libraries/Share/Share.js#L80
    Share.share(content, options).then((result: any) => {
      if (result.action === Share.sharedAction) { // completed successCallback(completed, method)
         if (successCallback) {
           successCallback(true, result.activityType);
         }
      } else if (result.action === Share.dismissedAction) {
        if (successCallback) {
          successCallback(false);
        }
      }
    }).catch(error => {
      if (failureCallback) {
        failureCallback(error);
      }
    });
  },

  close() {
    if (instance) {
      instance.close();
    }
  },
};
