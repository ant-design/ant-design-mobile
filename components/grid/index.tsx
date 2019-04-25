/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as React from 'react';
import TouchFeedback from 'rmc-feedback';
import Carousel from '../carousel';
import Flex from '../flex';
import { DataItem, GridPropsType } from './PropsType';

export interface GridProps extends GridPropsType {
  prefixCls?: string;
  className?: string;
  square?: boolean;
  activeClassName?: string;
  activeStyle?: boolean | React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

export default class Grid extends React.Component<GridProps, any> {
  static defaultProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    columnNum: 4,
    carouselMaxRow: 2,
    prefixCls: 'am-grid',
    square: true,
    itemStyle: {},
  };
  state = {
    initialSlideWidth: 0, // only used in carousel model
  };
  componentDidMount() {
    this.setState({
      initialSlideWidth: document.documentElement.clientWidth,
    });
  }
  renderCarousel = (rowsArr: any[], pageCount: number, rowCount: number) => {
    const { prefixCls } = this.props;
    const carouselMaxRow = this.props.carouselMaxRow as number;
    const pagesArr: any[] = [];
    for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
      const pageRows: any[] = [];
      for (let ii = 0; ii < carouselMaxRow; ii++) {
        const rowIndex = pageIndex * carouselMaxRow + ii;
        if (rowIndex < rowCount) {
          pageRows.push(rowsArr[rowIndex]);
        } else {
          // 空节点为了确保末尾页的最后未到底的行有底线(样式中last-child会没线)
          pageRows.push(<div key={`gridline-${rowIndex}`} />);
        }
      }
      pagesArr.push(
        <div
          key={`pageitem-${pageIndex}`}
          className={`${prefixCls}-carousel-page`}
        >
          {pageRows}
        </div>,
      );
    }
    return pagesArr;
  }
  renderItem = (
    dataItem: DataItem | any,
    index: number,
    columnNum: number,
    renderItem: any,
  ) => {
    const { prefixCls } = this.props;
    let itemEl: any = null;
    if (renderItem) {
      itemEl = renderItem(dataItem, index);
    } else {
      if (dataItem) {
        const { icon, text } = dataItem;
        itemEl = (
          <div
            className={`${prefixCls}-item-inner-content column-num-${columnNum}`}
          >
            {React.isValidElement(icon) ? (
              icon
            ) : (
              <img className={`${prefixCls}-icon`} src={icon} />
            )}
            <div className={`${prefixCls}-text`}>{text}</div>
          </div>
        );
      }
    }
    return <div className={`${prefixCls}-item-content`}>{itemEl}</div>;
  }
  getRows = (rowCount: number, dataLength: number) => {
    // tslint:disable:prefer-const
    let {
      columnNum,
      data,
      renderItem,
      prefixCls,
      onClick,
      activeStyle,
      activeClassName,
      itemStyle,
    } = this.props;
    const rowsArr: any[] = [];

    columnNum = columnNum!;

    const rowWidth = `${100 / columnNum}%`;
    const colStyle = {
      width: rowWidth,
      ...itemStyle,
    };

    for (let i = 0; i < rowCount; i++) {
      const rowArr: any[] = [];
      for (let j = 0; j < columnNum; j++) {
        const dataIndex = i * columnNum + j;
        let itemEl;
        if (dataIndex < dataLength) {
          const el = data && data[dataIndex];
          itemEl = (
            <TouchFeedback
              key={`griditem-${dataIndex}`}
              activeClassName={
                activeClassName ? activeClassName : `${prefixCls}-item-active`}
              activeStyle={activeStyle}
            >
              <Flex.Item
                className={`${prefixCls}-item`}
                onClick={() => onClick && onClick(el, dataIndex)}
                style={colStyle}
              >
                {this.renderItem(el, dataIndex, columnNum, renderItem)}
              </Flex.Item>
            </TouchFeedback>
          );
        } else {
          itemEl = (
            <Flex.Item
              key={`griditem-${dataIndex}`}
              className={`${prefixCls}-item ${prefixCls}-null-item`}
              style={colStyle}
            />
          );
        }
        rowArr.push(itemEl);
      }
      rowsArr.push(
        <Flex justify="center" align="stretch" key={`gridline-${i}`}>
          {rowArr}
        </Flex>,
      );
    }
    return rowsArr;
  }
  render() {
    const {
      prefixCls,
      className,
      data,
      hasLine,
      isCarousel,
      square,
      activeStyle,
      activeClassName,
      ...restProps
    } = this.props;
    let {
      columnNum,
      carouselMaxRow,
      onClick,
      renderItem,
      ...restPropsForCarousel
    } = restProps;

    const { initialSlideWidth } = this.state;

    columnNum = columnNum!;
    carouselMaxRow = carouselMaxRow!;

    const dataLength = (data && data.length) || 0;

    let rowCount = Math.ceil(dataLength / columnNum);

    let rowsArr;
    let renderEl;
    if (isCarousel) {
      if (initialSlideWidth < 0) {
        // carousel  server render. because carousel dependes on document
        return null;
      }
      if (rowCount % carouselMaxRow !== 0) {
        rowCount = rowCount + carouselMaxRow - rowCount % carouselMaxRow;
      }
      const pageCount = Math.ceil(rowCount / carouselMaxRow);
      rowsArr = this.getRows(rowCount, dataLength);
      let carouselProps = {};
      if (pageCount <= 1) {
        carouselProps = {
          dots: false,
          dragging: false,
          swiping: false,
        };
      }
      renderEl = (
        <Carousel
          initialSlideWidth={initialSlideWidth}
          {...restPropsForCarousel}
          {...carouselProps}
        >
          {this.renderCarousel(rowsArr, pageCount, rowCount)}
        </Carousel>
      );
    } else {
      rowsArr = this.getRows(rowCount, dataLength);
      renderEl = rowsArr;
    }
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-square`]: square,
      [`${prefixCls}-line`]: hasLine,
      [`${prefixCls}-carousel`]: isCarousel,
    });
    return <div className={cls}>{renderEl}</div>;
  }
}
