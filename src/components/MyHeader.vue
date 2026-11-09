<template>
  <el-radio-group
    :model-value="Layout"
    @update:model-value="emit('update:Layout', $event)"
  >
    <el-radio-button label="default" value="default">Default</el-radio-button>
    <el-radio-button label="custom" value="custom">Custom</el-radio-button>
  </el-radio-group>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { ElRadioGroup, ElRadioButton } from "element-plus";

defineProps({
  Layout: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:Layout"]);
</script>