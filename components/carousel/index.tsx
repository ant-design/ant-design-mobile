import React from 'react';
import classnames from 'classnames';
import ReactCarousel from 'rmc-nuka-carousel';
import CarouselProps from './PropsType';

export default class Carousel extends React.Component<CarouselProps, any> {
  static defaultProps = {
    prefixCls: 'am-carousel',
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: false,
    edgeEasing: 'linear',
    cellAlign: 'center',
    selectedIndex: 0,
    dotStyle: {},
    dotActiveStyle: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: this.props.selectedIndex,
    };
  }

  onChange = (index) => {
    this.setState({
      selectedIndex: index,
    }, () => {
      if (this.props.afterChange) {
        this.props.afterChange(index);
      }
    });
  }

  render() {
    const {
      infinite, selectedIndex, beforeChange, afterChange, dots, ...restProps,
    } = this.props;

    const { prefixCls, dotActiveStyle, dotStyle, className, vertical } = restProps;

    const newProps = {
      ...restProps,
      wrapAround: infinite,
      slideIndex: selectedIndex,
      beforeSlide: beforeChange,
    };

    let Decorators: any[] = [];
    const { selectedIndex: current } = this.state;

    if (dots) {
      Decorators = [{
        component: ({ slideCount, slidesToScroll }) => {
          const arr: number[] = [];
          for (let i = 0; i < slideCount; i += slidesToScroll) {
            arr.push(i);
          }
          const dotDom = arr.map(index => {
            const dotCls = classnames(`${prefixCls}-wrap-dot`, {
              [`${prefixCls}-wrap-dot-active`]: index === current,
            });
            const _dotStyle = index === current ? dotActiveStyle : dotStyle;
            return (
              <div className={dotCls} key={index}>
                <span style={_dotStyle} />
              </div>
            );
          });
          return (
            <div className={`${prefixCls}-wrap`}>
              {dotDom}
            </div>
          );
        },
        position: 'BottomCenter',
      }];
    }

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-vertical`]: vertical,
    });

    return (
      <ReactCarousel
        {...newProps}
        className={wrapCls}
        decorators={Decorators}
        afterSlide={this.onChange}
      />
    );
  }
}
