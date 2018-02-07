/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { StepsPropsType } from './PropsType';
import RNStepsItem from './StepsItem.native';
import StepStyle, { IStepsStyle } from './style/index.native';

export interface StepsProps extends StepsPropsType {
  direction?: 'vertical' | 'horizontal';
  size?: string;
  finishIcon?: string;
  styles?: any;
  children: React.ReactElement<any>[];
}

export interface StepsNativeProps extends StepsProps {
  styles?: IStepsStyle;
}

const StepStyles = StyleSheet.create<any>(StepStyle);

export default class Steps extends React.Component<StepsNativeProps, any> {
  static Step: any;

  static defaultProps = {
    direction: '',
    styles: StepStyles,
  };

  constructor(props: StepsNativeProps) {
    super(props);
    this.state = {
      wrapWidth: 0,
    };
  }

  onLayout = (e: LayoutChangeEvent) => {
    this.setState({
      wrapWidth: e.nativeEvent.layout.width,
    });
  }

  render() {
    const children = this.props.children;
    const direction = this.props.direction === 'horizontal' ? 'row' : 'column';
    const styles = this.props.styles!;
    return (
      <View
        style={{ flexDirection: direction }}
        onLayout={e => {
          this.onLayout(e);
        }}
      >
        {React.Children.map(children, (ele, idx) => {
          let errorTail = -1;
          if (idx < children.length - 1) {
            const status = children[idx + 1].props.status;
            if (status === 'error') {
              errorTail = idx;
            }
          }
          return React.cloneElement(ele as any, {
            index: idx,
            last: idx === (children as any[]).length - 1,
            direction: this.props.direction,
            current: this.props.current,
            width: 1 / ((children as any[]).length - 1) * this.state.wrapWidth,
            size: this.props.size,
            finishIcon: this.props.finishIcon,
            errorTail,
            styles,
          });
        })}
      </View>
    );
  }
}

Steps.Step = RNStepsItem;
