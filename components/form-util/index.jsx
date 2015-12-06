import Promise from 'promise';

const formUtil = {
  componentDidMount(){
    const self = this;

    for(let key in this.refs){
      if(!self.isPartOfForm(key)) continue;
      let item = this.refs[key];
      if(item.props.init){
        item.props.init.call(item);
      }
    }
  },
  isPartOfForm(key){
    return (key.indexOf('form_') === 0);
  },
  componentWillUnmount() {
    document.removeEventListener('resume', this.onResume);
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

    for(let key in this.refs){
      if(!this.isPartOfForm(key)) continue;
      let item = this.refs[key];

      if (item.state && item.state.extraFormData) {
        finalData = concatObj(finalData, item.state.extraFormData);
      }
      if (item.props && item.props.name) {
        const tmpObj = {};
        tmpObj[item.props.name] = item.state.value;
        finalData = concatObj(finalData, tmpObj);
      }
    }

    return finalData;
  },
  startValidate(){
    const self = this;
    return new Promise(function (fulfill, reject) {
      let promiseChain = Promise.resolve(true);

      function performNextValidate(item){
        return function(prevPassed){
          console.log('validation result :' + prevPassed);
          if(!prevPassed){
            return prevPassed;
          } else {
            console.log('call validation:');
            console.log(item);
            return item.props.validate.call(item);
          }
        };
      }

      for(let key in self.refs){
        let item = self.refs[key];

        if(!self.isPartOfForm(key) || !item.props.validate) continue;
        promiseChain = promiseChain.then(performNextValidate(item));
      }

      promiseChain = promiseChain.then(function(result){
        if(result){
          fulfill(result);
        } else {
          reject(result);
        }
      });

      promiseChain.catch((e)=>{
        reject(e);
      });
    });
  }
};

module.exports = formUtil;
