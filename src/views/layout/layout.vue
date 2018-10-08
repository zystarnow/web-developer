<template>
  <div class="app-wrapper">
    <div class="sidebar-wrapper">
      <SideBar class="sidebar-container"/>
    </div>
    <div class="main-wrapper">
      <NavBar/>
      <AppMain/>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar'
import NavBar from './NavBar'
import AppMain from './AppMain'
export default {
  name: 'layout',
  components: {
    NavBar,
    SideBar,
    AppMain
  }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
@sidebar-width: 180px;
.app-wrapper{
  position: relative;
  height: 100%;
  width: 100%;
  .sidebar-wrapper{
    transition: width .28s;
    width: @sidebar-width;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    background-color: #304156;
    overflow: hidden;
  }
  .sidebar-container {
    width: 200px;
    height: 100%;
    overflow-y: auto;
    padding-right: 20px;
  }
  .main-wrapper{
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: @sidebar-width;
  }
}
</style>
