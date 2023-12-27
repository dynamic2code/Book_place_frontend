<template>
    <AdminHeaderComponent></AdminHeaderComponent>

    <div class="book_container body">
        <BackButtonComponent></BackButtonComponent>      
        <NotificationComponent  :notification="notifications"></NotificationComponent>
  </div>
</template>

<script setup>
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue';
import { ref, onMounted } from 'vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import NotificationComponent from '@/components/NotificationComponent.vue';
import config from '../config';



const token = localStorage.token;

const userJsonString = localStorage.user;
const userObject = JSON.parse(userJsonString);
const userId = userObject.id;

const apiUrl = `${config.baseUrl}/admin-notification/${userId}`;

const notifications = ref([])

const fetchLoans = async () => {
  try {
    console.log(token);
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const { data } = await response.json();

      // Update the books ref with the fetched data
      notifications.value = data;
    } else {
      console.error('Request failed:', response.statusText);
    }
  } catch (error) {
    console.error('Network error:', error.message);
  }
};

onMounted(fetchLoans);
</script>

<style scoped>
</style>