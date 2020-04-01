// 所有的组件的入口
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Input from "./input";
import Row from "./row";
import Col from "./col";
import Container from "./container";
import Header from "./header";
import Aside from "./aside";
import Footer from "./footer";
import Main from "./main";

const COMPONENTS = [
  Button,
  Icon,
  ButtonGroup,
  Input,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Footer,
  Main,
];

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
