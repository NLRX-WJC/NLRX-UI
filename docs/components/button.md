# Button 组件

常用的操作按钮。

## 基础用法

基础的按钮用法。

<demo-block>
::: slot source
<button-demo1></button-demo1>
:::

使用 `type` 属性来定义 Button 的样式。
::: slot highlight

```html
<div>
  <nlrx-button>默认按钮</nlrx-button>
  <nlrx-button type="primary">主要按钮</nlrx-button>
  <nlrx-button type="success">成功按钮</nlrx-button>
  <nlrx-button type="info">信息按钮</nlrx-button>
  <nlrx-button type="warning">警告按钮</nlrx-button>
  <nlrx-button type="danger">危险按钮</nlrx-button>
</div>
```

:::

</demo-block>

## 禁用状态

按钮不可用状态。

<demo-block>
::: slot source
<button-demo5></button-demo5>
:::

你可以使用 `disabled` 属性来定义按钮是否可用，它接受一个 `Boolean` 值。
::: slot highlight

```html
<div>
  <nlrx-button disabled>默认按钮</nlrx-button>
  <nlrx-button type="primary" disabled>主要按钮</nlrx-button>
  <nlrx-button type="success" disabled>成功按钮</nlrx-button>
  <nlrx-button type="info" disabled>信息按钮</nlrx-button>
  <nlrx-button type="warning" disabled>警告按钮</nlrx-button>
  <nlrx-button type="danger" disabled>危险按钮</nlrx-button>
</div>
```

:::

</demo-block>

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）

<demo-block>
::: slot source
<button-demo2></button-demo2>
:::

设置 `icon` 属性即可，也可以使用 `position` 属性来定义 `icon`在 Button 中的位置

::: slot highlight

```html
<div>
  <nlrx-button type="primary" position="left" icon="edit">编辑(图标在左)</nlrx-button>
  <nlrx-button type="primary" position="right" icon="edit">编辑(图标在右)</nlrx-button>
  <nlrx-button type="primary" icon="edit"></nlrx-button>
</div>
```

:::
</demo-block>

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<demo-block>
::: slot source
<button-demo3></button-demo3>
:::

要设置为 loading 状态，只要设置 loading 属性为 true 即可。

::: slot highlight

```html
<nlrx-button type="primary" :loading="true">加载中</nlrx-button>
```

:::
</demo-block>

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

<demo-block>
::: slot source
<button-demo4></button-demo4>
:::

使用`<nlrx-button-group>`标签来嵌套你的按钮。

::: slot highlight

```html
<nlrx-button-group>
  <nlrx-button type="primary" icon="left" position="left">上一页</nlrx-button>
  <nlrx-button type="primary" icon="right" position="right">下一页</nlrx-button>
</nlrx-button-group>

<nlrx-button-group>
  <nlrx-button type="primary" icon="edit"></nlrx-button>
  <nlrx-button type="primary" icon="edit"></nlrx-button>
  <nlrx-button type="primary" icon="edit"></nlrx-button>
</nlrx-button-group>
```

:::
</demo-block>

## Attributes

| 参数     | 说明           | 类型    | 可选值                                      | 默认值  |
| :------- | :------------- | :------ | :------------------------------------------ | :------ |
| type     | 类型           | string  | primary / success / warning / danger / info | default |
| icon     | 图标类名       | string  | -                                           | -       |
| loading  | 是否加载中状态 | boolean | -                                           | false   |
| position | 图标位置       | string  | left / right                                | left    |
| disabled | 是否禁用状态       | boolean  | -                               | false    |
