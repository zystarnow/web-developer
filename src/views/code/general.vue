<template>
  <div>
    <h2>通用规范</h2>
    <h4>文本缩进</h4>
    <p><strong>[建议]</strong> TAB键用两个空格代替，必须确保一个项目内的统一性，禁止空格Tab混用。</p>
    <h4>协议</h4>
    <dl>
      <dt>[建议] 不要指定引入资源所带的具体协议，即无协议URL。</dt>
      <dd><strong>解释：</strong><br>
        当引入图片或其他资源文件，还有样式和脚本时，URLs 所指向的具体路径，不要指定协议部分（http:, https:），除非这两者协议都不可用。<br>
        不指定协议使得 URL 从绝对的获取路径转变为相对的，在请求资源协议无法确定时非常好用，而且还能为文件大小节省几个字节。<br>
      </dd>
      <dd>示例：</dd>
      <dd class="well">
        <pre><code>&lt;script src="//cdn.com/foundation.min.js"&gt;&lt;/script&gt;</code></pre>
      </dd>
    </dl>
    <h4>注释</h4>
    <dl>
      <dt>[建议] 注释不仅要说明how，更要说明 what。</dt>
      <dd><strong>解释：</strong><br>
        注释是你自己与你的小伙伴们了解代码写法和目的的唯一途径。特别是在写一些看似琐碎的无关紧要的代码时，由于记忆点不深刻，注释就变得尤为重要了。<br>
        当你写注释时一定要注意：不要写你的代码都干了些什么，而要写你的代码为什么要这么写，背后的考量是什么。当然也可以加入所思考问题或是解决方案的链接地址。<br>
        [强制] 注释的斜线或 * 后必须跟一个空格。
      </dd>
    </dl>
    <h4>使用eslint来检测规则</h4>
    <p>ESLint 是一个开源的 JavaScript 代码检查工具，由 Nicholas C. Zakas 于2013年6月创建。代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具。</p>
    <p>想了解更多请访问官方地址：<a href="http://eslint.cn/" target="_block">http://eslint.cn/</a></p>
  </div>
</template>
