// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (
  ENV !== 'production' &&
  ENV !== 'test' &&
  typeof console !== 'undefined' &&
  console.warn &&
  typeof window !== 'undefined'
) {
  // tslint:disable-next-line:no-console
  console.warn(
    'You are using a whole package of antd-mobile, ' +
      'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
  );
}

export { default as Accordion } from './accordion/index';
export { default as ActionSheet } from './action-sheet/index';
export { default as ActivityIndicator } from './activity-indicator/index';
export { default as Badge } from './badge/index';
export { default as Button } from './button/index';
export { default as Calendar } from './calendar/index';
export { default as Card } from './card/index';
export { default as Carousel } from './carousel/index';
export { default as Checkbox } from './checkbox/index';
export { default as DatePicker } from './date-picker/index';
export { default as DatePickerView } from './date-picker-view/index';
export { default as Drawer } from './drawer/index';
export { default as Flex } from './flex/index';
export { default as Grid } from './grid/index';
export { default as Icon } from './icon/index';
export { default as ImagePicker } from './image-picker/index';
export { default as InputItem } from './input-item/index';

export { default as List } from './list/index';
export { default as ListView } from './list-view/index';
export { default as Menu } from './menu/index';
export { default as Modal } from './modal/index';
export { default as NavBar } from './nav-bar/index';
export { default as NoticeBar } from './notice-bar/index';

export { default as Pagination } from './pagination/index';
export { default as Picker } from './picker/index';
export { default as PickerView } from './picker-view/index';
export { default as Popover } from './popover/index';
export { default as Progress } from './progress/index';

export { default as Radio } from './radio/index';
export { default as PullToRefresh } from './pull-to-refresh/index';
export { default as Result } from './result/index';
export { default as SearchBar } from './search-bar/index';
export { default as SegmentedControl } from './segmented-control/index';
export { default as Slider } from './slider/index';
export { default as Range } from './range/index';
export { default as Stepper } from './stepper/index';
export { default as Steps } from './steps/index';
export { default as SwipeAction } from './swipe-action/index';
export { default as Switch } from './switch/index';
export { default as TabBar } from './tab-bar/index';
export { default as Tabs } from './tabs/index';
export { default as Tag } from './tag/index';
export { default as Text } from './text/index';
export { default as TextareaItem } from './textarea-item/index';
export { default as Toast } from './toast/index';
export { default as View } from './view/index';
export { default as WhiteSpace } from './white-space/index';
export { default as WingBlank } from './wing-blank/index';

export { default as LocaleProvider } from './locale-provider/index';
