<template>
  <div class="nlrx-progress">
    <div class="outer" :style="{ height: `${strokeWidth}px` }">
      <div
        class="inner"
        :style="{ background: color, width: `${percentage}%` }">
        <div v-if="showText" class="text-inside">{{ percentage }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NlrxProgress",
  props: {
    percentage: {
      type: Number,
      required: true,
      default: 0,
      validator(percentage) {
        if (percentage && (percentage < 0 || percentage > 100)) {
          console.error(
            `percentage属性只能在0-100之间，而你传入的是${percentage}`
          );
        }
        return true;
      }
    },
    strokeWidth: {
      type: Number,
      default: 26
    },
    color: {
      type: String,
      default: "blue"
    },
    showText: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.nlrx-progress {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  .outer {
    border-radius: 100px;
    background: #ebeef5;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    .inner {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: 100px;
      text-align: right;
      white-space: nowrap;
      transition: width 0.6s ease;
      line-height: 1;
      .text-inside {
        display: inline-block;
        vertical-align: middle;
        color: #fff;
        font-size: 12px;
        margin: 0 8px;
      }
    }
  }
}
</style>
