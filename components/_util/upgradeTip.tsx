if (process.env.NODE_ENV === 'development' && !process.env.DISABLE_ANTD_MOBILE_UPGRADE) {
  try {
    const localVersion = require('./version.json');
    if (!localVersion._disable && fetch) {
      //#region fetch-jsonp
      const defaultOptions = {
        timeout: 5000,
        jsonpCallback: 'callback',
        jsonpCallbackFunction: null,
      };

      function generateCallbackFunction() {
        return `jsonp_${Date.now()}_${Math.ceil(Math.random() * 100000)}`;
      }

      function clearFunction(functionName) {
        // IE8 throws an exception when you try to delete a property on window
        // http://stackoverflow.com/a/1824228/751089
        try {
          delete window[functionName];
        } catch (e) {
          window[functionName] = undefined;
        }
      }

      function removeScript(scriptId) {
        const script = document.getElementById(scriptId);
        if (script) {
          document.getElementsByTagName('head')[0].removeChild(script);
        }
      }

      function fetchJsonp(_url, options: any = {}) {
        // to avoid param reassign
        let url = _url;
        const timeout = options.timeout || defaultOptions.timeout;
        const jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

        let timeoutId;

        return new Promise((resolve, reject) => {
          const callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
          const scriptId = `${jsonpCallback}_${callbackFunction}`;

          window[callbackFunction] = (response) => {
            resolve({
              ok: true,
              // keep consistent with fetch API
              json: () => Promise.resolve(response),
            });

            if (timeoutId) {
              clearTimeout(timeoutId);
            }

            removeScript(scriptId);

            clearFunction(callbackFunction);
          };

          // Check if the user set their own params, and if not add a ? to start a list of params
          url += (url.indexOf('?') === -1) ? '?' : '&';

          const jsonpScript = document.createElement('script');
          jsonpScript.setAttribute('src', `${url}${jsonpCallback}=${callbackFunction}`);
          if (options.charset) {
            jsonpScript.setAttribute('charset', options.charset);
          }
          jsonpScript.id = scriptId;
          document.getElementsByTagName('head')[0].appendChild(jsonpScript);

          timeoutId = setTimeout(() => {
            reject(new Error(`JSONP request to ${_url} timed out`));

            clearFunction(callbackFunction);
            removeScript(scriptId);
            window[callbackFunction] = () => {
              clearFunction(callbackFunction);
            };
          }, timeout);

          // Caught if got 404/500
          jsonpScript.onerror = () => {
            reject(new Error(`JSONP request to ${_url} failed`));

            clearFunction(callbackFunction);
            removeScript(scriptId);
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
          };
        });
      }
      //#endregion

      const gateway = 'https://basement-gzone.alipay.com/mgw_proxy/unauthorized_endpoint';
      const params = {
        path: 'antd-mobile-upgrade-tip/upgrade-tip-h5data',
        'x-basement-operation': 'com.alipay.h5data.fengdie.get',
      };
      const requestData = encodeURIComponent(JSON.stringify([params]));

      fetchJsonp(`${gateway}?requestData=${requestData}`)
        .then((res: any) => res.json())
        .then(data => {
          if (!data.result || !data.result.success) {
            return;
          } else {
            data = data.result.result;
          }
          let notice = '';
          const tipComponents = data.filter(item => {
            const key = item.name;
            if (key === '[notice]') {
              notice = item.tip;
            }
            if (!localVersion[key]) {
              return false;
            }
            const oldVer = localVersion[key].split('.') as string[];
            const newVer = item.version.split('.') as string[];
            let result = false;
            const length = Math.max(oldVer.length, newVer.length);
            for (let i = 0; i < length; i++) {
              if (oldVer[i] !== newVer[i]) {
                const newVerNum = +newVer[i];
                const oldVerNum = +oldVer[i];
                const hasNaN = isNaN(newVerNum) || isNaN(oldVerNum);
                result = !(!hasNaN && oldVerNum >= newVerNum);
                if (result) {
                  break;
                }
              }
            }
            return result;
          });

          if (notice) {
            console.warn(
              '--------------------------------------------------------\n',
              '[antd-mobile-upgrade-tip] Notice:\n',
              `${notice}\n`,
              '--------------------------------------------------------',
            );
          }

          if (tipComponents.length > 0) {
            console.warn(
              '--------------------------------------------------------\n',
              '[antd-mobile-upgrade-tip] some components is expired:\n',
              '\n',
              ...tipComponents
                .map(newData => {
                  const key = newData.name;
                  return `${key}: ${localVersion[key]} => ${newData.version} ${newData.tip} ${newData.url}\n`;
                }),
              '\n',
              '[you can reinstall node_modules to upgrade all of them.]\n',
              '[about this] http://mobile.ant.design/docs/react/upgrade-tip-cn\n',
              '--------------------------------------------------------',
            );
          }
        }).catch(() => { });
    }
  } catch (error) {

  }
}
