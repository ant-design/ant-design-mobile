import Modal from './Modal.web';
import alert from './alert.web';
import prompt from './prompt.web';
import operation from './operation.web';

(Modal as any).alert = alert;
(Modal as any).prompt = prompt;
(Modal as any).operation = operation;

export default Modal;
