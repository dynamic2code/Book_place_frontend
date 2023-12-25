<template>
    <HeaderComponent></HeaderComponent>  
    <div class="book_container body">
        <BookComponent :books="books" view="home"></BookComponent>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BookComponent from '@/components/BookComponent.vue';



// Define a ref to store the books
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

<style scoped>
</style>