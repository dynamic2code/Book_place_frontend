<template>
    <AdminHeaderComponent></AdminHeaderComponent>
    <div class="book_container body">
      <BackButtonComponent></BackButtonComponent>
        <LoanComponent :loans="loans"></LoanComponent>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import LoanComponent from '@/components/LoanComponent.vue';
import config from '../config';

const apiUrl = `${config.baseUrl}/book-loans`;
// const apiUrl = `127.0.0.1:8000/api/v1/book-loans`
const loans = ref([]);

console.log(loans)

// Fetch books from the API
const fetchBooks = async () => {
  try {
    const response = await fetch(apiUrl);
    const { data } = await response.json();

    loans.value = data;
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};
// Call fetchBooks when the component is mounted
onMounted(fetchBooks);

</script>

<script scoped>
</script>