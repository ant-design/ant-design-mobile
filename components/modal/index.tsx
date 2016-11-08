import Modal from './Modal';
import alert from './alert';

(Modal as any).alert = alert;

(Modal as any).prompt = () => {
  console.warn('Modal.prompt is on the road, use react native "AlertIOS" temporarily');
};

export default Modal;
