<template>
  <BackButtonComponent></BackButtonComponent>
  <div class="body">
    <div class="form_container">
      <div class="form_brand">
        <span class="heading2">Book Place</span>
      </div>
      <span class="direction">ADD BOOK</span>
      <form @submit.prevent="addBook">
        <input type="text" id="name" v-model="name" placeholder="Book name" required />
        <input type="text" id="publisher" v-model="publisher" placeholder="Name of Publisher" required />
        <input type="text" id="isbn" v-model="isbn" placeholder="Books ISBN" required />
        <input type="text" id="category" v-model="category" placeholder="Category" required />
        <input type="text" id="sub_category" v-model="sub_category" placeholder="Sub-category" required />
        <textarea id="description" v-model="description" placeholder="Description" required></textarea>
        <input type="number" id="pages" v-model="pages" placeholder="Pages" required />
        <input type="file" id="image" ref="fileInput" @change="handleFileChange" />
        <button class="call_to_action" type="submit">Add book</button>
      </form>
      <button>
        <img src="" alt="">
      </button>
    </div>

    <div id="scan">
      <button id="button_holder">
        <img class="icon" src="@/assets/images/qr-code-scan.png" alt="">
      </button>
    </div>
    <span id="text">Add by scanning the book coming soon</span>
  </div>
</template>

<script setup>
import BackButtonComponent from './BackButtonComponent.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import config from '../config';
import { useNotification } from "@kyvg/vue3-notification";

const { notify }  = useNotification()

const apiUrl = `${config.baseUrl}/books`;
const token = localStorage.token

const userJsonString = localStorage.user;
const userObject = JSON.parse(userJsonString);
const userId = userObject.id;

const router = useRouter();

const name = ref('');
const publisher = ref('');
const isbn = ref('');
const category = ref('');
const sub_category = ref('');
const description = ref('');
const pages = ref('');
const fileInput = ref(null);

const addBook = async () => {
  try {
    const formData = new FormData();
    formData.append('added_by', userId)
    formData.append('name', name.value);
    formData.append('publisher', publisher.value);
    formData.append('isbn', isbn.value);
    formData.append('category', category.value);
    formData.append('sub_category', sub_category.value);
    formData.append('description', description.value);
    formData.append('pages', pages.value);
    formData.append('image', fileInput.value.files[0]);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
          // 'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.ok) {
      // Handle the success scenario, e.g., redirect
      console.log('Book added successfully');
      router.push('/admin-home');
      notify({
        title: "Success",
        text: "Book added successfully!",
      });
    } else {
      // Handle the failure scenario, e.g., display an error message
      console.error('Failed to add book:', response.statusText);
      notify({
        title: "Fail",
        text: "Failed to add book:!",
      });
    }
  } catch (error) {
    // Handle network errors
    console.error('Network error:', error.message);
    notify({
        title: "Fail",
        text: "Network error:!",
      });
  }
};

const handleFileChange = () => {
  // Handle file change if needed
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
  input,textarea{
    all: unset;
    width: 90%;
    height: 50px;
    margin: 2%;
    padding-left: 3%;
    background-color: aliceblue;
    border-radius: 10px;
    border: 1px solid #000;
  }
  #scan{
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    right: 0;
    margin: 20px;
    /* background-color: aqua; */
  }

  #button_holder{
    width: auto;
    height: auto;
    border-radius: 20px;
    z-index: 5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: 50ms;
    /* margin-bottom: 10px; */
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
}
#text{
  display: none;
}
#button_holder:hover{
    z-index: 5;
    transform: scale(1.1);
}

#button_holder:hover, #text{
  display: block;
}
  </style>