interface FilterItem {
  text: any;
  selected: Boolean;
  onClick: (FilterItem) => {};
  icon?: string;
  selectedIcon?: string;
  className?: string;
}
interface Props {
  data: Array<FilterItem>;
  /** below web only */
  prefixCls?: string;
}

export default Props;
