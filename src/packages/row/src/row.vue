<template>
  <div class="nlrx-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NlrxRow",
  props: {
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rowStyle() {
      let style = {};
      if (this.gutter) {
        style = {
          ...style,
          // 给外层的row加margin负值，解决内部组件col的padding缝隙
          marginLeft: `${-this.gutter / 2}px`,
          marginRight: `${-this.gutter / 2}px`
        };
      }
      return style;
    }
  },
  // 把gutter传给内部的子组件col
  mounted() {
    this.$children.forEach(child => {
      child.gutter = this.gutter;
    });
  }
};
</script>

<style lang="scss" scoped>
.nlrx-row {
  display: flex;
}
</style>
