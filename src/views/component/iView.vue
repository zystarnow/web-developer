<template>
  <div>
    <h2>iView组件库</h2>
    <h4>介绍</h4>
    <p>iView 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。</p>
    <p>想了解更多可前往<a href="https://www.iviewui.com/" target="_block">iView官方网站</a></p>
    <h4>npm 安装</h4>
    <p>推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 webpack 配合使用，当然，我们也推荐使用 ES2015。</p>
    <div class="well">
      <pre><code>npm install iview --save</code></pre>
    </div>
    <h4>引入 iView</h4>
    <p><strong>完整引入</strong></p>
    <p>一般在 webpack 入口页面 main.js 中如下配置：</p>
    <pre class="well">import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);

// The routing configuration
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});</pre>
    <p><strong>按需引用 </strong></p>
    <p>借助插件 <a href="https://github.com/ant-design/babel-plugin-import" target="_blank">babel-plugin-import</a>可以实现按需加载组件，减少文件体积。首先安装，并在文件 .babelrc 中配置：</p>
    <pre class="well">npm install babel-plugin-import --save-dev

// .babelrc
{
"plugins": [["import", {
  "libraryName": "iview",
  "libraryDirectory": "src/components"
}]]
}</pre>
    <p>然后这样按需引入组件，就可以减小体积了：</p>
    <pre class="well">import { Button, Table } from 'iview';
Vue.component('Button', Button);
Vue.component('Table', Table);</pre>
  </div>
</template>
