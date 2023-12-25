<template>
  <BackButtonComponent></BackButtonComponent>
  <div class="body">
    <div class="form_container">
      <div class="icon">
        <span>Book Place</span>
      </div>
      <span class="direction">Borrow {{ book.name }}</span>
      <form @submit.prevent="borrow">
        <input type="email" id="email" v-model="email" placeholder="Your email" required />
        <input type="password" id="password" v-model="password" placeholder="Your password" required />
        <button class="call_to_action" type="submit">Borrow</button>
      </form>
      <span class="direction">New here? Signup</span>
    </div>
  </div>
</template>

<script setup>
import BackButtonComponent from './BackButtonComponent.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const book = ref({
  name: '',
  category: '',
  sub_category: '',
  details: '',
  image: '',
});

onMounted(async () => {
  const bookId = route.query.id;
  // console.log('Book ID:', bookId);
  if (!bookId) {
    console.error('Book ID is undefined');
    return;
  }

  // Replace the following with your actual API endpoint to fetch book details
  const response = await fetch(`http://127.0.0.1:8000/api/v1/books/${bookId}`);
  if (response.ok) {
    const data = await response.json();
    book.value = data;
  } else {
    console.error('Failed to fetch book details');
  }
});

const email = ref('');
const password = ref('');

const borrow = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/borrow/${book.value.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (response.ok) {
      // Handle the success scenario, e.g., redirect
      console.log('Borrow successful');
      router.push('/home');
    } else {
      // Handle the failure scenario, e.g., display an error message
      console.error('Borrow failed:', response.statusText);
    }
  } catch (error) {
    // Handle network errors
    console.error('Network error:', error.message);
  }
};
</script>

  
  <style scoped>
  .body{
    margin-left: auto;
    margin-right: auto;
    width: 90vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: blueviolet; */
  }
  form{
    display: flex;
    flex-direction: column;
  }
  .form_container{
    width: 50%;
  }
  .icon{
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    margin-bottom: 3%;
    align-items: center;
  }
  .direction{
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    margin-bottom: 3%;
    align-items: center;
  }
  input{
    all: unset;
    width: 90%;
    height: 50px;
    margin: 2%;
    padding-left: 3%;
    background-color: aliceblue;
    border-radius: 10px;
    border: 1px solid #000;
  }
  </style>