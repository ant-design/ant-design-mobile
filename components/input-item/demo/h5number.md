---
order: 0
title:
  zh-CN: H5版带小数点数字键盘
  en-US: H5NumberInput
---

## zh-CN

受控组件建议使用([rc-form ](https://github.com/react-component/form))

## en-US

Recommended use of [rc-form ](https://github.com/react-component/form) for controlled component.

````jsx
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

class H5NumberInputExample extends React.Component {
  state = {
    h5focused: false,
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => 'Format'}>
          <InputItem
            {...getFieldProps('h5number', {
              initialValue: '222',
            })}
            type="h5number"
            placeholder="h5number keyboard"
            clear
            maxLength={10}
            autoFocus
          />
          <InputItem placeholder="22">普通键盘</InputItem>
          <InputItem
            {...getFieldProps('h5number2', {
              normalize: (v, prev) => {
                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                  if (v === '.') {
                    return '0.';
                  }
                  return prev;
                }
                return v;
              },
            })}
            type="h5number"
            placeholder="money format"
            onFocus={() => {
              this.setState({
                h5focused: false,
              });
            }}
            focused={this.state.h5focused}
          >数字键盘</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={() => {
                this.setState({
                  h5focused: true,
                });
              }}
            >
          click to focus
        </div>
          </List.Item>
        </List>
      </div>
    );
  }
}

const H5NumberInputExampleWrapper = createForm()(H5NumberInputExample);
ReactDOM.render(<H5NumberInputExampleWrapper />, mountNode);
````

````css
.demoTitle:before,
.demoTitle:after {
  border-bottom: none;
}
````
