<template>
  <div>
    <nlrx-row type="flex" justify="start">
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
    </nlrx-row>
    <nlrx-row type="flex" justify="center">
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
    </nlrx-row>
    <nlrx-row type="flex" justify="end">
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
    </nlrx-row>
    <nlrx-row type="flex" justify="space-between">
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
      <nlrx-col :span="6"><div class="content"></div></nlrx-col>
    </nlrx-row>
    <nlrx-row type="flex" justify="space-around">
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
