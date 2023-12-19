<template>
    <BackButtonComponent></BackButtonComponent>
    <div class="body">
      <div class="form_container">
        <div class="icon">
          <img src="" alt="">
          <span>Book Place</span>
        </div>
        <span class="direction">LOGIN</span>
        <form @submit.prevent="login">
          <input type="email" id="email" v-model="email" placeholder="Your email" required />
          <input type="password" id="password" v-model="password" placeholder="Your password" required />
          <button class="call_to_action" type="submit">Login</button>
        </form>
        <button>
          <img src="" alt="">
        </button> 
        
        <span class="direction">New here? Signup</span>
      </div>
  
    </div>
  </template>
  
  <script setup>
  const url = defineProps(["url"])
  import BackButtonComponent from './BackButtonComponent.vue';
  import { ref } from 'vue';
  
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const email = ref('');
  const password = ref('');
  
  const login = async () => {
    try {
      const response = await fetch(url, {
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
        console.log('Login successful');
        router.push('/home');
      } else {
        // Handle the failure scenario, e.g., display an error message
        console.error('Login failed:', response.statusText);
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