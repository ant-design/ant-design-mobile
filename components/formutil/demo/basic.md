# 基本

- order: 0

列表主体内容的容器。

---

````jsx
import Promise from 'promise';
import { ListWrap, ListHeader, ListFooter, ListBody,ListItem} from '@alipay/antm';
// import formUtil from "antm.form";

var formUtil = {
  componentDidMount:function(){
    var self = this;
    self.initResumeEventMgr.call(self);

    self._childFormElements.forEach((item)=>{
      if(item.props.init){
        item.props.init.call(self);
      }
    });
  },
  pushWindow:function(url,config){
    var defaultPara = {
      canPullDown     : "NO",
      pullRefresh     : "NO",
      showOptionMenu  : "NO",
      showProgress    : "YES",
      defaultTitle    : "口碑商家",
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
    var self = this;
    self.resumeEventMap[type] = fn;
  },
  initResumeEventMgr : function(){
    var self = this;
    self.resumeEventMap = {};
    document.addEventListener('resume', function(e){
      var data = e.data;
      if (typeof(data) != "undefined") {
        var type = data.type;
        var resumeEventMap = self.resumeEventMap;

        if(resumeEventMap[type] && (typeof resumeEventMap[type] == "function")){
          resumeEventMap[type].call(self, data);
        }
      }
    });
  },

  registerInput:function(item){
    var self = this;
    this._childFormElements = this._childFormElements || [];
    this._childFormElements.push(item);
  },
  collectData:function(){
    var finalData = {};
    var concatObj = function(objA, objB){
      objA = objA || {};
      objB = objB || {};
      var result = {};
      for(var key in objA){
        result[key] = objA[key];
      }
      for(var key in objB){
        result[key] = objB[key];
      }
      return result;
    };

    this._childFormElements.map(function(item){
      if(item.state && item.state.extraFormData){
        finalData = concatObj(finalData,item.state.extraFormData);
      }
      if(item.props && item.props.name){
        var tmpObj = {};
        tmpObj[item.props.name] = item.state.value;
        finalData = concatObj(finalData,tmpObj);
      }
    });

    return finalData;
  },
  startValidate:function(){
    console.log("start validate");
    var self = this;
    return new Promise(function(fulfill,reject){
      var promiseChain = Promise.resolve(true);
      self._childFormElements.forEach((item)=>{
        promiseChain = promiseChain.then(function(prev){
          var validateResult = item.props.validate();
          if(validateResult){
            return true;
          }else{
            throw new Error("failed to resolve");
          }
        });
      });

      promiseChain = promiseChain.then(function(){
        fulfill();
      });

      promiseChain.catch(function(e){
        console.log(e);
        reject();
      });
    });
  }
};

//TODO : state - 请上传
//link="http://www.baidu.com"
var licenceInput = {
  init:function(){
    formUtil.registerResumeHandler.call(this,"category",function(data){
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
    formUtil.pushWindow("http://crmhome.stable.alipay.net/shop/shopCate.h5");
  }
};

var photoInput = {
  init:function(){
    // formUtil.registerResumeHandler("category",function(data){
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
    formUtil.pushWindow("http://crmhome.stable.alipay.net/shop/shopCate.h5");
  }
};

var businessFormUtil = {
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

// <Form>
//  <Input didMount={this.registerInput} value="456" {...shopPhoneInput} />
//  <Input didMount={this.registerInput} value="123" {...shopNameInput} />
// </Form>

var PageForm = React.createClass({
  mixins : [formUtil, businessFormUtil],
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
, document.getElementById('react-content'));
````
