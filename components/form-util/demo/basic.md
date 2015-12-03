# 基本

- order: 0

配合formUtil / WindowUtil, 演示一个典型的业务表单场景。

---


````jsx
import { ListWrap, ListHeader, ListFooter, ListBody,ListItem, FormUtil ,InputItem} from 'antm';
import Promise from 'promise';

var windowUtil = {
  pushWindow:function(url,config){
    var defaultPara = {
      canPullDown     : "NO",
      pullRefresh     : "NO",
      showOptionMenu  : "NO",
      showProgress    : "YES",
      defaultTitle    : "支付宝",
      ssoLoginEnabled : "NO",
      readTitle       : true
    };

    //merge config
    for(var key in config){
      defaultPara[key] = config[key];
    }
    AlipayJSBridge.call("pushWindow",{url : url, param : defaultPara});

  },
  registerResumeHandler : function(type, fn){
    window._resumeEventMap[type] = fn;
  },
  initResumeEventMgr : function(){
    window._resumeEventMap = {};
    document.addEventListener('resume', function(e){
      var data = e.data;
      if (typeof(data) != "undefined") {
        var type = data.type;
        var _resumeEventMap = window._resumeEventMap;

        if(_resumeEventMap[type] && (typeof _resumeEventMap[type] == "function")){
          _resumeEventMap[type].call(window, data);
        }
      }
    });
  }
}


var licenceInput = {
  init:function(){
    windowUtil.registerResumeHandler.call(this,"category",function(data){
      this.setState({
        extra : "已上传"
      });
      console.log(data);
      console.log("category");
    });
  },
  extraFormData:{
    extraA : "000",
    extraB : "111"
  },
  validate: function(){
    return true;
  },
  onClick:function(){
    console.log("on click");
    windowUtil.pushWindow("http://crmhome.stable.alipay.net/shop/shopCate.h5");
  }
};

var photoInput = {
  init:function(){
    // windowUtil.registerResumeHandler("category",function(data){
    //   console.log(data);
    //   console.log("category");
    // });
  },
  validate: function(){
    return new Promise(function(fulfill,reject){
      setTimeout(function(){
        fulfill(true);
      },1000);
    });
  },
  onClick:function(){
    windowUtil.pushWindow("http://crmhome.stable.alipay.net/shop/shopCate.h5");
  }
};

var businessFormUtil = {
  componentWillMount:function(argument) {
    windowUtil.initResumeEventMgr();
  },
  dealSubmit : function(){
    var self = this;
    self.startValidate.call(self)
      .then(function(){
        console.log("passed validation");
        self.startUpload.call(self);
      },function(e){
        console.log(e);
        console.log("failed in form validation");
      })
  },
  startUpload:function(){
    var self = this;
    var data = self.collectData();

    console.log(data);
  }
};

var PageForm = React.createClass({
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
          </ListBody>
          <ListFooter content="我是表尾"/>
        </ListWrap>
        <button ref="uploadBtn" onClick={this.dealSubmit}>DoIT</button>
      </div>
    );
  }
});

var formInstance = ReactDOM.render(
  <PageForm />
, document.getElementById('components-formutil-demo-basic'));
````
