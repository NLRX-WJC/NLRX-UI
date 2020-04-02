import Vue from 'vue'
import('../../src/packages').then(NlrxUI => {
  Vue.use(NlrxUI);
})