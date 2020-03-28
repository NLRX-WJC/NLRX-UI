---
title: 快速上手
---

# 快速上手

```javascript
import Vue from 'vue';
import NlrxUI from "nlrx-ui";
import "nlrx-ui/dist/nlrx-ui.css";
import App from './App.vue';

Vue.use(NlrxUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
