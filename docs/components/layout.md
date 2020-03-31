# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用单一分栏创建基础的栅格布局。

<demo-block>
::: slot source
<layout-demo1></layout-demo1>
:::

通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。
::: slot sourceCode

```html
<nlrx-row>
  <nlrx-col :span="24"><div class="content"></div></nlrx-col>
</nlrx-row>
<nlrx-row>
  <nlrx-col :span="12"><div class="content"></div></nlrx-col>
  <nlrx-col :span="12"><div class="content"></div></nlrx-col>
</nlrx-row>
<nlrx-row>
  <nlrx-col :span="8"><div class="content"></div></nlrx-col>
  <nlrx-col :span="8"><div class="content"></div></nlrx-col>
  <nlrx-col :span="8"><div class="content"></div></nlrx-col>
</nlrx-row>
<nlrx-row>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
</nlrx-row>
<nlrx-row>
  <nlrx-col :span="4"><div class="content"></div></nlrx-col>
  <nlrx-col :span="4"><div class="content"></div></nlrx-col>
  <nlrx-col :span="4"><div class="content"></div></nlrx-col>
  <nlrx-col :span="4"><div class="content"></div></nlrx-col>
  <nlrx-col :span="4"><div class="content"></div></nlrx-col>
  <nlrx-col :span="4"><div class="content"></div></nlrx-col>
</nlrx-row>
<style scoped>
.content {
  height: 50px;
  background: grey;
  border: 1px solid red;
}
</style>
```

:::

</demo-block>

## 分栏间隔

分栏之间存在间隔。

<demo-block>
::: slot source
<layout-demo2></layout-demo2>
:::

 Row 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。
::: slot sourceCode

```html
<nlrx-row :gutter="20">
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
</nlrx-row>
<style scoped>
.content {
  height: 50px;
  background: grey;
  border: 1px solid red;
}
</style>
```

:::

</demo-block>

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<demo-block>
::: slot source
<layout-demo3></layout-demo3>
:::

::: slot sourceCode

```html
<nlrx-row :gutter="20">
  <nlrx-col :span="16"><div class="content"></div></nlrx-col>
  <nlrx-col :span="8"><div class="content"></div></nlrx-col>
</nlrx-row>
<nlrx-row :gutter="20">
  <nlrx-col :span="8"><div class="content"></div></nlrx-col>
  <nlrx-col :span="8"><div class="content"></div></nlrx-col>
  <nlrx-col :span="4"><div class="content"></div></nlrx-col>
  <nlrx-col :span="4"><div class="content"></div></nlrx-col>
</nlrx-row>
<nlrx-row :gutter="20">
  <nlrx-col :span="4"><div class="content"></div></nlrx-col>
  <nlrx-col :span="16"><div class="content"></div></nlrx-col>
  <nlrx-col :span="4"><div class="content"></div></nlrx-col>
</nlrx-row>
<style scoped>
.content {
  height: 50px;
  background: grey;
  border: 1px solid red;
}
</style>
```

:::

</demo-block>

## 分栏偏移

支持偏移指定的栏数。

<demo-block>
::: slot source
<layout-demo4></layout-demo4>
:::
通过制定 col 组件的 `offset` 属性可以指定分栏偏移的栏数。
::: slot sourceCode

```html
<nlrx-row :gutter="20">
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6" :offset="6"><div class="content"></div></nlrx-col>
</nlrx-row>
<nlrx-row :gutter="20">
  <nlrx-col :span="6" :offset="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6" :offset="6"><div class="content"></div></nlrx-col>
</nlrx-row>
<nlrx-row :gutter="20">
  <nlrx-col :span="12" :offset="6"><div class="content"></div></nlrx-col>
</nlrx-row>
<style scoped>
.content {
  height: 50px;
  background: grey;
  border: 1px solid red;
}
</style>
```

:::

</demo-block>

## 对齐方式

通过 `flex` 布局来对分栏进行灵活的对齐。

<demo-block>
::: slot source
<layout-demo5></layout-demo5>
:::
将 `type` 属性赋值为 'flex'，可以启用 flex 布局，并可通过 `justify` 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。
::: slot sourceCode

```html
<nlrx-row type="flex" justify="start">
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
</nlrx-row>
<nlrx-row type="flex" justify="center">
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
</nlrx-row>
<nlrx-row type="flex" justify="end">
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
</nlrx-row>
<nlrx-row type="flex" justify="space-between">
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
</nlrx-row>
<nlrx-row type="flex" justify="space-around">
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
  <nlrx-col :span="6"><div class="content"></div></nlrx-col>
</nlrx-row>
<style scoped>
.content {
  height: 50px;
  background: grey;
  border: 1px solid red;
}
</style>
```

:::

</demo-block>

## 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`。

<demo-block>
::: slot source
<layout-demo6></layout-demo6>
:::

::: slot sourceCode

```html
<nlrx-row :gutter="10">
  <nlrx-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="content"></div></nlrx-col>
  <nlrx-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="content"></div></nlrx-col>
  <nlrx-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="content"></div></nlrx-col>
  <nlrx-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="content"></div></nlrx-col>
</nlrx-row>
<style scoped>
.content {
  height: 50px;
  background: grey;
  border: 1px solid red;
}
</style>
```

:::

</demo-block>

## Row Attributes

|  参数   |           说明            |  类型  |                   可选值                    | 默认值 |
| :-----: | :-----------------------: | :----: | :-----------------------------------------: | :----: |
| gutter  |         栅格间隔          | number |                      -                      |   0    |
|  type   |    布局模式，可选 flex    | string |                      -                      |   -    |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between | start  |

## Col Attributes

|  参数  |                  说明                  |                    类型                     | 可选值 | 默认值 |
| :----: | :------------------------------------: | :-----------------------------------------: | :----: | :----: |
|  span  |             栅格占据的列数             |                   number                    |   -    |   24   |
| offset |           栅格左侧的间隔格数           |                   number                    |   -    |   0    |
|   xs   | `<768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) |   -    |   -    |
|   sm   | `≥768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) |   -    |   -    |
|   md   | `≥992px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) |   -    |   -    |
|   lg   | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) |   -    |        |
|   xl   | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) |   -    |   -    |
