/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  Dimensions,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import Carousel from '../carousel';
import Flex from '../flex/index.native';
import { DataItem, GridPropsType } from './PropsType';
import GridStyle from './style';

export interface GridProps extends GridPropsType {
  styles?: any;
  itemStyle?: StyleProp<ViewStyle>;
}

const GridStyles = StyleSheet.create<any>(GridStyle);

export default class Grid extends React.Component<GridProps, any> {
  static defaultProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    columnNum: 4,
    carouselMaxRow: 2,
    styles: GridStyles,
    itemStyle: {},
  };

  getFlexItemStyle() {
    return {
      height: Dimensions.get('window').width / 4,
      borderRightWidth: this.props.hasLine ? 1 : 0,
    };
  }

  render() {
    // tslint:disable-next-line:no-empty
    const {
      data,
      hasLine,
      isCarousel,
      // tslint:disable-next-line:no-empty
      onClick = () => {},
      styles,
    } = this.props;
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11640
    const columnNum = this.props.columnNum as number;
    const customItemStyle = this.props.itemStyle;
    const carouselMaxRow = this.props.carouselMaxRow as number;
    const dataLength = (data && data.length) || 0;
    const rowCount = Math.ceil(dataLength / columnNum);

    const renderItem =
      this.props.renderItem ||
      ((dataItem: DataItem, index: number) => (
        <Flex
          direction="column"
          justify="center"
          style={{ flex: 1 }}
          onPress={() => onClick(dataItem, index)}
        >
          {React.isValidElement(dataItem.icon) ? (
            dataItem.icon
          ) : (
            <Image source={{ uri: dataItem.icon }} style={styles.icon} />
          )}
          <Text style={styles.text}>{dataItem.text}</Text>
        </Flex>
      ));

    const flexItemStyle = this.getFlexItemStyle();
    const rowsArr: any[] = [];

    for (let i = 0; i < rowCount; i++) {
      const rowArr: any[] = [];
      for (let j = 0; j < columnNum; j++) {
        const dataIndex = i * columnNum + j;
        if (dataIndex < dataLength) {
          const el = data && data[dataIndex];
          rowArr.push(
            <Flex.Item
              key={j}
              style={[
                styles.grayBorderBox,
                flexItemStyle,
                { borderLeftWidth: hasLine && j === 0 ? 1 : 0 },
                customItemStyle,
              ]}
              onPress={() => onClick(el, dataIndex)}
            >
              {renderItem(el, dataIndex)}
            </Flex.Item>,
          );
        } else {
          rowArr.push(
            <Flex.Item key={j} style={[styles.grayBorderBox, flexItemStyle]} />,
          );
        }
      }
      const boxBorderStyle = {
        borderTopWidth: hasLine && i === 0 ? 1 : 0,
        borderBottomWidth: hasLine ? 1 : 0,
      };
      rowsArr.push(
        <Flex key={i} style={[styles.grayBorderBox, boxBorderStyle]}>
          {rowArr}
        </Flex>,
      );
    }

    const pageCount = Math.ceil(rowCount / carouselMaxRow);
    const pagesArr: any[] = [];
    if (isCarousel && pageCount > 1) {
      for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
        const pageRows: any[] = [];
        for (let ii = 0; ii < carouselMaxRow; ii++) {
          const rowIndex = pageIndex * carouselMaxRow + ii;
          if (rowIndex < rowCount) {
            pageRows.push(rowsArr[rowIndex]);
          } else {
            const res: any = [];
            for (let jjj = 0; jjj < columnNum; jjj++) {
              res.push(
                <Flex.Item
                  key={jjj}
                  style={[styles.grayBorderBox, flexItemStyle]}
                />,
              );
            }
            pageRows.push(
              <Flex
                key={rowIndex}
                style={[
                  styles.grayBorderBox,
                  { borderBottomWidth: hasLine ? 1 : 0 },
                ]}
              >
                {res}
              </Flex>,
            );
          }
        }
        pagesArr.push(
          <View
            key={pageIndex}
            style={[
              styles.grayBorderBox,
              { borderTopWidth: hasLine && pageIndex !== 0 ? 1 : 0 },
            ]}
          >
            {pageRows}
          </View>,
        );
      }
    }

    return isCarousel && pageCount > 1 ? (
      <Carousel infinite={false} dots>
        {pagesArr}
      </Carousel>
    ) : (
      <Flex direction="column">{rowsArr}</Flex>
    );
  }
}
