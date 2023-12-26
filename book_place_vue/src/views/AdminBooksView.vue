<template>
    <AdminHeaderComponent></AdminHeaderComponent>

    <div class="book_container body">
        <BackButtonComponent></BackButtonComponent>      
        <AdminBookComponent :books="books"></AdminBookComponent>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import AdminBookComponent from '@/components/AdminBookComponent.vue';
import config from '../config';

const apiUrl = `${config.baseUrl}/books`;
const token = localStorage.token

const books = ref([]);

const fetchBooks = async () => {
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
    books.value = data;
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

// Call fetchBooks when the component is mounted
onMounted(fetchBooks);
</script>

<script scoped>
</script>