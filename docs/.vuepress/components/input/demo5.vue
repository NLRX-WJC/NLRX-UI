<template>
  <div>
    <nlrx-input
      placeholder="请输入内容"
      v-model="input2"
      prefix-icon="edit">
    </nlrx-input>

    <nlrx-input
      placeholder="请输入内容"
      v-model="input1"
      suffix-icon="edit">
    </nlrx-input>
  </div>
</template>
<script>
import Input from "../../../../src/packages/input";
export default {
  components: {
    "nlrx-input": Input
  },
  data() {
    return {
      input1: "",
      input2: ""
    };
  }
};
</script>
