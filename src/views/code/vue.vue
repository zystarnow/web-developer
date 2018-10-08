<template>
  <div>
    <h2>VUE规范</h2>
    <h4>语法规范</h4>
    <ul>
      <li>[强制] 计算属性必须有返回值。</li>
      <li>[强制] 计算属性禁止包含异步方法。</li>
      <li>[强制] template 的根节点必须合法，只能有一个直接的子节点。</li>
      <li>[强制] v-for 指令的元素必须有 v-bind:key 。</li>
    </ul>
    <p>例如：</p>
    <div class="well">
      <pre><code>&lt;template v-for="(node,index) of children"&gt;
  &lt;li :key="node.id"&gt;
  &lt;/li&gt;
&lt;/template&gt;
&lt;el-option v-for="item of options" :label="item" :key="item"&gt;&lt;/el-option&gt;</code></pre>
    </div>
    <h4>结构化规范</h4>
    <div class="well">
      <pre>
        <code>
   ├── index.html                      入口页面
   ├── build                           构建脚本目录
   │   ├── build-server.js                 运行本地构建服务器，可以访问构后的页面
   │   ├── build.js                        生产环境构建脚本
   │   ├── dev-client.js                   开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
   │   ├── dev-server.js                   运行本地开发服务器
   │   ├── utils.js                        构建相关工具方法
   │   ├── webpack.base.conf.js            wabpack基础配置
   │   ├── webpack.dev.conf.js             wabpack开发环境配置
   │   └── webpack.prod.conf.js            wabpack生产环境配置
   ├── config                          项目配置
   │   ├── dev.env.js                      开发环境变量
   │   ├── index.js                        项目配置文件
   │   ├── prod.env.js                     生产环境变量
   │   └── test.env.js                     测试环境变量
   ├── mock                            mock数据目录
   │   └── hello.js
   ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
   ├── src                             项目源码目录
   │   ├── main.js                         入口js文件
   │   ├── App.vue                         根组件
   │   ├── components                      公共组件目录
   │   │   └── title.vue
   │   ├── assets                          资源目录，这里的资源会被wabpack构建
   │   │   ├── css                         公共样式文件目录
   │   │   ├── js                          公共js文件目录
   │   │   └── img                      图片存放目录
   │   ├── routes                          前端路由
   │   │   └── index.js
   │   ├── store                           应用级数据（state）
   │   │   └── index.js
   │   └── views                           页面目录
   │       ├── hello.vue
   │       └── notfound.vue
   ├── static                          纯静态资源，不会被wabpack构建。
   └── test                            测试文件目录（unit&amp;e2e）
       └── unit                            单元测试
           ├── index.js                        入口脚本
           ├── karma.conf.js                   karma配置文件
           └── specs                           单测case目录
               └── Hello.spec.js</code></pre>
    </div>
    <h4>注释规范</h4>
    <p>代码注释在一个项目的后期维护中显的尤为重要，所以我们要为每一个被复用的组件编写组件使用说明，为组件中每一个方法编写方法说明。</p>
    <p>以下情况，务必添加注释：</p>
    <ul class="well">
      <li>1. 公共组件使用说明；</li>
      <li>2. 各组件中重要函数或者类说明；</li>
      <li>3. 复杂的业务逻辑处理说明；</li>
      <li>4. 特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的hack、使用了某种算法或思路等需要进行注释描述；</li>
      <li>5. 注释块必须以/**（至少两个星号）开头**/；</li>
      <li>6. 单行注释使用//。</li>
    </ul>
    <h4>编码规范</h4>
    <p>优秀的项目源码，即使是多人开发，看代码也如出一人之手。统一的编码规范，可使代码更易于阅读，易于理解，易于维护。</p>
    <p><strong>尽量按照ESLint格式要求编写代码。</strong></p>
    <ul class="well">
      <li>1. 使用ES6风格编码源码<br>&nbsp;&nbsp;&nbsp;&nbsp;定义变量使用let ,定义常量使用const<br>&nbsp;&nbsp;&nbsp;&nbsp;使用export ，import 模块化</li>
      <li>2. 组件 props 原子化<br>&nbsp;&nbsp;&nbsp;&nbsp;提供默认值<br>&nbsp;&nbsp;&nbsp;&nbsp;使用 type 属性校验类型<br>&nbsp;&nbsp;&nbsp;&nbsp;使用 props 之前先检查该 prop 是否存在</li>
      <li>3. 避免 this.$parent</li>
      <li>4. 谨慎使用 this.$refs</li>
      <li>5. 无需将 this 赋值给 component 变量</li>
      <li>6. 调试信息console.log() debugger 使用完及时删除</li>
    </ul>
  </div>
</template>
