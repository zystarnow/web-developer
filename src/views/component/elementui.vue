<template>
  <div>
    <h2>Element UI组件库</h2>
    <h4>介绍</h4>
    <p>Element UI 是一套采用 Vue 2.0 作为基础框架实现的组件库，它面向企业级的后台应用，能够帮助你快速地搭建网站，极大地减少研发的人力与时间成本。</p>
    <p>想了解更多可前往<a href="http://element-cn.eleme.io/#/zh-CN/component/installation" target="_block">Element UI官方网站</a></p>
    <h4>npm 安装</h4>
    <p>推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <div class="well">
      <pre><code>npm i element-ui -S</code></pre>
    </div>
    <h4>引入 Element</h4>
    <p><strong>完整引入</strong></p>
    <p>在 main.js 中写入以下内容：</p>
    <pre class="well">import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});</pre>
    <p><strong>按需引入</strong></p>
    <p>借助 <a href="https://github.com/QingWei-Li/babel-plugin-component" target="_block">babel-plugin-component</a>，我们可以只引入需要的组件，以达到减小项目体积的目的。</p>
    <p>首先，安装 babel-plugin-component：</p>
    <pre class="well">npm install babel-plugin-component -D</pre>
    <p>然后，将 .babelrc 修改为：</p>
    <pre class="well">{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}</pre>
    <p>接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：</p>
    <pre class="well">import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});</pre>
  </div>
</template>
