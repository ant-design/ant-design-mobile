import React from 'react';
import classNames from 'classnames';
import Flex from '../flex';
import Carousel from '../carousel/index.web';

export interface DataItem {
  icon?: any;
  text?: any;
  [key: string]: any;
}

export interface GridProps {
  /** web only */
  prefixCls?: string;
  /** web only */
  className?: string;
  style?: React.CSSProperties;
  data?: Array<DataItem>;
  renderItem?: (dataItem: DataItem, itemIndex: number) => React.ReactElement<any>;
  columnNum?: number;
  onClick?: (dataItem: DataItem | undefined, itemIndex: number) => void;
  hasLine?: boolean;
  isCarousel?: boolean;
  carouselMaxRow?: number;
}

export default class Grid extends React.Component<GridProps, any> {
  static defaultProps = {
    prefixCls: 'am-grid',
    data: [],
    onClick: () => {
    },
    columnNum: 4,
    hasLine: true,
    isCarousel: false,
    carouselMaxRow: 2,
  };

  clientWidth = document.documentElement.clientWidth;

  render() {
    let { className, data, prefixCls, hasLine, isCarousel, columnNum, carouselMaxRow } = this.props;

    const wrapCls = classNames({
      [prefixCls as string]: true,
      [`${prefixCls}-line`]: hasLine,
      [className as string]: className,
    });

    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
    });

    const dataLength = data && data.length || 0;

    const lineCount = Math.ceil(dataLength / columnNum);

    const defaultHeight = this.clientWidth / columnNum;
    const renderItem = this.props.renderItem || ((dataItem: DataItem) => (
        <div className={`${prefixCls}-item-contain column-num-${columnNum}`} style={{ height: `${defaultHeight}px` }}>
          <img className={`${prefixCls}-icon`} src={dataItem.icon} />
          <div className={`${prefixCls}-text`}>{dataItem.text}</div>
        </div>));

    let lineElArray: any[] = [];
    let pageElArray: any[] = [];

    if (data) {
      for (let i = 0; i < lineCount; i++) {
        let lineContent: any[] = [];
        for (let j = 0; j < columnNum; j++) {
          const dataIndex = i * columnNum + j;
          if (dataIndex < dataLength) {
            lineContent.push(<Flex.Item
              className={itemCls}
              onClick={() => {
                if (this.props.onClick) {
                  this.props.onClick(data && data[dataIndex], dataIndex);
                }
              }}
              key={`griditem-${dataIndex}`}
            >
              {renderItem(data[dataIndex], dataIndex)}
            </Flex.Item>);
          } else {
            lineContent.push(<Flex.Item key={`griditem-${dataIndex}`} />);
          }
        }

        lineElArray.push(<Flex justify="center" align="stretch" key={`gridline-${i}`}>{lineContent}</Flex>);
      }
    }

    const pageCount = Math.ceil(lineCount / carouselMaxRow);
    if (isCarousel && pageCount > 1) {
      for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
        let pageLines: any[] = [];
        for (let lineIndexInPage = 0; lineIndexInPage < carouselMaxRow; lineIndexInPage++) {
          const lineIndexInAll = pageIndex * carouselMaxRow + lineIndexInPage;
          if (lineIndexInAll < lineCount) {
            pageLines.push(lineElArray[lineIndexInAll]);
          } else {
            pageLines.push(<div key={`gridline-${lineIndexInAll}`}></div>); // 空节点为了确保末尾页的最后未到底的行有底线(样式中last-child会没线)
          }
        }
        pageElArray.push(<div className={`${prefixCls}-carousel-page`} key={`pageitem-${pageIndex}`}>{pageLines}</div>);
      }
    }

    return (
      <div
        className={wrapCls}
      >{isCarousel && pageCount > 1 ? <Carousel>
        {pageElArray}
      </Carousel> : lineElArray}
      </div>
    );
  }
}
