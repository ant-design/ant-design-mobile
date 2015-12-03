const windowUtil = {
  pushWindow(url,config){
    const defaultPara = {
      canPullDown     : "NO",
      pullRefresh     : "NO",
      showOptionMenu  : "NO",
      showProgress    : "YES",
      defaultTitle    : "支付宝",
      ssoLoginEnabled : "NO",
      readTitle       : true
    };

    //merge config
    for(const key in config){
      defaultPara[key] = config[key];
    }
    AlipayJSBridge.call("pushWindow",{url : url, param : defaultPara});

  },
  registerResumeHandler(type, fn){
    window._resumeEventMap[type] = fn;
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
  initResumeEventMgr : function(){
    const self = this;
    self.resumeEventMap = {};
    document.addEventListener('resume', this.onResume);
  }
}

module.exports = windowUtil;

// pushWindow(url, config){
//   const defaultPara = {
//     canPullDown: 'NO',
//     pullRefresh: 'NO',
//     showOptionMenu: 'NO',
//     showProgress: 'YES',
//     defaultTitle: '口碑商家',
//     ssoLoginEnabled: 'NO',
//     readTitle: true
//   };

//   //merge config
//   for (const key in config) {
//     defaultPara[key] = config[key];
//   }
//   AlipayJSBridge.call('pushWindow', {url: url, param: defaultPara});
// },
// registerResumeHandler(type, fn){
//   const self = this;
//   self.resumeEventMap[type] = fn;
// },

// onResume(e) {
//   const data = e.data;
//   if (typeof(data) !== 'undefined') {
//     const type = data.type;
//     const resumeEventMap = this.resumeEventMap;

//     if (resumeEventMap[type] && (typeof resumeEventMap[type] === 'function')) {
//       resumeEventMap[type].call(this, data);
//     }
//   }
// },

// initResumeEventMgr(){
//   const self = this;
//   self.resumeEventMap = {};
//   document.addEventListener('resume', this.onResume);
// },