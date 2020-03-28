<template>
  <svg class="nlrx-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
import "./svg";
export default {
  name: "NlrxIcon",
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.nlrx-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
}
</style>
