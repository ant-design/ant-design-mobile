import * as React from 'react';
import ReactCarousel from 'nuka-carousel';
import assign from 'object-assign';
import Pagination from '../pagination/index.web';
import CarouselProps from './CarouselPropTypes';

export default class Carousel extends React.Component<CarouselProps, any> {
  static defaultProps = {
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

  renderDots() {
    return (
      <Pagination
        mode="pointer"
        current={this.state.selectedIndex}
        total={this.props.children.length}
      />
    );
  }

  render() {
    const children = this.props.children;
    if (!children) {
      return null;
    }
    let props = assign({}, this.props);

    if (props.infinite) {
      props.wrapAround = true;
    }

    if (props.beforeChange) {
      props.beforeSlide = props.beforeChange;
    }

    if (props.afterChange) {
      props.afterSlide = props.afterChange;
    }

    let className = 'am-carousel';
    if (props.vertical) {
      className = `${className} am-carousel-vertical`;
    }

    return (
      <div className={className}>
        <ReactCarousel
          {...props}
          decorators={[]}
          afterSlide={this.onChange}
        />
        {props.dots && this.renderDots()}
      </div>
    );
  }
}
