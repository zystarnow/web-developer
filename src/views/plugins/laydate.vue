<template>
  <div>
    <h2>laydate弹出框插件</h2>
    <h4>介绍</h4>
    <p>layDate 是 layui 独立维护的三大组件之一，5.0 的版本对其进行了一次全面的重写。</p>
    <p>想了解更多可前往<a href="http://www.layui.com/laydate/" target="_block">laydate官方演示与API</a></p>
    <h4>引用说明</h4>
    <p>下载后，在页面引入最新的js:</p>
    <div class="well">
      <pre><code>&lt;script src="../js/laydate/laydate.js"&gt;&lt;script&gt;</code></pre>
    </div>
    <p>示例对应代码:</p>
    <div class="well">
      <pre><code>&lt;script type="text/javascript"&gt;
// 执行一个laydate实例
laydate.render({
  elem: '#test1' //指定元素
});
// 同时绑定多个
lay('.test-item').each(function(){
  laydate.render({
    elem: this
    ,trigger: 'click'
  });
});
&lt;/script&gt;</code></pre>
    </div>
  </div>
</template>
