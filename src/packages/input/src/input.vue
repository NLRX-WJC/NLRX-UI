<template>
  <div class="nlrx-input" :class="inputClass">
    <input
      ref="input"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('input',$event.target.value)"
      @change="$emit('change',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    />
    <!-- @mousedown.native.prevent 的作用是:确保清空内容后输入框重新获取焦点 -->
    <nlrx-icon
      icon="qingkong"
      v-if="clearable && value"
      @mousedown.native.prevent    
      @click.native="clear">
    </nlrx-icon>
    <nlrx-icon
      icon="eye"
      v-if="showPassword && value"
      @click.native="handlePasswordVisible">
    </nlrx-icon>
    <nlrx-icon :icon="prefixIcon" v-if="prefixIcon"></nlrx-icon>
    <nlrx-icon :icon="suffixIcon" v-if="suffixIcon"></nlrx-icon>
  </div>
</template>

<script>
import Icon from "../../icon";
export default {
  name: "NlrxInput",
  components: {
    "nlrx-icon": Icon
  },
  props: {
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String
  },
  data() {
    return {
      passwordVisible: false
    };
  },
  computed: {
    inputClass() {
      let classes = [];
      if (this.clearable || this.showPassword || this.suffixIcon) {
        classes.push(`nlrx-input-suffix-icon`);
      }
      if (this.prefixIcon) {
        classes.push(`nlrx-input-prefix-icon`);
      }
      return classes;
    }
  },
  methods: {
    getInput() {
      return this.$refs.input;
    },
    focus() {
      this.getInput().focus();
    },
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    },
    clear(){
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    }
  }
};
</script>

<style lang="scss">
@import "var";
.nlrx-input {
  display: inline-flex;
  position: relative;
  font-size: 14px;
  input {
    padding: 0 15px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    background-color: #fff;
    cursor: pointer;
    color: #606266;
    &:focus {
      border: 1px solid $primary;
      outline: none;
      box-shadow: inset -1px 0px 2px $primary, inset 1px 1px 1px $primary;
    }
    &:hover {
      border: 1px solid #666;
    }
    &[disabled] {
      cursor: not-allowed;
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
    }
  }
  
}
.nlrx-input-suffix-icon {
    input {
      padding-right: 25px;
    }
    .nlrx-icon {
      right: 8px;
      top: 13px;
      position: absolute;
      cursor: pointer;
      width: 14.5px;
      height: 14.5px;
      &:hover {
        color: #909399;
      }
    }
  }
  .nlrx-input-prefix-icon {
    input {
      padding-left: 25px;
    }
    .nlrx-icon {
      left: 8px;
      top: 13px;
      position: absolute;
      cursor: pointer;
      width: 14.5px;
      height: 14.5px;
    }
  }
</style>
