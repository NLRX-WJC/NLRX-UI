<template>
  <div
    class="nlrx-col"
    :class="colClasses"
    :style="colStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NlrxCol",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    xs: {
      type: [Number, Object]
    },
    sm: {
      type: [Number, Object]
    },
    md: {
      type: [Number, Object]
    },
    lg: {
      type: [Number, Object]
    },
    xl: {
      type: [Number, Object]
    }
  },
  computed: {
    colClasses() {
      let classes = [`nlrx-col-${this.span}`];
      if (this.offset) {
        classes.push(`nlrx-col-offset-${this.offset}`);
      }
      ["xs", "sm", "md", "lg", "xl"].forEach(type => {
        if (typeof this[type] === "object") {
          let { span, offset } = this[type];
          span && classes.push(`nlrx-col-${type}-${span}`);
          offset && classes.push(`nlrx-col-${type}-offset-${offset}`);
        } else {
          this[type] && classes.push(`nlrx-col-${type}-${this[type]}`);
        }
      });
      return classes;
    },
    colStyle() {
      let style = {};
      if (this.gutter) {
        style = {
          ...style,
          paddingLeft: `${this.gutter / 2}px`,
          paddingRight: `${this.gutter / 2}px`
        };
      }
      return style;
    }
  },
  data() {
    return {
      gutter: 0
    };
  }
};
</script>

<style lang="scss" scoped>
@import "var";
.nlrx-col {
  @for $i from 1 through 24 {
    &.nlrx-col-#{$i} {
      width: $i/24 * 100%;
    }
    &.nlrx-col-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
  }
  @include res(xs) {
    @for $i from 1 through 24 {
      &.nlrx-col-xs-#{$i} {
        width: $i/24 * 100%;
      }
      &.nlrx-col-xs-offset-#{$i} {
        margin-left: $i/24 * 100%;
      }
    }
  }
  @include res(sm) {
    @for $i from 1 through 24 {
      &.nlrx-col-sm-#{$i} {
        width: $i/24 * 100%;
      }
      &.nlrx-col-sm-offset-#{$i} {
        margin-left: $i/24 * 100%;
      }
    }
  }
  @include res(md) {
    @for $i from 1 through 24 {
      &.nlrx-col-md-#{$i} {
        width: $i/24 * 100%;
      }
      &.nlrx-col-md-offset-#{$i} {
        margin-left: $i/24 * 100%;
      }
    }
  }
  @include res(lg) {
    @for $i from 1 through 24 {
      &.nlrx-col-lg-#{$i} {
        width: $i/24 * 100%;
      }
      &.nlrx-col-lg-offset-#{$i} {
        margin-left: $i/24 * 100%;
      }
    }
  }
  @include res(xl) {
    @for $i from 1 through 24 {
      &.nlrx-col-xl-#{$i} {
        width: $i/24 * 100%;
      }
      &.nlrx-col-xl-offset-#{$i} {
        margin-left: $i/24 * 100%;
      }
    }
  }
}
</style>
