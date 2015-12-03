import Promise from 'promise';

const formUtil = {
  componentDidMount(){
    const self = this;
    self.initResumeEventMgr.call(self);

    self._childFormElements.forEach((item)=> {
      if (item.props.init) {
        item.props.init.call(self);
      }
    });
  },

  componentWillUnmount() {
    document.removeEventListener('resume', this.onResume);
  },

  pushWindow(url, config){
    const defaultPara = {
      canPullDown: 'NO',
      pullRefresh: 'NO',
      showOptionMenu: 'NO',
      showProgress: 'YES',
      defaultTitle: '口碑商家',
      ssoLoginEnabled: 'NO',
      readTitle: true
    };

    //merge config
    for (const key in config) {
      defaultPara[key] = config[key];
    }
    AlipayJSBridge.call('pushWindow', {url: url, param: defaultPara});
  },
  registerResumeHandler(type, fn){
    const self = this;
    self.resumeEventMap[type] = fn;
  },

  onResume(e) {
    const data = e.data;
    if (typeof(data) !== 'undefined') {
      const type = data.type;
      const resumeEventMap = this.resumeEventMap;

      if (resumeEventMap[type] && (typeof resumeEventMap[type] === 'function')) {
        resumeEventMap[type].call(this, data);
      }
    }
  },

  initResumeEventMgr(){
    const self = this;
    self.resumeEventMap = {};
    document.addEventListener('resume', this.onResume);
  },

  registerInput(item){
    this._childFormElements = this._childFormElements || [];
    this._childFormElements.push(item);
  },
  collectData(){
    let finalData = {};
    const concatObj = function (objA, objB) {
      objA = objA || {};
      objB = objB || {};
      const result = {};
      for (const key in objA) {
        result[key] = objA[key];
      }
      for (const key in objB) {
        result[key] = objB[key];
      }
      return result;
    };

    this._childFormElements.map(function (item) {
      if (item.state && item.state.extraFormData) {
        finalData = concatObj(finalData, item.state.extraFormData);
      }
      if (item.props && item.props.name) {
        const tmpObj = {};
        tmpObj[item.props.name] = item.state.value;
        finalData = concatObj(finalData, tmpObj);
      }
    });

    return finalData;
  },
  startValidate(){
    console.log('start validate');
    const self = this;
    return new Promise(function (fulfill, reject) {
      let promiseChain = Promise.resolve(true);
      self._childFormElements.forEach((item)=> {
        promiseChain = promiseChain.then(function (prev) {
          const validateResult = item.props.validate();
          if (validateResult) {
            return true;
          } else {
            throw new Error('failed to resolve');
          }
        });
      });

      promiseChain = promiseChain.then(function () {
        fulfill();
      });

      promiseChain.catch(function (e) {
        console.log(e);
        reject();
      });
    });
  }
};

module.exports = formUtil;
