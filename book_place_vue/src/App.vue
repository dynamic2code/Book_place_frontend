<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const checkLocalStorage = () => {
  const user = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  if (!user || !token) {
    // Redirect to the landing page if user or token is missing
    router.push('/');
  }
};

onMounted(checkLocalStorage);
</script>
<template>
  <router-link to="{name: '/'}"></router-link>
  <router-link to="{name: 'home'}"></router-link>
  <!-- <router-link to="{name: 'profile'}"></router-link> -->
  <div class="the_body">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.the_body{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  /* margin-top: 60px; */
}
</style>