import Promise from 'promise';

const formUtil = {
  componentDidMount(){
    const self = this;
    self._childFormElements.forEach((item)=> {
      if (item.props.init) {
        item.props.init.call(self);
      }
    });
  },

  componentWillUnmount() {
    document.removeEventListener('resume', this.onResume);
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
    const self = this;
    return new Promise(function (fulfill, reject) {
      let promiseChain = Promise.resolve(true);
      self._childFormElements.forEach((item)=> {
        promiseChain = promiseChain.then(function (prev) {
          if(!item.props.validate) return true;
          const validateResult = item.props.validate.call(item);
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
        reject();
      });
    });
  }
};

module.exports = formUtil;
