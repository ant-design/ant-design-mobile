interface InputItemProps {
    prefixCls?: string;
    prefixListCls?: string;
    style?: React.CSSProperties;
    type?: 'hasLine';
    format?: 'text'|'bankCard'|'phone'|'password'|'number';
    editable?: boolean;
    name?: string;
    value?: string;
    placeholder?: string;
    clear?: boolean;
    maxLength?: number;
    onChange?: Function;
    onBlur?: Function;
    onFocus?: Function;
    extra?: React.ReactNode;
    onExtraClick?: Function;
    error?: boolean;
    onErrorClick?: Function;
    size?: 'large'|'small';
    labelNumber?: number;
    labelPosition?: 'left'|'top';
    textAlign?: 'left'|'center';
}

export default InputItemProps;
