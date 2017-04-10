import Modal from './Modal';
import alert from './alert';
import propmt from './prompt';
import operation from './operation';

(Modal as any).alert = alert;
(Modal as any).operation = operation;
(Modal as any).prompt = propmt;

export default Modal;
