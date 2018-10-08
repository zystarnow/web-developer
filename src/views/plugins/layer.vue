<template>
  <div>
    <h2>layer弹出框插件</h2>
    <h4>介绍</h4>
    <p>layer兼容包括IE6在内的所有主流浏览器。她包含多种类型，如询问层，页面层，加载层，iframe层，tab层，prompt层，相册层等等，能充分满足我们的需求。</p>
    <p>layer官方出了很多例子，非常浅显易懂，此处只展示系统中常用的。</p>
    <p>想了解更多可前往<a href="http://layer.layui.com/" target="_block">layer官方演示与API</a></p>
    <h4>引用说明</h4>
    <p>下载后，在页面引入最新的js:</p>
    <div class="well">
      <pre><code>&lt;script src="../js/vendor/layer-3.0.3/layer.js"&gt;&lt;script&gt;</code></pre>
    </div>
    <p>示例对应代码:</p>
    <div class="well">
      <pre><code>特别说明：事件需自己绑定，以下只展现调用代码。
  //初体验
  layer.alert('内容');

  //询问框
  layer.confirm('您是如何看待前端开发？', {
    btn: ['重要','奇葩'] //按钮
  }, function(){
    layer.msg('的确很重要', {icon: 1});
  }, function(){
    layer.msg('也可以这样', {
      time: 20000, //20s后自动关闭
      btn: ['明白了', '知道了']
    });
  });

  //提示层
  layer.msg('玩命提示中');</code></pre>
    </div>
  </div>
</template>
