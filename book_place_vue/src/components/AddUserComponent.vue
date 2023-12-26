<template>
    <BackButtonComponent></BackButtonComponent>
    <div class="body">
      <div class="form_container">
        <div class="form_brand">
          <span class="heading2">Book Place</span>
        </div>
        <span class="direction">ADD USER</span>
        <form @submit.prevent="add_user">
          <input type="text" id="name" v-model="name" placeholder="User Name" required/>
          <input type="text" id="user_address" v-model="user_address" placeholder="User address" required/>
          <input type="email" id="email" v-model="email" placeholder="Your email" required />
          <input type="password" id="password" v-model="password" placeholder="Your password" required />
          <button class="call_to_action" type="submit">Login</button>
        </form>
        <button>
          <img src="" alt="">
        </button> 
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref } from 'vue';
  import BackButtonComponent from './BackButtonComponent.vue';
  import { useRouter } from 'vue-router';
  import config from '../config';


  const apiUrl = `${config.baseUrl}/users`;
  const token = localStorage.token

  const router = useRouter();
  
  const name = ref('');
  const user_address = ref('');
  const email = ref('');
  const password = ref('');
  
  const add_user = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name.value,
          address: user_address.value,
          email: email.value,
          password: password.value,
        }),
      });
  
      if (response.ok) {
        // Handle the success scenario, e.g., redirect
        console.log('User added successfully');
        router.push('/admin-home');
      } else {
        // Handle the failure scenario, e.g., display an error message
        console.error('Failed to add user:', response.statusText);
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