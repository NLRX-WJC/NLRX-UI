<template>
  <div>
      <nlrx-button>默认按钮</nlrx-button>
      <nlrx-button type="primary">主要按钮</nlrx-button>
      <nlrx-button type="success">成功按钮</nlrx-button>
      <nlrx-button type="info">信息按钮</nlrx-button>
      <nlrx-button type="warning">警告按钮</nlrx-button>
      <nlrx-button type="danger">危险按钮</nlrx-button>
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
