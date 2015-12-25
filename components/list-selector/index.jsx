import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';

const Modal = React.createClass({
  propTypes: {
    show: PropTypes.bool
  },
  getDefaultProps() {
    return {
      show: false
    };
  },
  updateContent(){
    ReactDom.render(<div style={{
      display: (this.props.show ? 'block' : 'none'),
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

    this.props.onDismiss();
  },
  render(){
    return null;
  }
});

export default Modal;
