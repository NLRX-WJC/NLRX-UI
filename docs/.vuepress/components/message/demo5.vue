<template>
  <div>
    <nlrx-button @click="open1">使用 HTML 片段</nlrx-button>
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
        dangerouslyUseHTMLString: true,
        message: "<h1>这是一个h1标签内的文本哦</h1>",
        type: "success",
        center: true
      });
    }
  }
};
</script>
