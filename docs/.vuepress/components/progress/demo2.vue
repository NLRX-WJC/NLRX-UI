<template>
  <div>
    <nlrx-progress :percentage="20" show-text></nlrx-progress>
  </div>
</template>
<script>
  import Progress from '../../../../src/packages/progress'
  export default {
    components: {
      'nlrx-progress': Progress
    }
  }
</script>
