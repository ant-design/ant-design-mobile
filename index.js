/* eslint no-console:0 */
import {
  List, Collapse, Flex, WingBlank, WhiteSpace, InputItem, Checkbox, Radio,
  TextareaItem, Switch, Button, ListPicker,
  ListDatePicker, SelectList, SearchBar, Process, Progress,
  TopNotice, Tabs, Modal, Toast, Alert,
  PageResult, ActionSheet, Dropdown, FloatMenu, Badge, Tag, Drawer, NavBar,
  RefreshControl
} from 'antm';

// copy from above
export {
  List, Collapse, Flex, WingBlank, WhiteSpace, InputItem, Checkbox, Radio,
  TextareaItem, Switch, Button, ListPicker,
  ListDatePicker, SelectList, SearchBar, Process, Progress,
  TopNotice, Tabs, Modal, Toast, Alert,
  PageResult, ActionSheet, Dropdown, FloatMenu, Badge, Tag, Drawer, NavBar,
  RefreshControl
};

if (typeof console !== 'undefined' && console.warn) {
  console.warn(`you are using prebuild antm,
please use https://github.com/ant-design/babel-plugin-antd to reduce app bundle size.`);
}
