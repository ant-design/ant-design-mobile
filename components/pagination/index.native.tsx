import PropTypes from 'prop-types';
import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { getComponentLocale } from '../_util/getLocale';
import Button from '../button';
import Flex from '../flex';
import zh_CN from './locale/zh_CN';
import { PaginationPropsType, PaginationState } from './PropsType';
import PaginationStyle, { IPaginationStyle } from './style/index.native';

export interface PaginationNativeProps extends PaginationPropsType {
  styles?: IPaginationStyle;
  style?: StyleProp<ViewStyle>;
  indicatorStyle?: StyleProp<ViewStyle>;
}

const PaginationStyles = StyleSheet.create<any>(PaginationStyle);

export default class Pagination extends React.Component<
  PaginationNativeProps,
  PaginationState
> {
  static defaultProps = {
    mode: 'button',
    current: 1,
    total: 0,
    simple: false,
    onChange: () => {},
    indicatorStyle: null,
    styles: PaginationStyles,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  constructor(props: PaginationNativeProps) {
    super(props);
    this.state = {
      current: props.current,
    };
  }

  componentWillReceiveProps(nextProps: PaginationNativeProps) {
    if (nextProps.current !== this.state.current) {
      this.setState({
        current: nextProps.current,
      });
    }
  }

  onChange(p: number) {
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

    const locale = getComponentLocale(
      this.props,
      this.context,
      'Pagination',
      () => zh_CN,
    );
    const { prevText, nextText } = locale;

    const { current } = this.state;
    const simpleItem = !simple ? (
      <Flex.Item>
        <View style={[styles.numberStyle]}>
          <Text style={[styles.activeTextStyle]}>{current}</Text>
          <Text style={[styles.totalStyle]}>/{total}</Text>
        </View>
      </Flex.Item>
    ) : (
      <Flex.Item />
    );
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
            // tslint:disable-next-line:jsx-no-multiline-js
            style={[
              styles.pointStyle,
              styles.spaceStyle,
              i + 1 === current && styles.pointActiveStyle,
            ]}
          />,
        );
      }
      markup = (
        <View style={[styles.indicatorStyle, this.props.indicatorStyle]}>
          {arr}
        </View>
      );
    }
    return <View style={[styles.container, style]}>{markup}</View>;
  }
}
