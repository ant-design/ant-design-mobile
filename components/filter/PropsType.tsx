interface Props {
  data: Array<{
    text: any;
    selected: Boolean;
    onClick: (FilterItem) => {};
    icon?: string;
    selectedIcon?: string;
    className?: string;
  }>;
  /** below web only */
  prefixCls?: string;
}

export default Props;
