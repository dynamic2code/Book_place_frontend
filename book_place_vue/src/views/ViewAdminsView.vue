<template>
    <AdminHeaderComponent></AdminHeaderComponent>
    <div class="book_container body">
      <BackButtonComponent></BackButtonComponent>
        <AdminComponent :admins="admins"></AdminComponent>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import AdminComponent from '@/components/AdminComponent.vue';
import config from '../config';

const apiUrl = `${config.baseUrl}/admin`;
const admins = ref([]);
// Fetch books from the API
const fetchAdmins = async () => {
  try {
    const response = await fetch(apiUrl);
    const { data } = await response.json();
    
    // Update the books ref with the fetched data
    admins.value = data;
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};
// Call fetchBooks when the component is mounted
onMounted(fetchAdmins);
</script>

<script scoped>
</script>