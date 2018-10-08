<template>
  <div>
    <h2>开发工具选择及环境配置</h2>
    <h4>代码编辑器工具选择</h4>
    <p>开发工具原则上没有强制用哪个开发工具，可以根据自己的个人习惯进行选择。</p>
    <p>根据现有项目使用技术推荐一下几种开发工具。</p>
    <dl>
      <dt>1. Sublime Text</dt>
      <dd>特点：轻巧</dd>
      <dd>下载地址：<a href="https://www.sublimetext.com/3" target="_blank">https://www.sublimetext.com/3</a></dd>
      <dt>2. Visual Studio Code</dt>
      <dd>特点：轻巧，自带很多插件功能</dd>
      <dd>下载地址：<a href="https://code.visualstudio.com/Download" target="_blank">https://code.visualstudio.com/Download</a></dd>
    </dl>
    <h4>切图工具选择</h4>
    <dl>
      <dt>推荐使用：Adobe Photoshop CC</dt>
      <dd>功能强大，新增很多适合切图功能，自动实现CSS3功能等。</dd>
    </dl>
    <h4>代码版本控制系统</h4>
    <dl>
      <dt>Git</dt>
      <dd>使用说明推荐文章：<a href="http://www.ruanyifeng.com/blog/2014/06/git_remote.html">阮一峰的Git远程操作详解</a></dd>
      <dd>下载地址：<a href="https://git-scm.com/download/win" target="_blank">https://git-scm.com/download/win</a></dd>
      <dt>SVN</dt>
      <dd>一个很好用的开源版本控制系统</dd>
    </dl>
    <h4>服务器工具</h4>
    <dl>
      <dt>推荐：nginx</dt>
      <dd>一个高性能的HTTP和反向代理服务器，也是一个IMAP/POP3/SMTP服务器。</dd>
      <dd>用于部署前端文件。</dd>
    </dl>
    <h4>Node配置</h4>
    <p>一个基于 Chrome V8 引擎的 JavaScript 运行环境，现有开发打包自动化构建等都需要用到node.js，所以对整个环境需要配置node.js。</p>
    <p>Node.js 的包管理器 npm，是全球最大的开源库生态系统。</p>
    <p>npm下载地址：<a href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a></p>
    <p>国内可安装cnpm淘宝镜像加速下载：npm install -g cnpm --registry=http://registry.npm.taobao.org </p>
    <p>安装后可以用cnpm替代npm</p>
    <p>临时使用淘宝镜像：npm install express --registry https://registry.npm.taobao.org</p>
    <h4>Gulp配置</h4>
    <p>安装好node.js之后就可以使用安装命令安装。</p>
    <p>安装命令：npm install gulp -g</p>
    <h4>Vue配置</h4>
    <p>安装命令：npm install vue -g</p>
    <p>全局安装vue-cli手机架：npm install --global vue-cli</p>
    <p>&nbsp;</p>
    <p class="text-danger">以上工具对于开发人员来说基本都用得上，在装机之后可以全部装上，其他的工具可以根据自己的习惯及需求进行安装。</p>
  </div>
</template>
