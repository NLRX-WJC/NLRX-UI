<template>
  <transition>
    <div :class="[
      'nlrx-carousel-item',
      reverse?'reverse':''
    ]" 
    v-if="isShow" >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NlrxCarouselItem',
  data() {
    let children = this.$parent.$children.filter(child => child.$options.name === 'NlrxCarouselItem')
    return {
      index:children.length - 1,
      reverse:false
    }
  },
  computed:{
    isShow(){
      return this.$parent.currentSelected === this.index
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .nlrx-carousel-item {
    width: 100%;
    height: 100%;
  }
  .v-enter-active,.v-leave-active {
    transition: all .5s linear;
  }
  .v-enter {
    transform: translateX(100%);
  }
  .v-leave-to {
    transform: translateX(-100%);
  }
  .v-enter.reverse {
    transform: translateX(-100%);
  }
  .v-leave-to.reverse {
    transform: translateX(100%);
  }
  .v-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

</style>