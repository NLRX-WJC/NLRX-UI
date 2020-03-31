<template>
  <div>
    <nlrx-row :gutter="10">
      <nlrx-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="content"></div></nlrx-col>
      <nlrx-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="content"></div></nlrx-col>
      <nlrx-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="content"></div></nlrx-col>
      <nlrx-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="content"></div></nlrx-col>
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
