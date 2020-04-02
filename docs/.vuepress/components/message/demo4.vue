<template>
  <div>
    <nlrx-button @click="open1">文字居中</nlrx-button>
  </div>
</template>
<script>
import Button from "../../../../src/packages/button";
export default {
  components: {
    "nlrx-button": Button
  },
  methods: {
    open1() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
        center:true
      });
    }
  }
};
</script>
