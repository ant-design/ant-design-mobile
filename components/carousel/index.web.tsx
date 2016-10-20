import React from 'react';
import classNames from 'classnames';
import ReactCarousel from 'nuka-carousel';
import assign from 'object-assign';
import CarouselProps from './CarouselPropTypes';

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
    this.onChange = this.onChange.bind(this);
  }

  onChange(index) {
    this.setState({selectedIndex: index});
  }

  render() {
    const { prefixCls, children } = this.props;
    const current = this.state.selectedIndex;
    let wrapCls;
    if (!children) {
      return null;
    }
    let props = assign({}, this.props);

    if (props.infinite) {
      props.wrapAround = true;
    }

    if (props.selectedIndex) {
      props.slideIndex = props.selectedIndex;
    }

    if (props.beforeChange) {
      props.beforeSlide = props.beforeChange;
    }

    if (props.afterChange) {
      props.afterSlide = props.afterChange;
    }

    if (props.vertical) {
      wrapCls = `${props.prefixCls} ${props.prefixCls}-vertical`;
    }

    let Decorators: any[] = [];
    if (props.dots) {
      Decorators  = [{
        component: React.createClass({
          render() {
            const self = this;
            const indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
            return (
              <div className={`${prefixCls}-wrap`}>
                {
                  indexes.map(function(index) {
                    const dotCls = classNames({
                      [`${prefixCls}-wrap-dot`]: true,
                      [`${prefixCls}-wrap-dot-active`]: index === current,
                    });
                    return (
                      <div className={dotCls} key={index}>
                        <span></span>
                      </div>
                    );
                  })
                }
              </div>
            );
          },
          getIndexes(count, inc) {
            const arr: number[] = [];
            for (let i = 0; i < count; i += inc) {
              arr.push(i);
            }
            return arr;
          },
        }),
        position: 'BottomCenter',
      }];
    }

    return (
      <div className={wrapCls}>
        <ReactCarousel
          {...props}
          decorators={Decorators}
          afterSlide={this.onChange}
        />
      </div>
    );
  }
}
