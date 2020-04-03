import NLRXProgress from './src/progress';

NLRXProgress.install = function (Vue) {
  Vue.component(NLRXProgress.name, NLRXProgress);
};

export default NLRXProgress;