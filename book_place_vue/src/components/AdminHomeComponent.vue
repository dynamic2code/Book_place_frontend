<template>
    <router-link v-for="(item, index) in go_to" :key="index" :to="item.route" class="object">
      <div class="image-container">
        <img :src="item.image" alt="" />
      </div>
    <span class="heading1">{{ item.heading }}</span>
    <span class="normal_text">{{ item.details }}</span>
    </router-link>
  </template>
  
  <script setup>
  const props = defineProps(['go_to']);
  </script>

<style scoped>
.object {
    background-color: #0099ff;
    height: 300px;
    padding: 10px;
    width: 30%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: 50ms;
    margin-bottom: 10px;
    border-radius: 20px;
}
.image-container{
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
}
.image-container img{
  display: flex;
  width: 50px;
  height: 50px;
}
.object:hover{
    z-index: 4;
    transform: scale(1.1);
  }
.object > * {
  margin-bottom: 20px;
}
@media screen and (max-width: 600px) {
    .object {
        width: 100%;
    }
}
</style>