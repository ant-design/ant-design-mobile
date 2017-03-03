import Modal from './Modal';
import alert from './alert';
import operation from './operation';

(Modal as any).alert = alert;
(Modal as any).operation = operation;

(Modal as any).prompt = () => {
  console.warn('Modal.prompt is on the road, use react native "AlertIOS" temporarily');
};

export default Modal;
