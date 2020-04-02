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
import Message from "./message";

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

  Vue.prototype.$message = Message;
};

if (typeof window.Vue !== "undefined") {
  install(Vue);
}

export default {
  install
};
