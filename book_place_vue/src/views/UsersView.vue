<template>
    <AdminHeaderComponent></AdminHeaderComponent>
    <div class="book_container body">
      <BackButtonComponent></BackButtonComponent>
        <UserComponent :users="users"></UserComponent>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import UserComponent from '@/components/UserComponent.vue';
import config from '../config';

const apiUrl = `${config.baseUrl}/users`;
const token = localStorage.token

const users = ref([]);
// Fetch books from the API
const fetchUsers = async () => {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        'Content-Type': 'application/json',
        // Add other headers as needed
      },
    });
    const { data } = await response.json();
    
    // Update the books ref with the fetched data
    users.value = data;
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};
// Call fetchBooks when the component is mounted
onMounted(fetchUsers);
</script>

<script scoped>
</script>