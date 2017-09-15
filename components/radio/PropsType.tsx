export interface RadioProps {
  style?: any;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
  name?: string;
  wrapLabel?: boolean;
}

export interface RadioItemProps extends RadioProps {
  radioStyle?: any; // rn only
  radioProps?: Object;
  onClick?: () => any;
}
