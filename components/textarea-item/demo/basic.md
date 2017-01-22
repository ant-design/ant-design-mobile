---
order: 0
title: 示例集合
---

([rc-form 文档](https://github.com/react-component/form))

````__react
import { List, TextareaItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

let TextareaItemExample = React.createClass({
  getInitialState() {
    return {
      focused: false,
    };
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (<List>
      <TextareaItem
        title="标题"
        placeholder="自动获取光标"
        data-seed="logId"
        autoFocus
        autoHeight
      />
      <TextareaItem
        title="标题"
        placeholder="点击下方按钮该输入框会获取光标"
        data-seed="logId"
        autoHeight
        focused={this.state.focused}
        onFocus={() => {
          this.setState({
            focused: false,
          });
        }}
      />
      <List.Item>
        <Button
          onClick={() => {
            this.setState({
              focused: true,
            });
          }}
          type="primary"
        >点击获取光标</Button>
      </List.Item>
      <TextareaItem
        {...getFieldProps('control')}
        title="标题"
        placeholder="请输入（受控）"
      />

      <TextareaItem
        {...getFieldProps('clear1')}
        clear
        title="标题"
        placeholder="输入会显示清除按钮"
      />

      <TextareaItem
        {...getFieldProps('note2')}
        title="单行显示"
        placeholder="请填写"
      />
      <TextareaItem
        {...getFieldProps('note4')}
        placeholder="最多输入10个字符"
        count={10}
      />
      <TextareaItem
        {...getFieldProps('count', {
          initialValue: '计数功能,我的意见是...',
        })}
        rows={5}
        count={100}
      />

      <TextareaItem
        {...getFieldProps('note3')}
        title="高度自适应"
        autoHeight
        labelNumber={5}
      />
      <TextareaItem
        {...getFieldProps('note1')}
        rows={3}
        placeholder="固定行数,rows"
      />
      <TextareaItem
        {...getFieldProps('title3')}
        title={<img src="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" style={{ width: '0.56rem', height: '0.56rem' }} />}
        placeholder="标题可以自定义"
      />

      <TextareaItem
        {...getFieldProps('note6', {
          initialValue: '不可编辑',
        })}
        title="姓名"
        editable={false}
      />
      <TextareaItem
        value="这个是禁用的样式"
        title="姓名"
        disabled
      />
    </List>);
  },
});

TextareaItemExample = createForm()(TextareaItemExample);

ReactDOM.render(<TextareaItemExample />, mountNode);
````


````css
.demoTitle:before,
.demoTitle:after {
  border-bottom: none;
}
````
