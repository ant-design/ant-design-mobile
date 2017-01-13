import { Platform } from 'react-native';
import SwipeActionIOS from './swipe_ios';
import SwipeActionAndroid from './swipe_android';

export default Platform.OS === 'ios' ? SwipeActionIOS : SwipeActionAndroid;
