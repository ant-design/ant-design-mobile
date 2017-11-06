import React from 'react';

export interface DataItem {
  icon?: any;
  text?: any;
  [key: string]: any;
}

export interface GridProps {
  data?: Array<DataItem | undefined>;
  hasLine?: boolean;
  columnNum?: number;
  isCarousel?: boolean;
  carouselMaxRow?: number;
  itemStyle?: any;
  onClick?: (dataItem: DataItem | undefined, itemIndex: number) => void;
  renderItem?: (dataItem: DataItem | undefined, itemIndex: number) => React.ReactElement<any>;
}
