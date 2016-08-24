import * as React from 'react';

interface CarouselProps {
  mode?: 'banner' | 'card';
  effect?: 'scrollx' | 'fade';
  dots?: boolean;
  vertical?: boolean;
  autoplay?: boolean;
  easing?: string;
  infinite?: boolean;
  beforeChange?: (from: number, to: number) => void;
  afterChange?: (current: number) => void;
  style?: React.CSSProperties;
}

export default CarouselProps;
