import Vue from "vue";
import Message from "./message";

let MessageConstructor = Vue.extend(Message);
let instance;
const message = function(options = {}) {
  if (typeof options === "string") {
    options = {
      message: options
    };
  }

  instance = new MessageConstructor({
    data: options
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
};
export default message;
