# Modal

- order: 0

---

````jsx
import { Modal, ListWrap, ListHeader, CheckboxItem, ListFooter, ListBody, ListItem, Button} from 'antm';
import { createForm } from 'rc-form';
function noop(){}

let App = React.createClass({
  render(props) {
    return (
      <div>
        <ListWrap>
          <ListHeader>列表头部,没有附带说明</ListHeader>
          <ListBody>
            <ModalListItem form={this.props.form} />
          </ListBody>
          <ListFooter>列表尾部</ListFooter>
        </ListWrap>
      </div>
    );
  }
});
App = createForm()(App);

let ModalListItem = React.createClass({
  render(){
    const { getFieldProps } = this.props.form;
    return (
        <ListSelector data={
            [{
              name:'浙江',
              id:'zj'
            }, {
              name:'上海',
              id:'sh'
            }, {
              name:'名字很长很长很长的',
              id:'shaa'
            }]
          }
          {...getFieldProps('region', {
            initialValue:{
              zj:true
            }
          })}
        >
          <ListItem extra="请选择" arrow="horizonal">所在地区</ListItem>
        </ListSelector>
    );
  }
});

let ListSelector = React.createClass({
  getInitialState(){
    return {open :false};
  },
  getDefaultProps(){
    return {
      data  : [],
      value : {},
      onChange:noop
    };
  },
  componentDidMount(){},
  onFinish() {
    this.props.onSelect(this.props.form.getFieldsValue());
  },
  componentWillUnmount(){},
  openModal(){
    this.setState({open: true});
  },
  willReceiveProps(nextProps){
    console.log(nextProps);
  },
  confirmSelector(){
    let value = this.props.form.getFieldsValue();
    console.log('field value');
    console.log(value);

    this.props.onChange(value);
    this.setState({open: false});
  },
  render(){
    // console.log(this.props.value);
    const inArray = function(arr, item){
      let result = false;
      arr.forEach((i)=>{
        if(i === item) result = true;
      });
      return result;
    };

    const { getFieldProps } = this.props.form;

    const selectedKey = [];
    const selectedItemNames = [];
    this.props.data.forEach((d)=>{
      if(this.props.value[d.id]){
        selectedItemNames.push(d.name);
        selectedKey.push(d.id);
      }
    });

    const renderData = this.props.data.map((data)=>{
      if(inArray(selectedKey, data.id)){
        data.checked = true;
      } else{
        data.checked = false;
      }
      return data;
    });

    let items = renderData.map((data)=>{
      return (
        <CheckboxItem {...getFieldProps(data.id, {
          valuePropName:'checked',
          initialValue: data.checked}) } key={'selector_' + data.id}>
          {data.name}
        </CheckboxItem>
      );
    });

    const openEl = (
      <Modal show={true}>
        <ListWrap>
          <ListBody>
            {items}
          </ListBody>
        </ListWrap>
        <Button mode="blue" onClick={this.confirmSelector}>确定</Button>
      </Modal>
    );

    const extraProps = {
      onClick: this.openModal,
    };
    if(selectedItemNames.length){
      extraProps.extra = selectedItemNames.join(',');
    }
    const closeEl = React.cloneElement(this.props.children, extraProps);
    return this.state.open ? openEl : closeEl;
  }
});
ListSelector = createForm()(ListSelector);

ReactDOM.render(
  <App />
, document.getElementById('components-modal-demo-basic'));
````