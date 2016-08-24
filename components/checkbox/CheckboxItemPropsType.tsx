import CheckboxProps from './CheckboxPropsType';

interface CheckboxItemPropsType extends CheckboxProps {
  listPrefixCls?: any; // web only
  children?: any;
  extra?: any;
  onClick?: () => any;
  line?: number;
}

export default CheckboxItemPropsType;
