interface AccordionProps {
  styles?: any;
  style?: any;
  activeKey?: string | Array<string>;
  defaultActiveKey?: string | Array<string>;
  accordion?: boolean;
  onChange?: (x: any) => void;
}

export default AccordionProps;
