import Modal from './Modal';

Modal.alert = () => {
  console.warn('Modal.alert is on the road，Please use react native "Alert" temporarily');
};

Modal.prompt = () => {
  console.warn('Modal.prompt is on the road, use react native "AlertIOS" temporarily');
};

export default Modal;
