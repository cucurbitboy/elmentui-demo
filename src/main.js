import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Button } from 'element-react';

// import 'element-theme-default';


// ReactDOM.render(<Button type="primary">Hello</Button>, document.getElementById('App'));

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app', //提供一个在页面上已经存在的 DOM 元素作为 Vue 实例挂载目标
  render: h => {
    return h(App)
  }
})
