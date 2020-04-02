import Vue from 'vue';
import Message from './message';

let MessageConstructor = Vue.extend(Message);

const message = function () {
  let instance = new MessageConstructor();
  instance.$mount();
  document.body.appendChild(instance.$el);
}
export default message