<template>
    <BackButtonComponent></BackButtonComponent>
    <div class="body">
      <div class="form_container">
        <div class="form_brand">
          <span class="heading2">Book Place</span>
        </div>
        <span class="direction">ADD BOOK</span>
        <form @submit.prevent="add_book">
          <input type="text" id="name" v-model="name" placeholder="Book name" required />
          <input type="text" id="publisher" v-model="publisher" placeholder="Name of Publisher" required />
          <input type="text" id="isbn" v-model="isbn" placeholder="Books isbn" required />
          <input type="text" id="category" v-model="category" placeholder="Category" required />
          <input type="text" id="sub_category" v-model="sub_category" placeholder="Sub-category" required />
          <input type="textarea" id="description" v-model="description" placeholder="Description" required />
          <input type="number" id="pages" v-model="pages" placeholder="Pages" required />
          <!-- <input type="file" id="image" v-model="images" placeholder="image" required /> -->
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
      <span id="text">add by scanning the book coming soon </span>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import BackButtonComponent from './BackButtonComponent.vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const url = defineProps(['url']);
  const router = useRouter();
  
  const name = ref('');
  const publisher = ref('');
  const isbn = ref('');
  const category = ref('');
  const sub_category = ref('');
  const description = ref('');
  const pages = ref('');
  // const images = ref(''); // Uncomment this line if you need to handle images
  
  const add_book = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          publisher: publisher.value,
          isbn: isbn.value,
          category: category.value,
          sub_category: sub_category.value,
          description: description.value,
          pages: pages.value,
          // images: images.value, // Uncomment this line if you need to handle images
        }),
      });
  
      if (response.ok) {
        // Handle the success scenario, e.g., redirect
        console.log('Book added successfully');
        router.push('/admin-home');
      } else {
        // Handle the failure scenario, e.g., display an error message
        console.error('Failed to add book:', response.statusText);
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