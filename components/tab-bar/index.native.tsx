import { Platform } from 'react-native';
import TabBarAndroid from './tabbar.android';
import TabBarIOS from './tabbar.ios';

export default (Platform.OS === 'ios' ? TabBarIOS : TabBarAndroid);
