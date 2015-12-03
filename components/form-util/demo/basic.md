# 基本

- order: 0

配合formUtil / WindowUtil, 演示一个典型的业务表单场景。

---


````jsx
import { ListWrap, ListHeader, ListFooter, ListBody, ListItem, FormUtil, WindowUtil, InputItem } from 'antm';
import Promise from 'promise';

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
      }, 1000);
    });
  },
  onClick(){
    WindowUtil.pushWindow('http://crmhome.stable.alipay.net/shop/shopCate.h5');
  }
};

const shopAliasInput = {
  init(){

  },
  validate(){
    return true;
  },
  onChange(){
    console.log('input changed');
  },
  extraFormData:{
    'pic1':'22', 'pic2':'222'
  }
};

const businessFormUtil = {
  componentWillMount(argument) {
    WindowUtil.initResumeEventMgr();
  },
  dealSubmit(){
    const self = this;
    self.startValidate.call(self)
      .then(function(){
        console.log('passed validation');
        self.startUpload.call(self);
      }, function(e){
        console.log(e);
        console.log('failed in form validation');
      });
  },
  startUpload(){
    const self = this;
    const data = self.collectData();

    console.log(data);
  }
};

const PageForm = React.createClass({
  mixins : [FormUtil, businessFormUtil],
  render : function(){
    return (
      <div>
        <ListWrap >
          <ListHeader label="证照补全"/>
          <ListBody>
          <ListItem
            content="营业执照"
            extra="请上传"
            arrow="horizontal"
            didMount={this.registerInput}
            {...licenceInput}
          />
          <ListItem
            content="其他照片"
            extra="请上传"
            arrow="horizontal"
            didMount={this.registerInput}
            {...photoInput}
          />
          <InputItem
            label="我"
            name="yyy"
            defaultValue=""
            placeholder="dadads"
            clear={true}
            icon="camera"
            didMount={this.registerInput}
            {...shopAliasInput}
          />
          </ListBody>
          <ListFooter content="我是表尾"/>
        </ListWrap>
        <button ref="uploadBtn" onClick={this.dealSubmit}>DoIT</button>
      </div>
    );
  }
});

ReactDOM.render(
  <PageForm />
, document.getElementById('util-demo-basic'));
````
