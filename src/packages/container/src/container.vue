<template>
  <div class="nlrx-container" :class="{vertical}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NlrxContainer',
  data () {
    return {
      vertical:true
    }
  },
  mounted(){
    this.vertical = this.$children.some(child => 
      ['NlrxHeader','NlrxFooter'].includes(child.$options.name)
    )
  }
}
</script>
<style lang="scss" scoped>
  .nlrx-container {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }
  .vertical {
    flex-direction: column;
  }
</style>