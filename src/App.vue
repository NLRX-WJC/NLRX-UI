<template>
  <div id="app">
    <!-- 默认按钮 -->
    <nlrx-button>默认按钮</nlrx-button>
    <br>
    <!-- 带类型的按钮 -->
    <nlrx-button type="primary" disabled>主要按钮</nlrx-button>
    <nlrx-button type="warning">警告按钮</nlrx-button>
    <nlrx-button type="danger">危险按钮</nlrx-button>
    <nlrx-button type="success">成功按钮</nlrx-button>
    <nlrx-button type="info">信息按钮</nlrx-button>
    <br>
    <!-- 带icon的按钮 -->
    <nlrx-button type="info" icon="sousuo">信息按钮</nlrx-button>
    <nlrx-button type="primary" icon="sousuo"></nlrx-button>
    <nlrx-button type="success" icon="sousuo" icon-position="right">内容</nlrx-button>
    <br>
    <!-- loading按钮 -->
    <nlrx-button type="success" :loading="true">加载中</nlrx-button>
    <br>
    <!-- 触发事件 -->
    <nlrx-button type="success" @click="fn">触发事件</nlrx-button>
    <br>

    <nlrx-button-group>
      <nlrx-button  icon="left" icon-position="left">上一页</nlrx-button>
      <nlrx-button  icon="right" icon-position="right">下一页</nlrx-button>
    </nlrx-button-group>

    <nlrx-icon icon="sousuo"></nlrx-icon>
    <nlrx-icon icon="edit"></nlrx-icon>
    <br>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    fn(e){
      console.log(e)
    }
  }
}
</script>
