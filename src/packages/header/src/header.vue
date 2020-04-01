<template>
  <div class="nlrx-header" :style="{ height }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NlrxHeader",
  props: {
    height: {
      type: String,
      default: "60px"
    }
  }
};
</script>
