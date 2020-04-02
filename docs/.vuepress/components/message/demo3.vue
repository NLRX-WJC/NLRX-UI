<template>
  <div>
    <nlrx-button @click="open1">默认关闭文本</nlrx-button>
    <nlrx-button @click="open2">自定义关闭文本</nlrx-button>
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
        showClose: true
      });
    },
    open2() {
      this.$message({
        message: "你知道我在等你吗？",
        type: "success",
        showClose: true,
        closeButtonText: "知道了"
      });
    }
  }
};
</script>
