// 所有的组件的入口
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

const COMPONENTS = [
  Button,
  Icon,
  ButtonGroup,
]
const install = Vue => {

  COMPONENTS.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window.Vue !== "undefined") {
  install(Vue); // 全局直接通过script 引用的方式会默认调用install方法
}

export default {
  install
};
