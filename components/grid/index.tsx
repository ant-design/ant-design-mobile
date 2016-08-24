import * as React from 'react';
import { PropTypes } from 'react';
import { Image, Text, Dimensions } from 'react-native';
import Flex from '../flex';
import styles from './style';

export interface GridItem {
  icon: string;
  text: string;
}

export interface GridProps {
  data: GridItem[];
  hasLine: boolean;
  onClick: (el: GridItem, index: number) => void;
}

export default class Grid extends React.Component<GridProps, any> {
  static propTypes = {
    data: PropTypes.array,
    hasLine: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    data: [],
    hasLine: true,
    onClick() {},
  };

  render() {
    const { data, hasLine, onClick } = this.props;
    const clientWidth = Dimensions.get('window').width;
    const flexItemStyle = {
      height: clientWidth / 4,
      borderRightWidth: hasLine ? 1 : 0,
    };

    const children = [];
    const dataLength = data.length;
    const rowCount = Math.ceil(dataLength / 4);
    for (let i = 0; i < rowCount; i++) {
      const row = [];
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
                onPress={() => onClick(item, itemIndex)}
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
      children.push(
        <Flex key={i} style={[styles.grayBorderBox, { borderBottomWidth: hasLine ? 1 : 0 }]}>
          {row}
        </Flex>
      );
    }

    return (
      <Flex direction="column">
        {children}
      </Flex>
    );
  }
}
