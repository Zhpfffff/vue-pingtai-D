<template>
  <div>
    <el-header height="80px" class="headerbox">
      <div>
        <!-- 导航栏 -->

        <div class="hometitle">{{ title }}</div>
        <div class="navBar">
          <el-menu
            class="navmenu"
            mode="horizontal"
            background-color="#cce8e7"
            text-color="#000"
            active-text-color="#ffd04b"
          >
            <!-- <el-menu-item index="1">质量赋能中心</el-menu-item> -->
            <el-submenu index="1">
              <template slot="title">质量赋能中心</template>
              <el-menu-item index="2-1">标准信息中心</el-menu-item>
              <el-menu-item index="2-2">交流互动中心</el-menu-item>
              <el-menu-item index="2-3">业务办理中心</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">标准信息中心</template>
              <el-menu-item index="2-1">标准信息中心</el-menu-item>
              <el-menu-item index="2-2">交流互动中心</el-menu-item>
              <el-menu-item index="2-3">业务办理中心</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">交流互动中心</template>
              <el-menu-item index="2-1">标准信息中心</el-menu-item>
              <el-menu-item index="2-2">交流互动中心</el-menu-item>
              <el-menu-item index="2-3">业务办理中心</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">业务办理中心</template>
              <el-menu-item index="2-1">标准信息中心</el-menu-item>
              <el-menu-item index="2-2">交流互动中心</el-menu-item>
              <el-menu-item index="2-3">业务办理中心</el-menu-item>
            </el-submenu>
            <!-- <el-menu-item index="3">交流互动中心</el-menu-item>
            <el-menu-item index="4">业务办理中心</el-menu-item> -->
          </el-menu>
        </div>
        <div>
          <div class="navbtn">
            <el-button size="mini" icon="el-icon-search">登录</el-button>
            <el-button size="mini" icon="el-icon-search">注册</el-button>
          </div>
        </div>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.el-header .hometitle {
  height: 100%;
  position: absolute;
  left: 25px;
  font-size: 18px;
  font-weight: 700;
  line-height: 80px;
  line-height: 80px;
}
.headerbox {
  position: relative;

  background-color: #cce8e7;
}

.navBar {
  position: absolute;
  left: 320px;
  bottom: 0px;
}
.navmenu {
  margin-left: 50px;
}
.navbtn {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>>
</style>