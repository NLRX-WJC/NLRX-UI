<template>
  <div>
    <nlrx-button-group>
      <nlrx-button type="primary" icon="left" position="left">上一页</nlrx-button>
      <nlrx-button type="primary" icon="right" position="right">下一页</nlrx-button>
    </nlrx-button-group>
    <nlrx-button-group>
      <nlrx-button type="primary" icon="edit"></nlrx-button>
      <nlrx-button type="primary" icon="edit"></nlrx-button>
      <nlrx-button type="primary" icon="edit"></nlrx-button>
    </nlrx-button-group>
  </div>
</template>
<script>
import Button from "../../../../src/packages/button";
import ButtonGroup from "../../../../src/packages/button-group";
export default {
  components: {
    "nlrx-button": Button,
    "nlrx-button-group": ButtonGroup
  }
};
</script>
