import NLRXHeader from './src/header';

NLRXHeader.install = function (Vue) {
  Vue.component(NLRXHeader.name, NLRXHeader);
};

export default NLRXHeader;