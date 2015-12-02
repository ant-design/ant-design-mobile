import Promise from 'promise';

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


module.exports = formUtil;

