<template>
  <div>
    <nlrx-button type="primary" position="left" icon="edit">编辑(图标在左)</nlrx-button>
    <nlrx-button type="primary" position="right" icon="edit">编辑(图标在右)</nlrx-button>
    <nlrx-button type="primary" icon="edit"></nlrx-button>
  </div>
</template>
<script>
import Button from "../../../../src/packages/button";
export default {
  components: {
    "nlrx-button": Button
  }
};
</script>
