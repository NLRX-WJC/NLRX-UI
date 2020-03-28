<template>
  <div class="nlrx-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NlrxButtonGroup",
  mounted() {
    // 判断子组件是否为nlrx-button组件
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`nlrx-button-group 的子元素应该全是 nlrx-button，但是你写的是 ${name}`)
      }
    }
  }
};
</script>

<style lang="scss">
@import "var";
.nlrx-button-group {
  display: inline-flex;
  vertical-align: middle;
  .nlrx-button {
    position: relative;
    border-radius: 0;
    &:not(first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      z-index: 1;
    }
    &:focus {
      z-index: 2;
    }
  }
}
</style>
