<template>
    <HeaderComponent></HeaderComponent>
    <div class="book_container body">
      <BackButtonComponent></BackButtonComponent>
        <BookComponent :books="books" view="cart"></BookComponent>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import BookComponent from '@/components/BookComponent.vue';
import config from '../config';

const apiUrl = `${config.baseUrl}/cart`;
const token = localStorage.token;

const userJsonString = localStorage.user;
const userObject = JSON.parse(userJsonString);
const userId = userObject.id;

console.log(userId)

const books = ref([])

const getCart = async () => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      // Update the books ref with the fetched cart data
      books.value = data;
    } else {
      console.error('Failed to fetch cart:', response.statusText);
    }
  } catch (error) {
    console.error('Network error:', error.message);
  }
};

onMounted(getCart);

</script>

<style scoped>

</style>