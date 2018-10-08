<template>
  <div>
    <h2>jquery.validate表单验证插件</h2>
    <h4>介绍</h4>
    <p>jQuery Validate 插件为表单提供了强大的验证功能，让客户端表单验证变得更简单，同时提供了大量的定制选项，满足应用程序各种需求。该插件捆绑了一套有用的验证方法，包括 URL 和电子邮件验证，同时提供了一个用来编写用户自定义方法的 API。所有的捆绑方法默认使用英语作为错误信息，且已翻译成其他 37 种语言。</p>
    <p>想了解更多可前往<a href="https://jqueryvalidation.org/" target="_block">官方网站</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.runoob.com/jquery/jquery-plugin-validate.html" target="_block">菜鸟教程</a></p>
    <h4>引用说明</h4>
    <p>下载后，在页面引入最新的js:</p>
    <div class="well">
      <pre><code>&lt;script src="../jquery.validate.min.js"&gt;&lt;script&gt;</code></pre>
    </div>
    <p>示例对应代码:</p>
    <div class="well">
      <pre><code>function validform () {
  //关键在此增加了一个return，返回的是一个validate对象，这个对象有一个form方法，返回的是是否通过验证
  return $('#commentForm').validate({
    //自定义验证规则
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true
      },
      comment: {
        required: true,
      }
    },
    //自定义验证不通过的错误消息
    messages: {
      name: {
        required: '请填写用户名',
        minlength: '用户名长度不能小于2个字',
      },
      email: {
        required: '请填写邮箱',
        email: '请填写正确的邮箱'
      },
      comment: {
        required: '请填写评论',
      }
    }
  });
};
$(function () {
  // 当按钮被点击时发起验证
  $("#btn").click(function () {
    if(validform().form()) {
      //验证通过后执行的代码
    } else {
      //验证不通过不需要执行代码，错误消息会自动显示
    }
  });
});</code></pre>
    </div>
  </div>
</template>
