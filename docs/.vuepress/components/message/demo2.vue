<template>
  <div>
    <nlrx-button @click="open1">成功</nlrx-button>
    <nlrx-button @click="open2">警告</nlrx-button>
    <nlrx-button @click="open3">消息</nlrx-button>
    <nlrx-button @click="open4">错误</nlrx-button>
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
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      open2() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
      open3() {
        this.$message({
          message:'这是一条消息提示',
        });
      },
      open4() {
        this.$message({
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    }
  }
</script>
