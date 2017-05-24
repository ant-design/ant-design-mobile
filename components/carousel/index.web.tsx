import React from 'react';
import createReactClass from 'create-react-class';
import classNames from 'classnames';
import ReactCarousel from 'rmc-nuka-carousel';
import assign from 'object-assign';
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
    const { className, prefixCls } = this.props;
    let props = assign({}, this.props);
    props = assign(props, {
      wrapAround: props.infinite,
      slideIndex: props.selectedIndex,
      beforeSlide: props.beforeChange,
    });

    let Decorators: any[] = [];
    const current = this.state.selectedIndex;
    if (props.dots) {
      Decorators = [{
        component: createReactClass({
          render() {
            const { slideCount, slidesToScroll } = this.props;
            const arr: number[] = [];
            for (let i = 0; i < slideCount; i += slidesToScroll) {
              arr.push(i);
            }
            const dotDom = arr.map(function(index) {
              const dotCls = classNames({
                [`${prefixCls}-wrap-dot`]: true,
                [`${prefixCls}-wrap-dot-active`]: index === current,
              });
              return (
                <div className={dotCls} key={index}>
                  <span />
                </div>
              );
            });
            return (
              <div className={`${prefixCls}-wrap`}>
                {dotDom}
              </div>
            );
          },
        }),
        position: 'BottomCenter',
      }];
    }

    ['infinite', 'selectedIndex', 'beforeChange', 'afterChange', 'dots'].forEach(prop => {
      if (props.hasOwnProperty(prop)) {
        delete props[prop];
      }
    });

    const wrapCls = classNames({
      [className as string]: className,
      [prefixCls as string]: true,
      [`${prefixCls}-vertical`]: props.vertical,
    });

    return (
      <ReactCarousel
        {...props}
        className={wrapCls}
        decorators={Decorators}
        afterSlide={this.onChange}
      />
    );
  }
}
