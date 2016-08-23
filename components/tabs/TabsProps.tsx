interface TabsProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  onTabClick?: (key: string) => void;
  tabPosition?: 'top' | 'bottom';
  animation?: boolean;
  /*rn only*/
  underlineColor?: string;
  activeUnderlineColor?: string;
  textColor?: string;
  activeTextColor?: string;
  /*web only*/
  className?: string;
  prefixCls?: string;
}

export default TabsProps;
