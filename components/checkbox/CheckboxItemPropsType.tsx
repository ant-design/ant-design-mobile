import CheckboxProps from './CheckboxPropsType';

interface CheckboxItemPropsType extends CheckboxProps {
  listPrefixCls?: any; // web only
  children?: any;
  extra?: any;
  onClick?: () => any;
  line?: number;
  checkboxStyle?: any; // rn only
}

export default CheckboxItemPropsType;
