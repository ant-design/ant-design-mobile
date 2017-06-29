import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Button from '../button';
import Flex from '../flex';
import PaginationProps from './PropsType';
import PaginationStyle, { IPaginationStyle } from './style/index';
import { getComponentLocale } from '../_util/getLocale';
import zh_CN from './locale/zh_CN';

export interface IPaginationNativeProps extends PaginationProps {
  styles?: IPaginationStyle;
}

export default class Pagination extends React.Component<IPaginationNativeProps, any> {
  static defaultProps = {
    mode: 'button',
    current: 1,
    total: 0,
    simple: false,
    onChange: () => {},
    indicatorStyle: null,
    styles: PaginationStyle,
  };

 static contextTypes = {
    antLocale: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.state.current) {
      this.setState({
        current: nextProps.current,
      });
    }
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
    const { style, mode, total, simple } = this.props;
    const styles = this.props.styles!;

    const locale = getComponentLocale(this.props, this.context, 'Pagination', () => zh_CN);
    const { prevText, nextText } = locale;

    const { current } = this.state;
    const simpleItem = !simple ? (
      <Flex.Item>
        <View style={[styles.numberStyle]}>
          <Text style={[styles.activeTextStyle]}>{current}</Text>
          <Text style={[styles.totalStyle]}>/{total}</Text>
        </View>
      </Flex.Item>
    ) : <Flex.Item />;
    let markup = (
      <Flex>
        <Flex.Item>
          <Button
            disabled={current <= 1}
            onClick={() => this.onChange(current - 1)}
          >
            {prevText}
          </Button>
        </Flex.Item>
        {simpleItem}
        <Flex.Item>
          <Button
            disabled={current >= total}
            onClick={() => this.onChange(current + 1)}
          >
            {nextText}
          </Button>
        </Flex.Item>
      </Flex>
    );
    if (mode === 'number') {
      markup = (
        <View style={[styles.numberStyle]}>
          <Text style={[styles.activeTextStyle]}>{current}</Text>
          <Text style={[styles.totalStyle]}>/{total}</Text>
        </View>
      );
    } else if (mode === 'pointer') {
      const arr: any = [];
      for (let i = 0; i < total; i++) {
        arr.push(
          <View
            key={`dot-${i}`}
            style={[ styles.pointStyle, styles.spaceStyle, (i + 1) === current && styles.pointActiveStyle ]}
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
