import * as React from 'react';
import Checkbox from './Checkbox';
import List from '../list/index';
import CheckboxItemProps from './CheckboxItemPropsType';
import styles from './style/index';

const ListItem = List.Item;

export default class CheckboxItem extends React.Component<CheckboxItemProps, any> {

  render() {
    let { style, defaultChecked, checked, disabled, children, extra, onChange } = this.props;

    return (<ListItem
      style={[styles.checkboxItem, style]}
      extra={extra}
      thumb={<Checkbox
        style={styles.checkboxItemCheckbox}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />}
    >{children}</ListItem>);
  }
}
