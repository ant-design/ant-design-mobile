interface CarouselProps {
  mode?: 'banner' | 'card';
  effect?: 'scrollx' | 'fade';
  dots?: boolean;
  vertical?: boolean;
  autoplay?: boolean;
  easing?: string;
  beforeChange?: (from: number, to: number) => void;
  afterChange?: (current: number) => void;
}

export default CarouselProps;
