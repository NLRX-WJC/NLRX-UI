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
    },
    type: {
      type: String
    },
    justify: {
      type: String,
      default: "start",
      validator(type) {
        if (
          type &&
          !["start", "end", "center", "space-around", "space-between"].includes(type)
        ) {
          console.error(
            `类型必须是${["start", "end", "center", "space-around", "space-between"].join("、")}中的一种`
          );
        }
        return true;
      }
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
      if(this.type && this.justify){
        let key = ['start','end'].includes(this.justify)?'flex-'+this.justify :this.justify
        style = {
          ...style,
          justifyContent:key
        }
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
