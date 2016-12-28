import { Platform } from 'react-native';
import SwipeActionIOS from './swipe.ios';
import SwipeActionAndroid from './swipe.android';

export default Platform.OS === 'ios' ? SwipeActionIOS : SwipeActionAndroid;
