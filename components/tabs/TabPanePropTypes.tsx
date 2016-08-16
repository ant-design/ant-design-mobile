interface TabBarItemProps {
  itemKey: string;
  tab: string;
  activeKey: string;
  onTabClick: (key: string) => void;
  /*web only*/
  rootPrefixCls?: string;
}

export default TabBarItemProps;
