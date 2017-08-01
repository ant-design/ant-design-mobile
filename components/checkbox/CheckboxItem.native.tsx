import React from 'react';
import { StyleSheet } from 'react-native';
import Checkbox from './Checkbox';
import List from '../list/index';
import { CheckboxItemProps } from './PropsType';
import CheckboxItemStyle, { ICheckboxStyle } from './style/index.native';

const ListItem = List.Item;
const refCheckbox = 'checkbox';

export interface ICheckboxItemNativeProps extends CheckboxItemProps {
  styles?: ICheckboxStyle;
}

const CheckboxItemStyles = StyleSheet.create<any>(CheckboxItemStyle);

export default class CheckboxItem extends React.Component<ICheckboxItemNativeProps, any> {
  static defaultProps = {
    styles: CheckboxItemStyles,
  };

  handleClick = () => {
    let checkBox: Checkbox = this.refs[refCheckbox] as Checkbox;
    checkBox.handleClick();
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { style, checkboxStyle, defaultChecked, checked, disabled, children, extra, onChange } = this.props;
    const styles = this.props.styles!;

    const thumbEl = (
      <Checkbox
        ref={refCheckbox}
        style={[styles.checkboxItemCheckbox, checkboxStyle]}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    );
    return (
      <ListItem
        style={style}
        onClick={disabled ? undefined : this.handleClick}
        extra={extra}
        thumb={thumbEl}
      >
        {children}
      </ListItem>
    );
  }
}
