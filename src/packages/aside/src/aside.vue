<template>
  <div class="nlrx-aside" :style="{ width }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NlrxAside',
  props: {
    width: {
      type: String,
      default: "300px"
    }
  }
}
</script>
<style lang="scss" scoped>

</style>