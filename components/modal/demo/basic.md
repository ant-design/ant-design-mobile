# Modal

- order: 0

---

````jsx
import { Modal, ListWrap, ListHeader, CheckboxItem, ListFooter, ListBody, ListItem, Button} from 'antm';
import { createForm } from 'rc-form';

let App = React.createClass({
  render(props) {
    return (
      <div>
        <ModalListItem form={this.props.form} />
      </div>
    );
  }
});
App = createForm()(App);

function noop(){}

let ModalListItem = React.createClass({
  getInitialState(){
    return { show: false };
  },
  render(){
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <ListWrap>
          <ListHeader>列表头部,没有附带说明</ListHeader>
          <ListBody>
            <ListSelector data={
                [{
                  name:'浙江',
                  id:'zj'
                }, {
                  name:'上海',
                  id:'sh'
                }]
              }
              {...getFieldProps('region', {
                initialValue:{
                  zj:true
                }
              })}
            >
              <ListItem>Click</ListItem>
            </ListSelector>
          </ListBody>
          <ListFooter>列表尾部</ListFooter>
        </ListWrap>
      </div>
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
      value : [],
      onChange:noop
    };
  },
  componentDidMount(){
    window.globalHook = this.onFinish;
  },
  onFinish() {
    this.props.onSelect(this.props.form.getFieldsValue());
  },
  componentWillUnmount(){
    window.globalHook = null;
  },
  prepareSelector(){
    this.setState({open: true});
  },
  confirmSelector(){
    let value = this.props.form.getFieldsValue();
    this.props.onChange(value);
    this.setState({open: false});
  },
  render(){
    console.log(this.props.value);
    const inArray = function(arr, item){
      let result = false;
      arr.forEach((i)=>{
        if(i === item) result = true;
      });
      return result;
    };

    const { getFieldProps } = this.props.form;

    const renderData = this.props.data.map((data)=>{
      if(inArray(Object.keys(this.props.value), data.id)){
        data.checked = true;
      } else{
        data.checked = false;
      }
      return data;
    });

    let items = renderData.map((data)=>{
      return (
        <CheckboxItem {...getFieldProps(data.id, {initialValue: data.checked}) } key={'selector_' + data.id}>
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

    const closeEl = React.cloneElement(this.props.children, {onClick: this.prepareSelector});
    return this.state.open ? openEl : closeEl;
  }
});
ListSelector = createForm()(ListSelector);

ReactDOM.render(
  <App />
, document.getElementById('components-modal-demo-basic'));
````