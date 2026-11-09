<template>
  <el-container v-if="Layout === 'default'" class="layout-container-demo layout-default">
    <el-header class="page-header">
      <MyHeader v-model:Layout="Layout" />
    </el-header>

    <el-container class="layout-body">
      <el-aside width="200px" class="page-aside">
        <MyAside :MenuList="MenuList" />
      </el-aside>
      <el-main class="page-main">
        <h1>Home Page</h1>
      </el-main>
    </el-container>
  </el-container>

  <el-container v-else class="layout-container-demo layout-custom">
    <el-aside width="200px" class="page-aside">
      <MyAside :MenuList="MenuList" />
    </el-aside>
    <el-container class="layout-content">
      <el-header class="page-header">
        <MyHeader v-model:Layout="Layout" />
      </el-header>
      <el-main class="page-main">
        <h1>Home Page</h1>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import { ElContainer, ElHeader, ElAside, ElMain } from "element-plus";

import MyHeader from "@/components/MyHeader.vue";
import MyAside from "@/components/MyAside.vue";

const Layout = ref("default");

const MenuList = ref([
  {
    name: "Home",
    link: "/",
    icon: "",
  },
  {
    name: "About Us",
    link: "/about",
    icon: "",
  },
]);
</script>

<style scoped>
.layout-container-demo .el-header {
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  display: flex;
  align-items: center;
}
.layout-container-demo {
  min-height: 100vh;
}
.layout-default {
  flex-direction: column;
  height: 100vh;
}
.layout-body,
.layout-content {
  flex: 1;
  min-height: 0;
}
.layout-custom {
  height: 100vh;
}
.page-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-custom .page-aside {
  height: 100vh;
}
.page-main {
  min-width: 0;
}
@media (max-width: 640px) {
  .page-aside {
    width: 150px !important;
  }
}
</style>
