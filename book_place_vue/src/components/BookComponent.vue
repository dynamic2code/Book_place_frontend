<template>

    <div v-for="(book, index) in books" :key="index" class="book" id="holder">
        <RouterLink :to="{ name: 'book', query: { id: book.id } }">
            <div id="scrollable">
                <div id="book_image_holder">
                    <img id="book_image" :src="book.image" alt="">
                </div>
                <div id="detail_holder" class="details">  
                    <span id="category" class="normal_text"><span id="name" class="heading2" style="color: #0099ff;">{{book.name }}</span> in {{book.category}} category {{book.sub_category}} sub-category</span>
                </div>            
            </div>        
        </RouterLink>
        <div id="buttons">
            <button @click="navigateToAction(button1.action, book)">
            <span class="heading2">{{ button1.text }}</span>
            </button>
            <button @click="navigateToAction(button2.action, book)">
            <span class="heading2">{{ button2.text }}</span>
            </button>
        </div>
    </div>
  </template>
  
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const token = localStorage.token;
import { useNotification } from "@kyvg/vue3-notification";


const { notify }  = useNotification()
const userJsonString = localStorage.user;
const userObject = JSON.parse(userJsonString);
const userId = userObject.id;

import config from '../config';

const apiUrl = `${config.baseUrl}`;

 const obj = defineProps({
      books: Object,
      view: String,
      time: String
  })

  const { button1, button2 } = button_by_view(obj);

  function button_by_view(obj) {
  const buttons = {
    button1: {
      action: '',
      text: ''
    },
    button2: {
      action: '',
      text: ''
    }
  };

  if (obj.view === 'home') {
    buttons.button1.action = 'borrow';
    buttons.button1.text = 'Borrow';
    buttons.button2.action = 'add_to_cart';
    buttons.button2.text = 'Add to Cart';
  } else if (obj.view === 'cart') {
    buttons.button1.action = 'borrow';
    buttons.button1.text = 'Borrow';
    buttons.button2.action = 'remove';
    buttons.button2.text = 'Remove from Cart';
  }else{
    buttons.button1.action = 'return';
    buttons.button1.text = 'Return Book';
    buttons.button2.action = '';
    buttons.button2.text = 'by ' + obj.time;
  }

  return buttons;
}

const navigateToAction = async (action, book) => {
  switch (action) {
    case 'borrow':
      // console.log("book id i component",book.id)
      router.push({
        name: 'borrow_form',
        query: { id: book.id }
      });
      break;

    case 'add_to_cart':
      try {
          const response = await fetch(`${apiUrl}/cart`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
              bookId: book.id,
              userId: userId
            }),
          });

          if (response.ok) {
            // Handle the success scenario, e.g., display a success message
            // console.log('Added to Cart successfully');
            notify({
              title: "Success",
              text: "Added to Cart successfully!",
            });
          } else {
            // Handle the failure scenario, e.g., display an error message
            // console.error('Failed to add to Cart:', response.statusText);
            notify({
                title: "Fail",
                text: 'Failed to add to Cart:'+ response.statusText,
            });
          }
        } catch (error) {
          // Handle network errors
          // console.error('Network error:', error.message);
          notify({
              title: "Fail",
              text: "Network error",
          });
        }
      break;
    case 'remove':
      router.push({ name: 'lib' });
      break;
    case 'return':
      router.push({ name: 'lib' });
      break;
    default:
      break;
  }
};
  </script>
  
  <style scoped>
  #holder {
    padding: 10px;
    width: 30%;
    height: auto;
    display: flex;
    flex-direction: column;
    z-index: 2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: 50ms;
    margin-bottom: 10px;
    /* border: 2px solid #0099ff; */
  }
  
  #book_image_holder {
    width: 100%;
    height: 200px;
    background-color: #0099ff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #book_image_holder img{
    display: block;
    height: 100%;
    width: 100%;
  }
  
  #detail_holder {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 10px;
     /* Hide content that exceeds max-height */
  }
  
  .details {
    max-height: 60px; /* Set your desired max-height */
    transition: max-height 0.5s ease; /* Add a smooth transition effect */
  }
  
  #buttons {
    display: flex;
    justify-content: space-between;
  }
  
  button {
    width: auto;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 5%;
    padding-right: 5%;
    border-radius: 20px;
    background-color: #0099ff;
    color: white;
  }
  
  /* Hover effect to expand details */
  #holder:hover{
    z-index: 4;
    transform: scale(1.1);
  }
  #holder:hover .details {
    /* max-height: 70px; */
  }
  #holder:hover #scrollable{
    overflow: auto;
  }
@media (max-width: 780px) {
    #holder {
        width: 100%;
    }
}

  </style>
  