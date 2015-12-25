import React from 'react';
import ReactDom from 'react-dom';

const Modal = React.createClass({
  propTypes: {},
  getDefaultProps() {
    return {};
  },
  updateContent(){
    ReactDom.render(<div style={{
      display: 'block',
      overflowY:'scroll',
      position:'fixed',
      left:'0',
      top:'0',
      width:'100%',
      height:'100%',
      background:'#F5F5F9',
      'zIndex':100}
    }>
      {this.props.children}
    </div>, this.div);
  },
  componentDidMount(){
    this.div = document.createElement('div');
    document.body.appendChild(this.div);
    document.body.style.overflow = 'hidden';

    this.updateContent();
  },
  componentDidUpdate(){
    this.updateContent();
  },
  componentWillUnmount(){
    document.body.style.overflow = '';
    ReactDom.unmountComponentAtNode(this.div);
    document.body.removeChild(this.div);
  },
  render(){
    return null;
  }
});

export default Modal;
