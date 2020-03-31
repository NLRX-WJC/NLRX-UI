<template>
  <div>
    <nlrx-row :gutter="20">
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
    </nlrx-row>
  </div>
</template>
<script>
import Row from "../../../../src/packages/row";
import Col from "../../../../src/packages/col";
export default {
  components: {
    "nlrx-row": Row,
    "nlrx-col": Col
  }
};
</script>
<style scoped>
.content {
  height: 50px;
  background: grey;
  border: 1px solid red;
}
</style>
