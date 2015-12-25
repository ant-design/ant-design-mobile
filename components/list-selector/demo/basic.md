# List Selector

- order: 0

---

````jsx

import { ListWrap, ListHeader, Button, ListBody, ListItem, InputItem, ListSelector, Modal } from 'antm';
import { createForm } from 'rc-form';
import { Router, Route } from 'react-router';
const PropTypes = React.PropTypes;

let ListSelectorExample = React.createClass({
  propTypes: {
    initialValue: PropTypes.array,
    form: PropTypes.object,
  },
  onClick() {
    window.history.back();
  },
  render(props) {
    const { getFieldProps } = this.props.form;

    return (
      <Modal show={true}>
        <ListSelector {...getFieldProps('', {
          initialValue: this.props.initialValue,
        })}
        data={this.props.data}
        type="multiple"
        />
        <div className="am-wingblank am-whitespace-10">
          <Button
            onClick={this.onClick}
          >保存</Button>
        </div>
      </Modal>
    );
  }
});
ListSelectorExample = createForm()(ListSelectorExample);

const ListSelectorPicker = React.createClass({
  propTypes: {
    childForm: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.array,
  },
  onClick() {
    window.location.hash = '/listselector';
  },
  render() {
    const { value, childForm } = this.props;
    const valueEl = value.length > 0 ?
      <ListItem
        extra={value.join(',')}
        arrow="horizontal"
        onClick={this.onClick}
      >选择城市</ListItem> :
      <ListItem
        extra="请选择"
        arrow="horizontal"
        onClick={this.onClick}
      >选择城市</ListItem>;
    return (<div>
      {valueEl}
      {childForm ? React.cloneElement(childForm, {
        onDestroy: this.props.onChange,
        data: this.props.data,
        initialValue: value || {},
      }) : null}
    </div>);
  },
});

let pageForm = React.createClass({
  propTypes: {
    initialValue: PropTypes.array,
    form: PropTypes.object,
    children: PropTypes.any,
  },
  getDefaultProps() {
    return {
      initialValue: [],
      data: [{
        name:'浙江',
        id:'zj'
      }, {
        name:'上海',
        id:'sh'
      }, {
        name:'名字很长很长很长的',
        id:'shaa'
      }]
    };
  },
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
    <ListWrap>
      <ListHeader>列表单选,多选</ListHeader>
      <ListBody>
        <InputItem
          {...getFieldProps('rate', {
            initialValue: '9',
            valuePropName: 'value',
          })}
          name="rate"
          placeholder="请填写"
          clear={true}
        >折扣大小</InputItem>
        <ListSelectorPicker childForm={this.props.children} {...getFieldProps('period', {
          initialValue: this.props.initialValue,
        })}
          data={this.props.data}
        />
      </ListBody>
    </ListWrap>);
  }
});

pageForm = createForm()(pageForm);

ReactDOM.render(<Router>
  <Route path="/" component={pageForm}>
    <Route path="/listselector" component={ListSelectorExample}/>
  </Route>
</Router>, document.getElementById('components-list-selector-demo-basic'));
````
