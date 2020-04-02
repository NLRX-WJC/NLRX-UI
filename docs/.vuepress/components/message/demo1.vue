<template>
  <div>
    <nlrx-button @click="open1">打开消息提示1</nlrx-button>
    <nlrx-button @click="open2">打开消息提示2</nlrx-button>
  </div>
</template>
<script>
  import Button from '../../../../src/packages/button'
  export default {
    components: {
      'nlrx-button': Button
    },
    methods: {
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message:'这是一条消息提示'
        });
      }
    }
  }
</script>
