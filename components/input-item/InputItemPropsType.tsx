interface InputItemProps {
    /** web only */
    prefixCls?: string;
    /** web only */
    prefixListCls?: string;
    style?: React.CSSProperties;
    /** web only */
    className?: string;
    type?: 'hasLine';
    format?: 'text'|'bankCard'|'phone'|'password'|'number';
    editable?: boolean;
    name?: string;
    value?: string;
    placeholder: string;
    clear?: boolean;
    maxLength?: number;
    onChange?: Function;
    onBlur?: Function;
    onFocus?: Function;
    extra?: React.ReactNode;
    onExtraClick?: Function;
    onExtraPress?: Function;
    error?: boolean;
    onErrorClick?: Function;
    onErrorPress?: Function;
    size?: 'large'|'small';
    labelNumber?: number;
    labelPosition?: 'left'|'top';
    textAlign?: 'left'|'center';
    /** rn only */
    last?: boolean;
    children?: any;
}

export default InputItemProps;
