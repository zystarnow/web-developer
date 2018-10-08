import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/layout'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/',
      name: '前言',
      component: Layout,
      redirect: '/index',
      children: [
        { path: 'index', component: _import('preface/index') },
        { path: 'technology', component: _import('misc/technology'), name: 'technology', meta: {title: '评审及选型'} },
        { path: 'environment', component: _import('misc/environment'), name: 'environment', meta: {title: '评审及选型'} },
        { path: 'filespec', component: _import('misc/files'), name: 'filespec', meta: {title: '文件规范'} },
        { path: 'debug', component: _import('misc/debug'), name: 'debug', meta: {title: '对接测试'} },
        { path: 'deploy', component: _import('misc/deploy'), name: 'deploy', meta: {title: '发布部署'} },
        { path: 'repository', component: _import('preface/repository'), name: 'repository', meta: {title: '前端知识库'} }
      ]
    },
    { path: '/code',
      name: '代码规范',
      component: Layout,
      redirect: '/general',
      children: [
        { path: 'general', component: _import('code/general'), name: 'code-general', meta: {title: '通用规范'} },
        { path: 'html', component: _import('code/html'), name: 'code-html', meta: {title: 'HTML规范'} },
        { path: 'css', component: _import('code/css'), name: 'code-css', meta: {title: 'CSS规范'} },
        { path: 'js', component: _import('code/js'), name: 'code-js', meta: {title: 'JS规范'} },
        { path: 'vue', component: _import('code/vue'), name: 'code-vue', meta: {title: 'VUE规范'} }
      ]
    },
    { path: '/plugins',
      name: '常用JS插件',
      component: Layout,
      redirect: '/layer',
      children: [
        { path: 'layer', component: _import('plugins/layer'), name: 'plugins-layer', meta: {title: 'layer弹出框'} },
        { path: 'laydate', component: _import('plugins/laydate'), name: 'plugins-laydate', meta: {title: 'laydate日期控件'} },
        { path: 'linkage', component: _import('plugins/linkage'), name: 'plugins-linkage', meta: {title: '三级联动'} },
        { path: 'validate', component: _import('plugins/validate'), name: 'plugins-validate', meta: {title: '表单验证'} },
        { path: 'superSlide', component: _import('plugins/superSlide'), name: 'plugins-superSlide', meta: {title: '滚动切换插件'} }
      ]
    },
    { path: '/component',
      name: '常用VUE组件',
      component: Layout,
      redirect: '/element',
      children: [
        { path: 'element', component: _import('component/elementui'), name: 'elementui', meta: {title: 'ElementUI组件'} }, // iView
        { path: 'iView', component: _import('component/iView'), name: 'iView', meta: {title: 'iView组件'} }
      ]
    },
    { path: '/404', component: _import('misc/404'), name: '404', meta: {title: '404'} }
  ]
})
