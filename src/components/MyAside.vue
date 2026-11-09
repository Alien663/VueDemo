<template>
  <el-menu router class="side-menu">
    <el-menu-item
      v-for="item in MenuList"
      :key="item.link"
      :index="item.link"
    >
      {{ item.name }}
    </el-menu-item>
  </el-menu>
</template>
<script setup>
import { defineProps } from "vue";
import { ElMenu, ElMenuItem } from "element-plus";

defineProps({
  MenuList: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.side-menu {
  height: 100%;
  border-right: none;
}
</style>

