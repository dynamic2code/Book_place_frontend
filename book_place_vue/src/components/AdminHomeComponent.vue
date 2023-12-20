<template>
    <router-link v-for="(item, index) in go_to" :key="index" :to="item.route" class="object">
    <span class="heading1">{{ item.heading }}</span>
    <span class="normal_text">{{ item.details }}</span>
    </router-link>
  </template>
  
  <script setup>
  const props = defineProps(['go_to']);
  </script>

<style scoped>
.object {
    height: 300px;
    padding: 10px;
    width: 30%;
    height: auto;
    display: flex;
    flex-direction: column;
    z-index: 2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: 50ms;
    margin-bottom: 10px;
    border-radius: 20px;
}
.object:hover{
    z-index: 4;
    transform: scale(1.1);
  }
.object > * {
  margin-bottom: 50px;
}
@media screen and (max-width: 600px) {
    .object {
        width: 100%;
    }
}
</style>