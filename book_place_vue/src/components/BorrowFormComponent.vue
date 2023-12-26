<template>
  <BackButtonComponent></BackButtonComponent>
  <div class="body">
    <div class="form_container">
      <div class="form_brand">
        <span class="heading2">Book Place</span>
      </div>
      <span class="direction">Borrow {{ book.name }}</span>
      <form @submit.prevent="borrow">
        <input type="datetime-local" id="dueDate" v-model="dueDate" required />
        <button class="call_to_action" type="submit">Borrow</button>
      </form>
      <span class="direction">New here? Signup</span>
    </div>
  </div>
</template>

<script setup>
import BackButtonComponent from './BackButtonComponent.vue';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import config from '../config';

const apiUrl = `${config.baseUrl}`;
const token = localStorage.token;
const user = localStorage.user;

const route = useRoute();
const router = useRouter();
const book = ref({
  name: '',
  category: '',
  sub_category: '',
  details: '',
  image: '',
});

onMounted(async () => {
  const bookId = route.query.id;
  if (!bookId) {
    console.error('Book ID is undefined');
    return;
  }

  try {
    const response = await fetch(`${apiUrl}/books/${bookId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const {data} = await response.json();
      book.value = data;
    } else {
      console.error('Failed to fetch book details');
    }
  } catch (error) {
    console.error('Error fetching book details:', error);
  }
});

const dueDate = ref('');
const currentDate = new Date();
const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

const borrow = async () => {
  try {
    const response = await fetch(`${apiUrl}/book-loans`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        loadDate: currentTime,
        dueDate: dueDate.value,
        userId: user.id,
        bookId: route.query.id
      }),
    });

    if (response.ok) {
      console.log('Borrow successful');
      router.push('/home');
    } else {
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