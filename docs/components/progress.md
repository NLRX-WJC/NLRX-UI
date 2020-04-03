# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 基础用法

<demo-block>
::: slot source
<progress-demo1></progress-demo1>
:::

Progress 组件设置 `percentage` 属性即可，表示进度条对应的百分比，**必填**，必须在 0-100。
::: slot sourceCode

```html
<nlrx-progress :percentage="20"></nlrx-progress>
```

:::

</demo-block>

## 显示百分比

<demo-block>
::: slot source
<progress-demo2></progress-demo2>
:::

Progress 组件可通过 `show-text` 属性来设置是否显示进度条，默认不显示。
::: slot sourceCode

```html
<nlrx-progress :percentage="20" show-text></nlrx-progress>
```

:::

</demo-block>

## 自定义颜色

<demo-block>
::: slot source
<progress-demo3></progress-demo3>
:::

可以通过 `color` 设置进度条的颜色，默认颜色为 blue 。
::: slot sourceCode

```html
<nlrx-progress :percentage="20" show-text color="#5cb87a"></nlrx-progress>
```

:::

</demo-block>

## 进度条宽度

<demo-block>
::: slot source
<progress-demo4></progress-demo4>
:::

可以通过 `stroke-width` 设置进度条的宽度，单位为 `px` ，默认宽度为 26px 。
::: slot sourceCode

```html
<nlrx-progress :percentage="20" show-text :stroke-width="50"></nlrx-progress>
```

:::

</demo-block>

## Attributes

|     参数     |          说明          |  类型   | 可选值 | 默认值 |
| :----------: | :--------------------: | :-----: | :----: | :----: |
|  percentage  |     百分比（必填）     | number  | 0-100  |   0    |
| stroke-width | 进度条的宽度，单位 px  | number  |   -    |   26   |
|    color     |      进度条背景色      | string  |   -    |  blue  |
|  show-text   | 是否显示进度条文字内容 | boolean |   -    |  true  |
