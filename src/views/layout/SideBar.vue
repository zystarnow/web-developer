<template>
  <div>
    <el-menu class="left-menu" router unique-opened background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF" :default-active="$route.path">
      <el-menu-item index="/index">
        <i class="el-icon-menu"></i>
        <span slot="title">前言</span>
      </el-menu-item>
      <el-menu-item index="/technology">
        <i class="el-icon-view"></i>
        <span slot="title">评审及选型</span>
      </el-menu-item>
      <el-menu-item index="/environment">
        <i class="el-icon-news"></i>
        <span slot="title">开发前准备</span>
      </el-menu-item>
      <el-menu-item index="/filespec">
        <i class="el-icon-message"></i>
        <span slot="title">文件规范</span>
      </el-menu-item>
      <el-submenu index="/code/general">
        <template slot="title">
          <i class="el-icon-more"></i>
          <span>代码规范</span>
        </template>
        <el-menu-item index="/code/general">通用规范</el-menu-item>
        <el-menu-item index="/code/html">HTML规范</el-menu-item>
        <el-menu-item index="/code/css">CSS规范</el-menu-item>
        <el-menu-item index="/code/js">JS规范</el-menu-item>
        <el-menu-item index="/code/vue">VUE规范</el-menu-item>
      </el-submenu>
      <el-menu-item index="/debug">
        <i class="el-icon-bell"></i>
        <span slot="title">对接测试</span>
      </el-menu-item>
      <el-menu-item index="/deploy">
        <i class="el-icon-time"></i>
        <span slot="title">发布部署</span>
      </el-menu-item>
      <el-submenu index="/plugins/layer">
        <template slot="title">
          <i class="el-icon-rank"></i>
          <span>常用JS插件</span>
        </template>
        <el-menu-item index="/plugins/layer">layer弹出框</el-menu-item>
        <el-menu-item index="/plugins/laydate">laydate日期控件</el-menu-item>
        <el-menu-item index="/plugins/linkage">三级联动</el-menu-item>
        <el-menu-item index="/plugins/validate">表单验证</el-menu-item>
        <el-menu-item index="/plugins/superSlide">滚动切换插件</el-menu-item>
      </el-submenu>
      <el-submenu index="/component/element">
        <template slot="title">
          <i class="el-icon-share"></i>
          <span>常用VUE组件</span>
        </template>
        <el-menu-item index="/component/element">element-ui</el-menu-item>
        <el-menu-item index="/component/iView">iView</el-menu-item>
      </el-submenu>
      <el-menu-item index="/repository">
        <i class="el-icon-tickets"></i>
        <span slot="title">前端知识库</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.el-menu{
  border: none;
}
.left-menu{
  width: 180px;
}
.el-submenu .el-menu-item {
  min-width: 180px;
}
</style>
