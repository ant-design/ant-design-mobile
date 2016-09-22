---
order: 0
title: 基本
---

列表主体内容的容器. ([rc-form 文档](https://github.com/react-component/form))

````jsx
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';

let TextareaItemExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List
          renderHeader={() => '多行输入'}
        >
          <TextareaItem
            title="非受控"
            defaultValue=""
            placeholder="设置defaultValue,不设置value"
          />
          <TextareaItem
            title="受控组件"
            value=""
            placeholder="设置value,不设置defaultValue"
            clear
          />
          <TextareaItem
            {...getFieldProps('note2', {
              initialValue: '',
            })}
            title="单行"
            placeholder="请填写"
            clear={false}
            onBlur={() => { console.log('onBlur'); }}
            onFocus={(value) => { console.log('onFocus'); console.log(value); }}
          />
          <TextareaItem
            {...getFieldProps('note4', {
              initialValue: '最大长度',
            })}
            count={30}
            clear
          />
          <TextareaItem
            {...getFieldProps('note3', {
              initialValue: '',
            })}
            title="高度自适应"
            autoHeight
            clear
            labelNumber={5}
          />
          <TextareaItem
            {...getFieldProps('note1', {
              initialValue: '固定行数',
            })}
            rows={3}
            placeholder="固定行数,rows"
            clear
            onBlur={() => { console.log('onBlur'); }}
            onFocus={(value) => { console.log('onFocus'); console.log(value); }}
          />
        </List>
        <List
          renderHeader={() => '标题，可自定义'}
        >
          <TextareaItem
            {...getFieldProps('title1', {
              initialValue: '',
            })}
            clear
            placeholder="请填写姓名"
          />
          <TextareaItem
            {...getFieldProps('title2', {
              initialValue: '',
            })}
            clear
            title="姓名"
            placeholder="标题可以是文字"
          />
          <TextareaItem
            {...getFieldProps('title3', {
              initialValue: '',
            })}
            title={<img src="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" style={{ width: '0.56rem', height: '0.56rem' }} />}
            clear
            placeholder="标题可以自定义"
          />
        </List>
        <List
          renderHeader={() => '清除'}
        >
          <TextareaItem
            {...getFieldProps('clear1', {
              initialValue: '',
            })}
            clear
            title="姓名"
            placeholder="提供清除文字功能"
          />
          <TextareaItem
            {...getFieldProps('clear2', {
              initialValue: '',
            })}
            title="姓名"
            placeholder="不提供清除文字功能"
          />
        </List>
        <List
          renderHeader={() => '计数'}
        >
          <TextareaItem
            {...getFieldProps('count', {
              initialValue: '我的意见是...',
            })}
            rows={5}
            placeholder="计数功能"
            clear
            count={100}
            onBlur={() => { console.log('onBlur'); }}
            onFocus={(value) => { console.log('onFocus'); console.log(value); }}
          />
        </List>
        <List
          renderHeader={() => '不可编辑 禁用'}
        >
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
        <List
          renderHeader={() => '校验'}
        >
          <TextareaItem
            {...getFieldProps('note8', {
              initialValue: '多行输入,带计数功能,count+rows',
            })}
            title="报错样式"
            rows={5}
            placeholder="计数功能"
            clear
            error
            onErrorClick={() => { alert('点击报错'); }}
            count={100}
            onBlur={() => { console.log('onBlur'); }}
            onFocus={(value) => { console.log('onFocus'); console.log(value); }}
          />
        </List>
      </div>
    );
  },
});

TextareaItemExample = createForm()(TextareaItemExample);

ReactDOM.render(<TextareaItemExample />, mountNode);
