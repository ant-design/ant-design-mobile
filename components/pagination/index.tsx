/* tslint:disable:no-switch-case-fall-through */
import React from 'react';
import { View, Text } from 'react-native';
import Flex from '../flex';
import Button from '../button';
import PaginationProps from './PaginationPropTypes';
import styles from './style/index';

export default class Pagination extends React.Component<PaginationProps, any> {
  static defaultProps = {
    mode: 'button',
    current: 0,
    simple: false,
    prevText: 'Prev',
    nextText: 'Next',
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
    };
    this.onPrev = this.onPrev.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      current: nextProps.current,
    });
  }

  _hasPrev() {
    return this.state.current > 0;
  }

  _hasNext() {
    return this.state.current < this.props.total;
  }

  _handleChange(p) {
    this.setState({
      current: p,
    });
    if (this.props.onChange) {
      this.props.onChange(p);
    }
    return p;
  }

  onPrev() {
    this._handleChange(this.state.current - 1);
  }

  onNext() {
    this._handleChange(this.state.current + 1);
  }

  getIndexes(count) {
    const arr: number[] = [];
    for (let i = 0; i < count; i++) {
      arr.push(i);
    }
    return arr;
  }

  render() {
    const { mode, style, simple, total,
      prevText, nextText } = this.props;
    const current = this.state.current;
    let markup;
    switch (mode) {
      case 'button':
        markup = (
          <Flex>
            <Flex.Item>
              <Button
                inline
                disabled={current <= 0}
                onClick={this.onPrev}
              >
                {prevText}
              </Button>
            </Flex.Item>
            {!simple ?
              <Flex.Item>
                <View style={[styles.numberStyle]}>
                  <Text style={[styles.activeTextStyle]}>{current + 1}</Text>
                  <Text style={[styles.totalStyle]}>/{total}</Text>
                </View>
              </Flex.Item> : <Flex.Item />
            }
            <Flex.Item>
              <Button
                disabled={current >= total - 1}
                inline
                onClick={this.onNext}
              >
              {nextText}
              </Button>
            </Flex.Item>
          </Flex>
        );
        break;
      case 'number':
        markup = (
          <View style={[styles.numberStyle]}>
            <Text style={[styles.activeTextStyle]}>{current + 1}</Text>
            <Text style={[styles.totalStyle]}>/{total}</Text>
          </View>
        );
        break;
      case 'pointer':
        const indexes = this.getIndexes(total);
        const pointer = indexes.map((index) => {
          const activeStyle = index === current ? styles.pointActiveStyle : null;
          return (
            <View style={[styles.pointStyle, styles.spaceStyle, activeStyle]} key={`point-${index}`}></View>
          );
        });
        markup = (
          <View style={[styles.indicatorStyle]}>
            {pointer}
          </View>
        );
        break;
      default:
        markup = false;
        break;
    }
    return (
      <View style={[styles.container, style]}>
        {markup}
      </View>
    );
  }
}
