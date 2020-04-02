<template>
  <transition name="nlrx-message-fade" @after-leave="handleAfterLeave">
    <div
      :class="['nlrx-message', messageClasses]"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer">
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="nlrx-message-content">
          {{ message }}
        </p>
        <p v-else v-html="message" class="nlrx-message-content"></p>
      </slot>
      <span v-if="showClose" class="closeBtn" @click="close">
        {{closeButtonText}}
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      closed: false,
      message: "",
      type: "info",
      duration: 3000,
      timer: null, // 定时器，用于自动关闭message框
      dangerouslyUseHTMLString: false,
      center: false,
      onClose: null,
      showClose:false,
      closeButtonText:'关闭'
    };
  },
  computed: {
    messageClasses() {
      let classes = [];
      switch (this.type) {
        case "info":
          classes.push(`nlrx-message-info-content`);
          break;
        case "success":
          classes.push(`nlrx-message-success-content`);
          break;
        case "warning":
          classes.push(`nlrx-message-warning-content`);
          break;
        case "error":
          classes.push(`nlrx-message-error-content`);
          break;
        default:
          classes.push(`nlrx-message-info-content`);
          break;
      }
      if (this.center) {
        classes.push("center");
      }
      return classes;
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    },
    startTimer() {
      this.timer = setTimeout(() => {
        this.close();
      }, this.duration);
    },
    clearTimer() {
      clearTimeout(this.timer);
    }
  },
  mounted() {
    this.startTimer();
  }
};
</script>

<style lang="scss" scoped>
@import "var";
$white: #ffffff !default;
$color-success-lighter: mix($white, $success, 90%) !default;
$color-warning-lighter: mix($white, $warning, 90%) !default;
$color-danger-lighter: mix($white, $danger, 90%) !default;
$color-info-lighter: mix($white, $info, 90%) !default;

$color-success-light: mix($white, $success, 80%) !default;
$color-warning-light: mix($white, $warning, 80%) !default;
$color-danger-light: mix($white, $danger, 80%) !default;
$color-info-light: mix($white, $info, 80%) !default;

$message-success-font-color: $success !default;
$message-info-font-color: $info !default;
$message-warning-font-color: $warning !default;
$message-danger-font-color: $danger !default;
.nlrx-message {
  min-width: 380px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #edf2fc;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;

  @mixin m($type) {
    @content;
  }
  @include m(info) {
    &.nlrx-message-info-content {
      .nlrx-message-content {
        color: $message-info-font-color;
      }
    }
  }

  @include m(success) {
    &.nlrx-message-success-content {
      background-color: $color-success-lighter;
      border-color: $color-success-light;

      .nlrx-message-content {
        color: $message-success-font-color;
      }
    }
  }

  @include m(warning) {
    &.nlrx-message-warning-content {
      background-color: $color-warning-lighter;
      border-color: $color-warning-light;

      .nlrx-message-content {
        color: $message-warning-font-color;
      }
    }
  }

  @include m(error) {
    &.nlrx-message-error-content {
      background-color: $color-danger-lighter;
      border-color: $color-danger-light;
      .nlrx-message-content {
        color: $message-danger-font-color;
      }
    }
  }
  &.center {
    justify-content: center;
  }
  .closeBtn {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
    color: $message-info-font-color;
    &:focus {
      outline-width: 0;
    }
  }
}
.nlrx-message-fade-enter,
.nlrx-message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
