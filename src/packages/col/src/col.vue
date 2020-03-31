<template>
  <div :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NlrxCol",
  props: {
    span: {
      type: Number,
      default:24
    },
    offset:{
      type: Number,
      default:0
    }
  },
  computed:{
    colClasses(){
      let classes = [`nlrx-col-${this.span}`]
      if (this.offset) {
        classes.push(`nlrx-col-offset-${this.offset}`)
      }
      return classes
    },
    colStyle() {
      let style = {};
      if (this.gutter) {
        style = {
          ...style,
          paddingLeft: `${this.gutter / 2}px`,
          paddingRight: `${this.gutter / 2}px`
        };
      }
      return style;
    }
  },
  data () {
    return {
      gutter:0
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";
@for $i from 1 through 24 {
  .nlrx-col-#{$i} {
    width: $i/24 * 100%;
  }
}
@for $i from 1 through 24 {
  .nlrx-col-offset-#{$i} {
    margin-left: $i/24 * 100%;
  }
}
</style>
