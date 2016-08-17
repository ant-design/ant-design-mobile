interface TabBarItemProps {
  itemKey: string;
  tab: string;
  activeKey: string;
  onTabClick: (key: string) => void;
  underlineColor?: string;
  activeUnderlineColor?: string;
  textColor?: string;
  activeTextColor?: string;
  /*web only*/
  rootPrefixCls?: string;
}

export default TabBarItemProps;
