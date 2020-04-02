<template>
  <div>
    <nlrx-button @click="open1">使用关闭回调</nlrx-button>
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
        message: "你知道我在等你吗？",
        type: "success",
        showClose: true,
        closeButtonText: "知道了",
        onClose:()=>{
          this.$message('知道还不赶快点个star!!!')
        },
      });
    }
  }
};
</script>
