<template>
  <div>
    <h2>文件规范</h2>
    <h4>文件目录结构</h4>
    <p>项目开发的目录结构保持一致，使容易理解并方便构建与管理。</p>
    <dl>
      <dt>vue项目文件结构：</dt>
      <dd><img :src="imgUrl" alt=""></dd>
      <dt>纯静态切片文件结构：</dt>
      <dd><img :src="imgUrl2" alt=""></dd>
    </dl>
    <h4>文件夹命名规范</h4>
    <p>文件夹命名尽量<strong>简洁</strong>，用习惯性缩写的单词, 采用容易理解的缩写。</p>
    <p>如：源代码目录使用src，不使用source。</p>
    <p>常用的目录有html、js、css、images、src、doc、pug、fonts、views等。</p>
    <h4>文件/资源命名规范</h4>
    <dl>
      <dt>[建议]: 遵循同一命名约定，使用减号（-）分隔。</dt>
      <dd>解释：<br>
        在 web 项目中，所有的文件名应该都遵循同一命名约定。以可读性而言，减号（-）是用来分隔文件名的不二之选。同时它也是常见的 URL 分隔符（i.e. //example.com/blog/my-blog-entry or //s.example.com/images/big-black-background.jpg），所以理所当然的，减号应该也是用来分隔资源名称的好选择。<br>
        还有一些情况下，需要对文件增加前后缀或特定的扩展名（比如 .min.js, .min.css），抑或一串前缀（比如 3fa89b.main.min.css）。这种情况下，建议使用点分隔符来区分这些在文件名中带有清晰意义的元数据。</dd>
    </dl>
    <dl>
      <dt>[建议] 文件命名总是以字母开头而不是数字。</dt>
      <dd>解释：<br>
        以特殊字符开头命名的文件，一般都有特殊的含义与用处（比如 compass[1] 中的下划线就是用来标记跳过直接编译的文件用的）。</dd>
    </dl>
    <dl>
      <dt>[强制] 资源的字母名称必须全为小写。</dt>
      <dd>解释：<br>
        资源的字母名称必须全为小写，这是因为在某些对大小写字母敏感的操作系统中，当文件通过工具压缩混淆后，或者人为修改过后，大小写不同而导致引用文件不同的错误，很难被发现。</dd>
    </dl>
    <div class="well">
      <strong>推荐：</strong><br>
      1. my-script.js<br>
      2. my-camel-case-name.css<br>
      3. i-love-underscores.html<br>
      4 thousand-and-one-scripts.js<br>
    </div>
    <div class="well">
      <strong>不推荐：</strong><br>
      1. MyScript.js<br>
      2. myCamelCaseName.css<br>
      3. i_love_underscores.html<br>
      4. 1001-scripts.js<br>
      5. my-file-min.css
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl: require('assets/images/vue-file-structure.png'),
      imgUrl2: require('assets/images/static-state-structure.png')
    }
  }
}
</script>
