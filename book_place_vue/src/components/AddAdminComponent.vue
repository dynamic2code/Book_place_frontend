<template>
    <BackButtonComponent></BackButtonComponent>
    <div class="body">
      <div class="form_container">
        <div class="form_brand">
          <span class="heading2" >Book Place</span>
        </div>
        <span class="direction">ADD ADMIN</span>
        <form @submit.prevent="add_admin">
          <input type="name" id="name" v-model="name" placeholder="Your name" required />
          <input type="email" id="email" v-model="email" placeholder="Your email" required />
          <input type="password" id="password" v-model="password" placeholder="Your password" required />
          <button class="call_to_action" type="submit">Register</button>
        </form>
        <button>
          <img src="" alt="">
        </button> 
      </div>
  
    </div>
  </template>
  
  <script setup>
  const url = defineProps(["url"])
  import BackButtonComponent from './BackButtonComponent.vue';
  import { useNotification } from "@kyvg/vue3-notification";
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import config from '../config';


  const { notify }  = useNotification()

  const apiUrl = `${config.baseUrl}/admin`;
  const token = localStorage.token
  const router = useRouter();
  
  const name = ref('')
  const email = ref('');
  const password = ref('');
  
  const add_admin = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
        }),
      });

      if (response.ok) {
        // Handle the success scenario, e.g., redirect
        router.push('/admin-home');
        notify({
          title: "Success",
          text: "Admin created successfully!",
        });
      } else {
        // Handle the failure scenario, e.g., display an error message
        const errorData = await response.json();
        console.error('Admin creation failed:', errorData.message);
        notify({
          title: "Error",
          text: "Admin creation failed:!",
        });
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