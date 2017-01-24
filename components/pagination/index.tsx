import React from 'react';
import { View, Text } from 'react-native';
import Button from '../button';
import Flex from '../flex';
import PaginationProps from './PropsType';
import PaginationStyle from './style/index';

export default class Pagination extends React.Component<PaginationProps, any> {
  static defaultProps = {
    mode: 'button',
    current: 0,
    simple: false,
    prevText: 'Prev',
    nextText: 'Next',
    onChange: () => {},
    indicatorStyle: null,
    styles: PaginationStyle,
  };

  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      current: nextProps.current,
    });
  }

  onChange(p) {
    this.setState({
      current: p,
    });
    if (this.props.onChange) {
      this.props.onChange(p);
    }
  }

  render() {
    const { styles, style, mode, total, simple, prevText, nextText } = this.props;
    const current = this.state.current;
    const simpleItem = !simple ? (
      <Flex.Item>
        <View style={[styles.numberStyle]}>
          <Text style={[styles.activeTextStyle]}>{current + 1}</Text>
          <Text style={[styles.totalStyle]}>/{total}</Text>
        </View>
      </Flex.Item>
    ) : <Flex.Item />;
    let markup = (
      <Flex>
        <Flex.Item>
          <Button
            inline
            disabled={current <= 0}
            onClick={() => this.onChange(current - 1)}
          >
            {prevText}
          </Button>
        </Flex.Item>
        { simpleItem }
        <Flex.Item>
          <Button
            inline
            disabled={current >= total - 1}
            onClick={() => this.onChange(this.state.current + 1)}
          >
            {nextText}
          </Button>
        </Flex.Item>
      </Flex>
    );
    if (mode === 'number') {
      markup = (
        <View style={[styles.numberStyle]}>
          <Text style={[styles.activeTextStyle]}>{current + 1}</Text>
          <Text style={[styles.totalStyle]}>/{total}</Text>
        </View>
      );
    } else if (mode === 'pointer') {
      const arr: any = [];
      for (let i = 0; i < total; i++) {
        arr.push(
          <View
            key={`dot-${i}`}
            style={[ styles.pointStyle, styles.spaceStyle, i === current && styles.pointActiveStyle ]}
          />,
        );
      }
      markup = <View style={[styles.indicatorStyle, this.props.indicatorStyle]}>{arr}</View>;
    }
    return (
      <View style={[styles.container, style]}>
        {markup}
      </View>
    );
  }
}
