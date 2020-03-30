# Input 组件

通过鼠标或键盘输入字符

## 基础用法

<demo-block>
::: slot source
<input-demo1></input-demo1>
:::

 input 组件基础用法
::: slot sourceCode

```html
<nlrx-input v-model="input" placeholder="请输入内容"></nlrx-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```

:::

</demo-block>

## 禁用状态

<demo-block>
::: slot source
<input-demo2></input-demo2>
:::

通过 `disabled` 属性指定是否禁用 input 组件
::: slot sourceCode

```html
<nlrx-input
  placeholder="请输入内容"
  v-model="input"
  disabled>
</nlrx-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```

:::

</demo-block>

## 可清空

<demo-block>
::: slot source
<input-demo3></input-demo3>
:::

使用 `clearable` 属性即可得到一个可清空的输入框

::: slot sourceCode

```html
<nlrx-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</nlrx-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

```

:::
</demo-block>

## 密码框

<demo-block>
::: slot source
<input-demo4></input-demo4>
:::

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

::: slot sourceCode

```html
<nlrx-input
  placeholder="请输入内容"
  v-model="input"
  show-password>
</nlrx-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

```

:::
</demo-block>

## 带 icon 的输入框

带有图标标记输入类型

<demo-block>
::: slot source
<input-demo5></input-demo5>
:::

可以通过 `prefix-icon` 和 `suffix-icon` 属性在 input 组件首部和尾部增加显示图标，

::: slot sourceCode

```html
<nlrx-input
  placeholder="请输入内容"
  v-model="input2"
  prefix-icon="edit">
</nlrx-input>

<nlrx-input
  placeholder="请输入内容"
  v-model="input1"
  suffix-icon="edit">
</nlrx-input>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: ''
    }
  }
}
</script>

```

:::
</demo-block>