<template>
  <div>
    <nlrx-container>
      <nlrx-header>Header</nlrx-header>
      <nlrx-container>
        <nlrx-aside >aside </nlrx-aside >
        <nlrx-main>Main</nlrx-main>
      </nlrx-container>
      <nlrx-footer>footer</nlrx-footer>
    </nlrx-container>
  </div>
</template>
<script>
import Container from "../../../../src/packages/container";
import Header from "../../../../src/packages/header";
import Main from "../../../../src/packages/main";
import Aside from "../../../../src/packages/aside";
import Footer from "../../../../src/packages/footer";
export default {
  components: {
    "nlrx-container": Container,
    "nlrx-header": Header,
    "nlrx-main": Main,
    "nlrx-aside": Aside,
    "nlrx-footer": Footer
  }
};
</script>
<style>
.nlrx-header,
.nlrx-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.nlrx-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.nlrx-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
