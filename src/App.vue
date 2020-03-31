<template>
  <div id="app">
    <h1>Button</h1>
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
    <nlrx-button type="info" position="right" icon="sousuo">信息按钮</nlrx-button>
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
    <hr>
    <h1>Input</h1>
    <nlrx-input></nlrx-input>
    <nlrx-input disabled></nlrx-input>
    <nlrx-input readonly></nlrx-input>
    <nlrx-input v-model="msg" show-password></nlrx-input>
    <nlrx-input v-model="msg" clearable @clear="fn"></nlrx-input>
    <nlrx-input v-model="msg" @change="fn"></nlrx-input>
    <nlrx-input prefixIcon="edit"></nlrx-input>
    <nlrx-input suffixIcon="edit"></nlrx-input>
    <hr>
    <h1>栅格系统</h1>
    <div style="width:1000px;border:1px solid green;margin:0 auto">
      <nlrx-row>
        <nlrx-col :span="12"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="12"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row>
        <nlrx-col :span="2"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="10"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="4"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row>
        <nlrx-col :span="6" ><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="10"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row>
        <nlrx-col :span="2" ><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="10" :offset="4"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="2" :offset="2"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="4"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row :gutter="20">
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="4"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="4"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row :gutter="20">
        <nlrx-col :span="6" ><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="10"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="8"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row :gutter="20">
        <nlrx-col :span="2"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="20" :offset="2"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
      <nlrx-row :gutter="20">
        <nlrx-col :span="4"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
        <nlrx-col :span="20"><div style="height:100px;background:grey;border:1px solid red"></div></nlrx-col>
      </nlrx-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg:""
    }
  },
  methods:{
    fn(e){
      console.log(111111)
    }
  }
}
</script>
