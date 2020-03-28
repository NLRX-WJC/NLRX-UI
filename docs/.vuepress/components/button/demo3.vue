<template>
  <div>
      <nlrx-button type="primary" :loading="true">加载中</nlrx-button>
  </div>
</template>
<script>
  import Button from '../../../../src/packages/button'
  export default {
    components: {
      'nlrx-button': Button
    }
  }
</script>