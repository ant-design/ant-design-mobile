import React from 'react';

interface CarouselProps {
  selectedIndex?: number;
  dots?: boolean;
  vertical?: boolean;
  autoplay?: boolean;
  infinite?: boolean;
  children?: any;
  /** web only */
  easing?: string;
  beforeChange?: (from: number, to: number) => void;
  afterChange?: (current: number) => void;
  style?: React.CSSProperties;
}

export default CarouselProps;
