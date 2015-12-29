# List Selector

- order: 0

---

````jsx

import { ListWrap, ListHeader, ListBody, ListItem, ListSelector, Modal } from 'antm';
import { createForm } from 'rc-form';
import { Router, Route } from 'react-router';
const PropTypes = React.PropTypes;

let ListSelectorExample = React.createClass({
  propTypes: {
    initialValue: PropTypes.array,
    form: PropTypes.object,
    onClick: PropTypes.func,
  },
  render(props) {
    const { getFieldProps } = this.props.form;

    return (
      <Modal show={true}>
        <ListSelector {...getFieldProps('', {
          initialValue: this.props.initialValue,
        })}
        data={this.props.data}
        onClick={this.props.onClick}
        needSearch={this.props.needSearch}
        />
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
  getInitialState() {
    return {
      value: this.props.value,
    };
  },
  onClick() {
    window.location.hash = '/listselector';
  },
  _handleClick(el) {
    this.setState({
      value: [el]
    });
  },
  render() {
    const { childForm } = this.props;
    const { value } = this.state;
    const valueEl = value.length > 0 ?
      <ListItem
        extra={value[0].name}
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
        needSearch: true,
        initialValue: value || {},
        onClick: this._handleClick
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
        pinyin:'zhejiang',
        py:'zj',
        id:'zj'
      }, {
        name:'上海',
        pinyin:'shanghai',
        py:'sh',
        id:'sh'
      }, {
        name:'江苏',
        pinyin:'jiangsu',
        py:'js',
        id:'js'
      }, {
        name:'福建',
        pinyin:'fujian',
        py:'fj',
        id:'fj'
      }, {
        name:'山东',
        pinyin:'shandong',
        py:'sd',
        id:'sd'
      }, {
        name:'安徽',
        pinyin:'anhui',
        py:'ah',
        id:'ah'
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
      <ListHeader>列表单选</ListHeader>
      <ListBody>
        <ListSelectorPicker childForm={this.props.children} {...getFieldProps('category', {
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
