import Modal from './Modal.native';
import alert from './alert.native';
import prompt from './prompt.native';
import operation from './operation.native';

Modal.alert = alert;
Modal.operation = operation;
Modal.prompt = prompt;

export default Modal;
