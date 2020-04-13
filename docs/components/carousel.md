# Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容。

## 基础用法

适用广泛的基础用法。

<demo-block>
::: slot source
<carousel-demo1></carousel-demo1>
:::

结合使用 `nlrx-carousel` 和 `nlrx-carousel-item` 标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在 `nlrx-carousel-item` 标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。
::: slot sourceCode

```html
<template>
  <nlrx-carousel>
    <nlrx-carousel-item>
      <div class="carousel-content" style="background-color:red">
        <h1>1</h1>
      </div>
    </nlrx-carousel-item>
    <nlrx-carousel-item>
      <div class="carousel-content" style="background-color:blue">
        <h1>2</h1>
      </div>
    </nlrx-carousel-item>
    <nlrx-carousel-item>
      <div class="carousel-content" style="background-color:yellow">
        <h1>3</h1>
      </div>
    </nlrx-carousel-item>
  </nlrx-carousel>
</template>
<style>
  .carousel-content {
    height: 300px;
    text-align: center;
    line-height: 300px;
  }
</style>
```

:::

</demo-block>

## 切换箭头

可以设置切换箭头的显示时机。

<demo-block>
::: slot source
<carousel-demo2></carousel-demo2>
:::

`arrow` 属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将 `arrow` 设置为 `always` ，则会一直显示；设置为 `never` ，则会一直隐藏。。
::: slot sourceCode

```html
<template>
  <nlrx-carousel arrow="always">
    <nlrx-carousel-item>
      <div class="carousel-content" style="background-color:red">
        <h1>1</h1>
      </div>
    </nlrx-carousel-item>
    <nlrx-carousel-item>
      <div class="carousel-content" style="background-color:blue">
        <h1>2</h1>
      </div>
    </nlrx-carousel-item>
    <nlrx-carousel-item>
      <div class="carousel-content" style="background-color:yellow">
        <h1>3</h1>
      </div>
    </nlrx-carousel-item>
  </nlrx-carousel>
</template>
<style>
  .carousel-content {
    height: 300px;
    text-align: center;
    line-height: 300px;
  }
</style>
```

:::

</demo-block>

## Carousel Attributes

| 参数          | 说明                                  | 类型    | 可选值            | 默认值 |
| :------------ | :------------------------------------ | :------ | :---------------- | :----- |
| height        | 走马灯的高度                          | string  | -                 | 300px  |
| initial-index | 初始状态激活的幻灯片的索引，从 0 开始 | number  | -                 | 0      |
| autoplay      | 是否自动切换                          | boolean | -                 | true   |
| interval      | 自动切换的时间间隔，单位为毫秒        | number  | -                 | 3000   |
| arrow         | 切换箭头的显示时机                    | string  | always/hover/neve | hover  |
| loop          | 是否循环显示                          | boolean | -                 | true   |
