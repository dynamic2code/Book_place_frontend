<template>
    <HeaderComponent></HeaderComponent>  
    <div class="book_container body">
        <BookComponent :books="books" view="home"></BookComponent>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BookComponent from '@/components/BookComponent.vue';

const store = useStore();
const token = store.getters.getToken;

const books = ref([]);

// Fetch books from the API
const fetchBooks = async () => {
  try {
    console.log(token);
    const response = await fetch('http://127.0.0.1:8000/api/v1/books', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();

      // Update the books ref with the fetched data
      books.value = data;
    } else {
      console.error('Request failed:', response.statusText);
    }
  } catch (error) {
    console.error('Network error:', error.message);
  }
};

// Call fetchBooks when the component is mounted
onMounted(fetchBooks);
</script>

<style scoped>
</style>