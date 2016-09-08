import * as React from 'react';

interface CarouselProps {
  selectedIndex?: number;
  dots?: boolean;
  vertical?: boolean;
  autoplay?: boolean;
  children?: any;
  easing?: string;
  infinite?: boolean;
  beforeChange?: (from: number, to: number) => void;
  afterChange?: (current: number) => void;
  style?: React.CSSProperties;
}

export default CarouselProps;
