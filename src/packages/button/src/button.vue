<template>
  <button
    class="nlrx-button"
    :class="btnClass"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <!-- 普通icon -->
    <nlrx-icon :icon="icon" v-if="icon && !loading" class="icon"></nlrx-icon>
    <!-- loading 的icon -->
    <nlrx-icon icon="loading" v-if="loading" class="loading icon"></nlrx-icon>
    <!-- 文本内容 -->
    <span v-if="this.$slots.default" class="content">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import Icon from '../../icon'
export default {
  name: "NlrxButton",
  components: {
    'nlrx-icon': Icon
  },
  props: {
    type: {
      type: String,
      default: "",
      validator(type) {
        if (
          type &&
          !["warning", "success", "danger", "info", "primary"].includes(type)
        ) {
          console.error(
            `type属性必须为:${["warning", "success", "danger", "info", "primary"].join("、")}中的一种`
          );
        }
        return true;
      }
    },
    icon: {
      type: String
    },
    position: {
      type: String,
      default: "left",
      validator(type) {
        if (!["left", "right"].includes(type)) {
          console.error("position属性必须为:left 或 right");
        }
        return true;
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`nlrx-button-${this.type}`);
      }
      if (this.position) {
        classes.push(`nlrx-button-${this.position}`);
      }
      
      return classes;
    }
  }
};
</script>

<style lang="scss">
@import "var";
$height: 32px;
$font-size: 14px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.nlrx-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 0 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  user-select: none;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border: 1px solid $active-color;
    background-color: $background;
    outline: none;
  }
  @each $type,
    $color
      in (
        primary: $primary,
        success: $success,
        info: $info,
        warning: $warning,
        danger: $danger
      )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        info: $info-active,
        warning: $warning-active,
        danger: $danger-active
      )
  {
    &-#{$type}:active,
    &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }

  &-left {
    .icon {
      order: 1;
      margin-right: .1em;
    }
    .content {
      order: 2;
    }
  }
  &-right {
    .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
    .content {
      order: 1;
    }
    .icon + span {
      margin-left: 0px;
      margin-right: 4px;
    }
  }
  &[disabled] {
    cursor: not-allowed;
  }
  .loading {
    @include spin;
  }
}
</style>
