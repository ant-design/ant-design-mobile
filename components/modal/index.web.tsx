import Modal from './Modal';
import alert from './alert.web';
import prompt from './prompt.web';

(Modal as any).alert = alert;
(Modal as any).prompt = prompt;

export default Modal;
