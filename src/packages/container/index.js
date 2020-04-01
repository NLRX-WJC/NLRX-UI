import NLRXContainer from './src/container';

NLRXContainer.install = function (Vue) {
  Vue.component(NLRXContainer.name, NLRXContainer);
};

export default NLRXContainer;