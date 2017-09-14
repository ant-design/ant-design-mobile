export interface CardProps {
  full?: boolean;
  style?: {};
}

export interface CardHeaderProps {
  title?: any;
  thumb?: string;
  extra?: any;
  thumbStyle?: {};
  style?: any;
}

export interface CardBodyProps {
  children?: any;
  style?: {};
}

export interface CardFooterProps {
  content?: any;
  extra?: any;
  className?: string;
  style?: {};
}
