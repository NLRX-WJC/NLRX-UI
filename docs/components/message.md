# Message 消息提示

常用于主动操作后的反馈提示。

## 基础用法

从顶部出现，3 秒后自动消失。

<demo-block>
::: slot source
<message-demo1></message-demo1>
:::

注册了 `$message` 方法，接收一个 `options` 字面量参数，在最简单的情况下，你可以只设置 `message` 字段，用于设置通知的内容。默认情况下，经过一段时间后 `Message` 组件会自动关闭，但是通过设置 `duration`，可以控制关闭的时间间隔，特别的是，如果设置为 0，则不会自动关闭。注意：`duration` 接收一个 `Number` ，单位为毫秒，默认为 3000。
::: slot sourceCode

```html
<template>
  <div>
    <nlrx-button @click="open1">打开消息提示1</nlrx-button>
    <nlrx-button @click="open2">打开消息提示2</nlrx-button>
  </div>
</template>
<script>
  export default {
    methods: {
      open1() {
        this.$message("这是一条消息提示");
      },
      open2() {
        this.$message({
          message: "这是一条消息提示"
        });
      }
    }
  };
</script>
```

:::

</demo-block>

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

<demo-block>
::: slot source
<message-demo2></message-demo2>
:::

设置 `type` 字段可以定义不同的状态，默认为 `info` 。 `type` 字段可选值有：`info` 、`success` 、`warning` 、`error`
::: slot sourceCode

```html
<template>
  <div>
    <nlrx-button @click="open1">成功</nlrx-button>
    <nlrx-button @click="open2">警告</nlrx-button>
    <nlrx-button @click="open3">消息</nlrx-button>
    <nlrx-button @click="open4">错误</nlrx-button>
  </div>
</template>
<script>
  export default {
    methods: {
      open1() {
        this.$message({
          message: "恭喜你，这是一条成功消息",
          type: "success"
        });
      },
      open2() {
        this.$message({
          message: "警告哦，这是一条警告消息",
          type: "warning"
        });
      },
      open3() {
        this.$message({
          message: "这是一条消息提示"
        });
      },
      open4() {
        this.$message({
          message: "错了哦，这是一条错误消息",
          type: "error"
        });
      }
    }
  };
</script>
```

:::

</demo-block>

## 可关闭

可以添加关闭按钮。

<demo-block>
::: slot source
<message-demo3></message-demo3>
:::

默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用 `showClose` 字段。另外，手动关闭按钮的文字也可以通过 `closeButtonText` 来设置，默认为“关闭”
::: slot sourceCode

```html
<template>
  <div>
    <nlrx-button @click="open1">默认关闭文本</nlrx-button>
    <nlrx-button @click="open2">自定义关闭文本</nlrx-button>
  </div>
</template>
<script>
  export default {
    methods: {
      open1() {
        this.$message({
          message: "恭喜你，这是一条成功消息",
          type: "success",
          showClose: true
        });
      },
      open2() {
        this.$message({
          message: "你知道我在等你吗？",
          type: "success",
          showClose: true,
          closeButtonText: "知道了"
        });
      }
    }
  };
</script>
```

:::

</demo-block>

## 文字居中

使用 `center` 属性让文字水平居中。

<demo-block>
::: slot source
<message-demo4></message-demo4>
:::

::: slot sourceCode

```html
<template>
  <div>
    <nlrx-button @click="open1">文字居中</nlrx-button>
  </div>
</template>
<script>
  export default {
    methods: {
      open1() {
        this.$message({
          message: "恭喜你，这是一条成功消息",
          type: "success",
          center: true
        });
      }
    }
  };
</script>
```

:::

</demo-block>

## 使用 HTML 片段

`message` 属性支持传入 HTML 片段

<demo-block>
::: slot source
<message-demo5></message-demo5>
:::

将 `dangerouslyUseHTMLString` 属性设置为 true，`message` 就会被当作 HTML 片段处理。
::: slot sourceCode

```html
<template>
  <div>
    <nlrx-button @click="open1">文字居中</nlrx-button>
  </div>
</template>
<script>
  export default {
    methods: {
      open1() {
        this.$message({
          message: "恭喜你，这是一条成功消息",
          type: "success",
          center: true
        });
      }
    }
  };
</script>
```

:::

</demo-block>

## 支持关闭回调

可以通过 `onClose` 字段设置关闭时的回调函数, 参数为被关闭的 `message` 实例

<demo-block>
::: slot source
<message-demo6></message-demo6>
:::

将 `dangerouslyUseHTMLString` 属性设置为 true，`message` 就会被当作 HTML 片段处理。
::: slot sourceCode

```html
<template>
  <div>
    <nlrx-button @click="open1">使用关闭回调</nlrx-button>
  </div>
</template>
<script>
  export default {
    methods: {
      open1() {
        this.$message({
          message: "你知道我在等你吗？",
          type: "success",
          showClose: true,
          closeButtonText: "知道了",
          onClose: () => {
            this.$message("知道还不赶快点个star!!!");
          }
        });
      }
    }
  };
</script>
```

:::

</demo-block>

## Options

|           参数           |                     说明                      |   类型   |           可选值           | 默认值 |
| :----------------------: | :-------------------------------------------: | :------: | :------------------------: | :----: |
|         message          |                   消息文字                    |  string  |             -              |   -    |
|           type           |                     主题                      |  string  | success/warning/info/error |  info  |
| dangerouslyUseHTMLString |     是否将 message 属性作为 HTML 片段处理     | boolean  |             -              | false  |
|         duration         |     显示时间, 毫秒。设为 0 则不会自动关闭     |  number  |             -              |  3000  |
|        showClose         |               是否显示关闭按钮                | boolean  |             -              | false  |
|     closeButtonText      |                关闭按钮的文字                 |  string  |             -              |  关闭  |
|     closeButtonText      |                关闭按钮的文字                 |  string  |             -              |  关闭  |
|          center          |                 文字是否居中                  | boolean  |             -              | false  |
|         onClose          | 关闭时的回调函数, 参数为被关闭的 message 实例 | function |             -              |   -    |
