import { Platform } from 'react-native';
import SegmentedIOS from './segmented.ios';
import SegmentedAndroid from './segmented.android';

export default Platform.OS === 'ios' ? SegmentedIOS : SegmentedAndroid;
