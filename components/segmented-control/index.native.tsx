import { Platform } from 'react-native';
import SegmentedAndroid from './segmented.android';
import SegmentedIOS from './segmented.ios';

export default (Platform.OS === 'ios' ? SegmentedIOS : SegmentedAndroid);
