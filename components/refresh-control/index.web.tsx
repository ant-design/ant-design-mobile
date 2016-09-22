/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
import ListView from 'rmc-list-view';
import Icon from '../icon';
// import tsPropsType from './PropsType';
import assign from 'object-assign';

ListView.RefreshControl.defaultProps = assign({}, ListView.RefreshControl.defaultProps, {
  prefixCls: 'am-refresh-control',
  icon: <div style={{lineHeight: '50px'}}>
    <div className="am-refresh-control-pull">
      <Icon type="arrow-down"/> 下拉
    </div>
    <div className="am-refresh-control-release">
      <Icon type="arrow-up"/> 释放
    </div>
  </div>,
  loading: <div style={{ lineHeight: '50px' }}><Icon type="loading"/></div>,
  refreshing: false,
});
export default ListView.RefreshControl;

// export default class RefreshControl extends React.Component<tsPropsType, any> {
//   static defaultProps = assign({}, ListView.RefreshControl.defaultProps, {
//     prefixCls: 'am-refresh-control',
//     icon: <div style={{lineHeight: '50px'}}>
//       <div className="am-refresh-control-pull">
//         <Icon type="arrow-down"/> 下拉
//       </div>
//       <div className="am-refresh-control-release">
//         <Icon type="arrow-up"/> 释放
//       </div>
//     </div>,
//     loading: <div style={{ lineHeight: '50px' }}><Icon type="loading"/></div>,
//     refreshing: false,
//   });
//   render() {
//     return (
//       <ListView.RefreshControl
//         {...this.props}
//         ref="refreshControl"
//       />
//     );
//   }
// }
