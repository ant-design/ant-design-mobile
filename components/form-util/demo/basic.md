# 基本

- order: 0

配合formUtil / WindowUtil, 演示一个典型的业务表单场景。

---

````jsx
import { ListWrap, ListHeader, ListFooter, ListBody, ListItem, FormUtil, WindowUtil, InputItem, CheckboxItem } from 'antm';
import Promise from 'promise';

const EventMgmt = function(){
  let self = this;

  self.queue = {};
  self.fired = [];

  return {
    fire(event, param) {
      let queue = self.queue[event];
      if (typeof queue === 'undefined') {
        return;
      }

      queue.map((func)=>{
        func(param);
      });
    },
    on(event, callback) {
      if (typeof self.queue[event] === 'undefined') {
        self.queue[event] = [];
      }
      self.queue[event].push(callback);
    },
    off(event){
      self.queue[event] = [];
    }
  };
};

let pageFormInstance;
let eventBus = new EventMgmt();

const licenceInput = {
  init(){
    WindowUtil.registerResumeHandler.call(this, 'category', function(data){
      this.setState({
        extra : '已上传'
      });
      console.log(data);
      console.log('category');
    });
  },
  extraFormData:{
    extraA : '000',
    extraB : '111'
  },
  validate(){
    return true;
  },
  onClick(){
    console.log('on click');
    WindowUtil.pushWindow('http://crmhome.stable.alipay.net/shop/shopCate.h5');
  }
};

const photoInput = {
  init(){
    // WindowUtil.registerResumeHandler("category",function(data){
    //   console.log(data);
    //   console.log("category");
    // });
  },
  validate(){
    return new Promise(function(fulfill, reject){
      setTimeout(function(){
        fulfill(true);
      }, 200);
    });
  },
  onClick(){
    //TODO : 回复state.extra
    this.setState({
      extra : '已上传'
    });
  }
};

const CouponIdInput = {
  didMount(){
    console.log('init event');
  },
  willUnmount(){
    console.log('did unmount');
  },
  init(){

  },
  validate(){
    return /^\d+$/.test(this.state.value);
  },
  onChange(){
    console.log('input changed');
  },
  extraFormData:{
    'pic1':'22', 'pic2':'222'
  }
};

const couponCheckbox = {
  validate(){
    return this.state.value;
  },
  onChange(){
    eventBus.fire('couponCheckUpdated', this.state.value);
  },
  extraFormData:{
    'pic1':'22', 'pic2':'222'
  }
};

const businessFormUtil = {
  componentWillMount() {
    WindowUtil.initResumeEventMgr();

    eventBus.on('couponCheckUpdated', (newCheckValue)=>{
      pageFormInstance.setState({showCouponId : !newCheckValue});
    });
  },
  componentWillUnmount(){
    eventBus.off('couponCheckUpdated');
  },
  dealSubmit(){
    const self = this;
    self.startValidate.call(self)
      .then(()=>{
        console.log('passed validation');
        self.startUpload.call(self);
      }, (e)=>{
        console.log(e);
        console.log('failed in form validation');
      });
  },
  startUpload(){
    const self = this;
    const data = self.collectData();
    alert(JSON.stringify(data));
  }
};

const PageForm = React.createClass({
  mixins : [FormUtil, businessFormUtil],
  getInitialState(){
    return {
      showCouponId : false
    };
  },
  render(){
    let couponIdInput = this.state.showCouponId ? (
      <InputItem
        ref="form_couponId"
        label="优惠编号"
        name="couponId"
        defaultValue=""
        placeholder="number only"
        clear={true}
        icon="camera"
        {...CouponIdInput}
      />
    ) : null;

    return (
      <div>
        <ListWrap >
          <ListHeader label="证照补全"/>
          <ListBody>
          <CheckboxItem
            ref="form_couponSwitch"
            label="使用优惠"
            name="useCoupon"
            defaultValue={false}
            {...couponCheckbox}
          />
          {couponIdInput}
          <ListItem
            ref="form_shopLicence"
            content="营业执照"
            extra="请上传"
            arrow="horizontal"
            {...licenceInput}
          />
          <ListItem
            ref="form_shopPhoto"
            content="其他照片"
            extra="请上传"
            arrow="horizontal"
            {...photoInput}
          />
          </ListBody>
          <ListFooter>我是表尾</ListFooter>
        </ListWrap>
        <button ref="uploadBtn" onClick={this.dealSubmit}>DoIT</button>
      </div>
    );
  }
});

pageFormInstance = ReactDOM.render(
  <PageForm />
, document.getElementById('util-demo-basic'));
````
