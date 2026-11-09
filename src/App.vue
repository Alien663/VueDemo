<template>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    RouterView
  }
}
</script>

<style>
</style>
