interface TabPaneProps {
  tab: string;
  key: string;
  /*private*/
  itemKey?: string;
  activeKey?: string;
  onTabClick?: (key: string) => void;
  underlineColor?: string;
  activeUnderlineColor?: string;
  textColor?: string;
  activeTextColor?: string;
  animation?: boolean;
  /*web only*/
  rootPrefixCls?: string;
}

export default TabPaneProps;
