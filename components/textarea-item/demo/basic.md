---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

([rc-form 文档](https://github.com/react-component/form))

````jsx
import { List, TextareaItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

class TextareaItemExample extends React.Component {
  state = {
    focused: false,
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => '自定义获取光标'}>
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
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={() => {
                this.setState({
                  focused: true,
                });
              }}
            >
              点击获取光标
            </div>
          </List.Item>
        </List>
        <WhiteSpace />
        <List renderHeader={() => '受控 / 非受控'}>
          <TextareaItem
            {...getFieldProps('control')}
            title="受控组件"
            placeholder="Hello World"
          />
          <TextareaItem
            {...getFieldProps('control')}
            title="非受控组件"
            placeholder="请输入内容"
          />
        </List>
        <List renderHeader={() => '高度自适应 / 固定'}>
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
        </List>
        <WhiteSpace />
        <List renderHeader={() => '带清除按钮'}>
          <TextareaItem
            {...getFieldProps('clear1')}
            clear
            title="标题"
            placeholder="输入会显示清除按钮"
          />
        </List>
        <WhiteSpace />
        <List renderHeader={() => '标题可自定义（文字 / 图片 / 无标题）'}>
          <TextareaItem
            {...getFieldProps('title3')}
            title={<img src="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" style={{ width: '0.56rem', height: '0.56rem' }} />}
            placeholder="标题可以自定义"
          />
        </List>
        <WhiteSpace />
        <List renderHeader={() => '限制输入字符数量'}>
          <TextareaItem
            {...getFieldProps('note4')}
            placeholder="最多输入10个字符"
            count={10}
          />
        </List>
        <WhiteSpace />
        <List renderHeader={() => '带计数'}>
          <TextareaItem
            {...getFieldProps('count', {
              initialValue: '计数功能,我的意见是...',
            })}
            rows={5}
            count={100}
          />
        </List>
        <WhiteSpace />
        <List renderHeader={() => '不可编辑 / 禁用'}>
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
        </List>
      </div>
    );
  }
}

const TextareaItemExampleWrapper = createForm()(TextareaItemExample);

ReactDOM.render(<TextareaItemExampleWrapper />, mountNode);
````


````css
.demoTitle:before,
.demoTitle:after {
  border-bottom: none;
}
````
