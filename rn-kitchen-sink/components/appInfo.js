import { NativeModules } from 'react-native';

const RNAppInfo = NativeModules.RNAppInfo;

const AppInfo = {
  getInfoVersion() {
    return RNAppInfo.version;
  },
  getInfoShortVersion() {
    return RNAppInfo.shortVersion;
  },
  getInfoBundleIdentifier() {
    return RNAppInfo.bundleIdentifier;
  },
  getInfoName() {
    return RNAppInfo.name;
  },
  getInfoDisplayName() {
    return RNAppInfo.displayName;
  },
};

export default AppInfo;
