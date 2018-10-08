<template>
  <div>
    <h2>对接测试</h2>
    <h4>接口对接</h4>
    <ul>
      <li>1. 后端人员最好有在线的接口文档，常见的工具有Showdoc、Swagger等。</li>
      <li>2. 前后端统计交互方式，接口遵循HTTPs协议，统一接口传送方式、接口传输数据类型。</li>
      <li>3. 同一类项目统一接口设计风格，如遵循RESTful API风格。</li>
      <li>4. 前端在调用接口时每个项目封装一套统一的方法，如请求成功或清除错误统一处理方式。</li>
      <li>如下面的接口返回方式：</li>
      <li><img :src="imgUrl" alt=""></li>
    </ul>
    <h4>测试要求</h4>
    <dl>
      <dt>基本要求</dt>
      <dd>1. 前端开发文件最基本就是还原设计图的样子，保证页面基本符合设计图要求。</dd>
      <dd>2. 保证页面布局缩放等都能友好显示。</dd>
      <dd>3. 尽量消除console下所有的报错，警告适当解决。</dd>
      <dt>兼容测试</dt>
      <dd><img :src="imgUrl2" alt="" width="300"></dd>
      <dd>1. 根据不同项目及用户需求选择需要兼容的浏览器版本及兼容平台（PC、移动端）。</dd>
      <dd>2. 从网络数据上可以看，使用量占比大的主要浏览器有chrome、firefox、safari、ie9+等，国内还有些浏览器使用率也比较大，如360安全浏览器、UC浏览器。</dd>
      <dd>3. 所以我们需要兼容的浏览器主要是这些，为保证页面友好PC端对外用户网站IE浏览器最好兼容IE8+，后台管理系统可以兼容IE9+。</dd>
      <dd>4. 如果是移动端开发需兼容当期市面所有主流手机等移动端浏览器。</dd>
      <dt>单页测试</dt>
      <dd>目前可以不需要进行单页测试，根据需求可以使用 Karma 进行自动化测试。</dd>
    </dl>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl: require('assets/images/port.png'),
      imgUrl2: require('assets/images/browser.jpg')
    }
  }
}
</script>
