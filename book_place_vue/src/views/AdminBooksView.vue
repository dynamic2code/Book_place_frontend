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

const books = ref([]);

// Fetch books from the API
const fetchBooks = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/v1/books');
    const data = await response.json();
    
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