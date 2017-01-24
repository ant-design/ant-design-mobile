/* eslint no-console:0 */
/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog';
import assign from 'object-assign';

function create(instanceId, config, content, afterClose = (_x: any) => { }) {
  const props = assign({}, {
    prefixCls: 'am-popup',
    animationType: 'slide-down',
  }, config);
  const {prefixCls, transitionName, maskTransitionName, maskClosable = true, animationType} = props;

  let div: any = document.createElement('div');
  document.body.appendChild(div);

  function close() {
    if (div) {
      ReactDOM.unmountComponentAtNode(div);
      div.parentNode.removeChild(div);
      div = null;
    }
    afterClose(instanceId);
  }

  let transName = 'am-slide-down';
  if (animationType === 'slide-up') {
    transName = 'am-slide-up';
  }

  // 在 iPhone 上拖动 mask 蒙层、会触发最顶部或最底部的、页面回弹后的留白，解决办法是，禁掉 mask 蒙层的 onTouchStart 事件。
  // 但由于以下原因：
  // Popup 组件底层依赖 [rc-dialog](https://github.com/react-component/dialog)
  // 而 rc-dialog 点击 mask 蒙层关闭弹出框的事件是绑定在 classname 为 rc-dialog-wrap 的 dom 节点上，
  // 此节点是弹出层中主要内容的“父节点”，而非正常的“兄弟节点”。相关 issue https://github.com/react-component/dialog/issues/40
  // 所以、相对于 antd-mobile@0.9.8 以及之前的版本的变化是：
  // 去掉 am-popup-wrap 设置的 `position: fixed; top: 0; bottom: 0; ...` 样式，并给 am-popup 设置 z-index .
  // 另外不使用 rc-dialog 提供的 maskClosable 功能，而改为在这里实现
  const maskProps = {
    onClick: (e) => {
      e.preventDefault();
      if (maskClosable) {
        if (props.onMaskClose && typeof props.onMaskClose === 'function') {
          const res = props.onMaskClose();
          if (res && res.then) {
            res.then(() => {
              close();
            });
          } else {
            close();
          }
        } else {
          close();
        }
      }
    },
  };

  ReactDOM.render(
    <Dialog
      prefixCls={prefixCls}
      visible
      title=""
      footer=""
      className={`${prefixCls}-${animationType}`}
      transitionName={transitionName || transName}
      maskTransitionName={maskTransitionName || 'am-fade'}
      maskClosable={maskClosable}
      wrapProps={props.wrapProps || {}}
      maskProps={props.maskProps || maskProps}
    >
      {content}
    </Dialog>,
    div
  );

  return {
    instanceId,
    close,
  };
}

const ins = {
  defaultInstance: null as any,
  instances: [] as any[],
};
let instanceId = 1;

export default class Popup {
  static newInstance = () => {
    let j;
    return {
      show: (content, config) => {
        j = create(instanceId++, config, content, (iId) => {
          for (let i = 0; i < ins.instances.length; i++) {
            if (ins.instances[i].instanceId === iId) {
              ins.instances.splice(i, 1);
              return;
            }
          }
        });
        ins.instances.push(j);
      },
      hide: () => {
        j.close();
      },
    };
  }
  static show = (content, config) => {
    Popup.hide();
    ins.defaultInstance = create('0', config, content, (iId) => {
      if (iId === '0') {
        ins.defaultInstance = null;
      }
    });
  }
  static hide = () => {
    if (ins.defaultInstance) {
      ins.defaultInstance.close();
    }
  }
}
