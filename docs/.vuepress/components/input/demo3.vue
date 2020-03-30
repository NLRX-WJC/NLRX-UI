<template>
  <div>
    <nlrx-input 
      v-model="input" 
      placeholder="请输入内容"
      clearable>
    </nlrx-input>
  </div>
</template>
<script>
  import Input from '../../../../src/packages/input'
  export default {
    components: {
      'nlrx-input': Input
    },
    data() {
      return {
        input: ''
      }
    }
  }
</script>
