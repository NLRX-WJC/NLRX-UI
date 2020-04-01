import NLRXMain from './src/main';

NLRXMain.install = function (Vue) {
  Vue.component(NLRXMain.name, NLRXMain);
};

export default NLRXMain;