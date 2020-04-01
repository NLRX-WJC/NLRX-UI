<template>
  <div class="nlrx-footer" :style="{ height }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NlrxFooter',
  props: {
    height: {
      type: String,
      default: "60px"
    }
  }
}
</script>