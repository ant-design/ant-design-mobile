import { Platform } from 'react-native';
import TabBarIOS from './tabbar.ios';
import TabBarAndroid from './tabbar.android';

export default Platform.OS === 'ios' ? TabBarIOS : TabBarAndroid;
