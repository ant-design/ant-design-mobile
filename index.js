import {
  List, Collapse, Flex, WingBlank, WhiteSpace, InputItem, Checkbox,
  TextareaItem, SelectItem, Switch, CaptchaItem, Button, ListPicker,
  ListDatePicker, ListSelector, SearchBar, Process,
  TopNotice, Tabs, SegmentedControl, Modal, Toast, Article, Alert,
  Card, PageResult, ActionSheet, Dropdown, FloatMenu, Badge, Tag, Drawer
} from 'antm';

// copy from above
const antm = {
  List, Collapse, Flex, WingBlank, WhiteSpace, InputItem, Checkbox,
  TextareaItem, SelectItem, Switch, CaptchaItem, Button, ListPicker,
  ListDatePicker, ListSelector, SearchBar, Process,
  TopNotice, Tabs, SegmentedControl, Modal, Toast, Article, Alert,
  Card, PageResult, ActionSheet, Dropdown, FloatMenu, Badge, Tag, Drawer
};

if (typeof console !== 'undefined' && console.warn) {
  console.warn(`you are using prebuild antm,
please use https://github.com/ant-design/babel-plugin-antd to reduce app bundle size.`);
}

export default antm;
