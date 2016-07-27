import Modal from './Modal';
import alert from './alert';
import prompt from './prompt';

(Modal as any).alert = alert;
(Modal as any).prompt = prompt;

export default Modal;
