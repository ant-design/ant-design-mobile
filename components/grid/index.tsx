import React from 'react';
import { Image, Text, Dimensions, View } from 'react-native';
import Flex from '../flex';
import Carousel from '../carousel';
import styles from './style';

export interface GridItem {
  icon: string;
  text: string;
}

export interface GridProps {
  data: GridItem[];
  hasLine?: boolean;
  isCarousel?: boolean;
  onClick?: (el: GridItem, index: number) => void;
}

export default class Grid extends React.Component<GridProps, any> {
  static defaultProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    onClick() {},
  };

  getFlexItemStyle() {
    const clientWidth = Dimensions.get('window').width;
    const flexItemStyle = {
      height: clientWidth / 4,
      borderRightWidth: this.props.hasLine ? 1 : 0,
    };
    return flexItemStyle;
  }

  getGridContent() {
    const { data, hasLine, onClick } = this.props;
    const flexItemStyle = this.getFlexItemStyle();

    const gridContent: any[] = [];
    const dataLength = data.length;
    const rowCount = Math.ceil(dataLength / 4);
    for (let i = 0; i < rowCount; i++) {
      const row: React.ReactElement<any>[] = [];
      for (let j = 0; j < 4; j++) {
        const itemIndex = i * 4 + j;
        const item = data[itemIndex];
        if (item) {
          row.push(
            <Flex.Item
              key={j}
              style={[styles.grayBorderBox, flexItemStyle]}
            >
              <Flex
                direction="column"
                justify="center"
                style={{ flex: 1 }}
                onPress={() => onClick && onClick(item, itemIndex)}
              >
                <Image source={{ uri: item.icon }} style={styles.icon} />
                <Text style={styles.text}>{item.text}</Text>
              </Flex>
            </Flex.Item>
          );
        } else {
          row.push(
            <Flex.Item
              key={j}
              style={[styles.grayBorderBox, flexItemStyle]}
            />
          );
        }
      }
      gridContent.push(
        <Flex key={i} style={[styles.grayBorderBox, { borderBottomWidth: hasLine ? 1 : 0 }]}>
          {row}
        </Flex>
      );
    }
    return gridContent;
  }

  toCarousel(gridContent) {
    const hasLine = this.props.hasLine;
    const flexItemStyle = this.getFlexItemStyle();
    const carouselContent: any[] = [];
    const gridContentLength = gridContent.length;
    const frameCount = Math.ceil(gridContentLength / 2);
    for (let i = 0; i < frameCount; i++) {
      if (i * 2 + 1 < gridContentLength) {
        carouselContent.push(
          <View key={i}>
            {gridContent[i * 2]}
            {gridContent[i * 2 + 1]}
          </View>
        );
      } else {
        carouselContent.push(
          <View key={i}>
            {gridContent[i * 2]}
            <Flex style={[styles.grayBorderBox, { borderBottomWidth: hasLine ? 1 : 0 }]}>
              <Flex.Item style={[styles.grayBorderBox, flexItemStyle]} />
              <Flex.Item style={[styles.grayBorderBox, flexItemStyle]} />
              <Flex.Item style={[styles.grayBorderBox, flexItemStyle]} />
              <Flex.Item style={[styles.grayBorderBox, flexItemStyle]} />
            </Flex>
          </View>
        );
      }
    }

    return carouselContent;
  }

  render() {
    const gridContent = this.getGridContent();
    const isCarousel = this.props.isCarousel;
    const children = isCarousel ? this.toCarousel(gridContent) : gridContent;
    return (
      <Flex direction="column">
        {
          isCarousel ? (
            <Carousel infinite={false} dots>
              {children}
            </Carousel>
          ) : children
        }
      </Flex>
    );
  }
}
