<template>
  <div>
    <h4>规范目的</h4>
    <p>为提高团队协作效率，便于后台人员添加功能及前端后期优化维护，输出高质量的文档，在网站建设中，使结构更加清晰，代码简明有序，有一个更好的前端架构。</p>
    <p>本规范文档一经确认，开发人员必须按本文档规范进行前台页面开发。</p>
    <p>本文档如有不对或者不合适的地方请及时提出，经讨论决定后可更改。</p>
    <h4>规范基本准则</h4>
    <p>符合web标准，使用具有语义的标签，使结构、表现、行为分离，兼容性优良。页面性能优化，代码简洁、明了、有序，尽可能的减少服务器的负载，保证最快的解析速度。</p>
    <h4>参考规则</h4>
    <p>百度规范  <a target="_blank" href="https://github.com/ecomfe/spec">https://github.com/ecomfe/spec</a></p>
    <p>谷歌规范  <a target="_blank" href="https://github.com/google/styleguide">https://github.com/google/styleguide</a></p>
    <p>通过分析github代码库总结出来的工程师代码书写习惯 <a target="_blank" href="http://alloyteam.github.io/CodeGuide">http://alloyteam.github.io/CodeGuide</a></p>
    <h4>前端开发流程</h4>
    <div class="step">
      <span class="step-info">需求评审</span>
      <span>→</span>
      <span class="step-info">技术选型</span>
      <span>→</span>
      <span class="step-info">项目开发</span>
      <span>→</span>
      <span class="step-info">对接调试</span>
      <span>→</span>
      <span class="step-info">测试发布</span>
    </div>
  </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
.step{
  span {
    display: inline-block;
    margin: 0 8px;
  }
  .step-info{
    background-color: #909399;
    color: #fff;
    font-size: 16px;
    padding: 0 20px;
    border-radius: 5px;
  }
  line-height: 40px;
}
</style>
