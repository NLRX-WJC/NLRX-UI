<template>
  <div 
    class="nlrx-carousel" 
    :style="{ height }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <div class="viewport">
      <slot></slot>
    </div>
    <div class="dots">
      <span
        v-for="(item, index) in childrenCount"
        :key="item"
        :class="{ active: index === currentSelected }"
        @click="select(index)">
      </span>
    </div>
    <div class="arrow-box" v-if="arrowDisplay">
      <nlrx-button icon="left" @click="select(currentSelected-1,true)" v-show="arrow === 'always' || hover"></nlrx-button>
      <nlrx-button icon="right" @click="select(currentSelected+1,true)" v-show="arrow === 'always' || hover"></nlrx-button>
    </div>
  </div>
</template>

<script>
import NlrxButton from '../../button'
export default {
  name: "NlrxCarousel",
  components:{
    NlrxButton
  },
  props: {
    height: {
      typr: String,
      default: "300px"
    },
    autoplay: {
      typr: Boolean,
      default: true
    },
    loop: {
      typr: Boolean,
      default: true
    },
    interval: {
      typr: Number,
      default: 3000
    },
    initialIndex: {
      typr: Number,
      default: 0
    },
    arrow:{
      typr: String,
      default: "always"
    }
  },
  computed:{
    arrowDisplay() {
      return this.arrow !== 'never';
    },
  },
  data() {
    return {
      currentSelected: this.initialIndex, // 当前被选中的幻灯片索引
      timer: null,
      childrenCount: 0,
      reverse: false, // 用于标识幻灯片播放的方向，← 为 false，→ 为 true
      hover:false
    };
  },
  methods: {
    select(newIndex,flag) {
      let index = this.currentSelected;
      // 如果下一张要播放的幻灯片的索引等于幻灯片的总共数量，那就把下一张要播放的幻灯片的索引置为0，
      // 即让从第一张重新开始播放
      if (newIndex === this.childrenCount) {
        newIndex = 0;
      }
      if (newIndex === -1) {
        newIndex = this.childrenCount - 1;
      }
      this.reverse = index > newIndex ? true : false;
      if ((this.timer || flag) && this.loop) {
        if (index === 0 && newIndex === this.childrenCount - 1)
          this.reverse = true;
        if (index === this.childrenCount - 1 && newIndex === 0)
          this.reverse = false;
      }
      // 把幻灯片播放的方向传给nlrx-carousel-item，在nlrx-carousel-item通过动态添加样式类的方式修改播放方向
      this.children.forEach(child => {
        child.reverse = this.reverse;
      });
      this.$nextTick(() => {
        this.currentSelected = newIndex;
      });
    },
    run() {
      if (this.autoplay) {
        this.timer = setInterval(() => {
          let index = this.currentSelected;
          let newIndex = index - 1
          this.select(newIndex)
        }, this.interval);
      }
    },
    clearTimer(){
      clearInterval(this.timer);
      this.timer = null
    },
    handleMouseEnter(){
      this.hover = true;
      this.clearTimer()
    },
    handleMouseLeave(){
      this.hover = false;
      this.run()
    }
  },
  mounted() {
    // 挂载完毕后计算出<nlrx-carousel></nlrx-carousel>中包含了多少个<nlrx-carousel-item></nlrx-carousel-item>
    this.children = this.$children.filter(
      child => child.$options.name === "NlrxCarouselItem"
    );
    this.childrenCount = this.children.length;
    this.run();
  },
  beforeDestroy() {
    this.clearTimer
  }
};
</script>

<style lang="scss" scoped>
.nlrx-carousel {
  position: relative;
  .viewport {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .dots {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;

    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #ccc;
      margin: 5px;
      opacity: 0.5;
      cursor: pointer;
      border-radius: 50%;
      &.active {
        opacity: 1;
      }
    }
  }
  .arrow-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
