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
const token = localStorage.token

const loans = ref([]);

console.log(loans)

// Fetch books from the API
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