<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <router-link to="{name: '/'}"></router-link>
  <router-link to="{name: 'home'}"></router-link>
  <!-- <router-link to="{name: 'profile'}"></router-link> -->
  <div class="body">
    <router-view></router-view>
  </div>
</template>

<style scoped>
/* .the_body{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>