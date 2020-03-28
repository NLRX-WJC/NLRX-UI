<template>
  <div>
      <nlrx-button disabled>默认按钮</nlrx-button>
      <nlrx-button type="primary" disabled>主要按钮</nlrx-button>
      <nlrx-button type="success" disabled>成功按钮</nlrx-button>
      <nlrx-button type="info" disabled>信息按钮</nlrx-button>
      <nlrx-button type="warning" disabled>警告按钮</nlrx-button>
      <nlrx-button type="danger" disabled>危险按钮</nlrx-button>
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
