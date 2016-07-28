/* tslint:disable:no-switch-case-fall-through */
import * as React from 'react';
import { View, Text } from 'react-native';
import Flex from '../flex';
import Button from '../button';
import PaginationProps from './PaginationPropTypes';
import styles from './style/index';

function noop() {

}

export default class Pagination extends React.Component<PaginationProps, any> {
  static defaultProps = {
    mode: 'button',
    current: 0,
    size: 'large',
    simple: false,
    prevText: 'Prev',
    nextText: 'Next',
    onChange: noop,
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
    this.props.onChange(p);
    return p;
  }

  onPrev() {
    this._handleChange(this.state.current - 1);
  }

  onNext() {
    this._handleChange(this.state.current + 1);
  }

  getIndexes(count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(i);
    }
    return arr;
  }

  render() {
    const { mode, size, style, simple, total,
      prevText, nextText } = this.props;
    const current = this.state.current;
    let markup;
    switch (mode) {
      case 'button':
        markup = (
          <Flex>
            <Flex.Item>
              <Button
                type="default"
                size={size}
                inline
                disabled={current <= 0}
                onPress={this.onPrev}
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
                type="default"
                size={size}
                disabled={current >= total - 1}
                inline
                onPress={this.onNext}
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
      case 'point':
        const indexes = this.getIndexes(total);
        const spaceStyle = size === 'large'
          ? styles.spaceLargeStyle : styles.spaceSmallStyle;
        const pointer = indexes.map((index) => {
          const activeStyle = index === current ? styles.pointActiveStyle : null;
          return (
            <View style={[styles.pointStyle, spaceStyle, activeStyle]} key={`point-${index}`}></View>
          );
        });
        markup = (<View style={[styles.indicatorStyle]}>{pointer}</View>);
        break;
      default:
        markup = false;
        break;
    }
    return (
      <View style={[style]}>
        {markup}
      </View>
    );
  }
}
