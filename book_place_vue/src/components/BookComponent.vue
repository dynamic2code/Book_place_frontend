<template>

    <div v-for="(book, index) in books" :key="index" class="book" id="holder">
        <RouterLink :to="{ name: 'book', query: { id: book.id } }">
            <div id="scrollable">
                <div id="book_image_holder">
                    <img id="book_image" src="@/assets/images/book1.png" alt="">
                </div>
                <div id="detail_holder" class="details">
                    <span id="name" class="heading2">{{book.name }}</span>
                    <span id="category" class="normal_text">{{book.category}}</span>
                    <span id="details" class="normal_text">{{book.sub_category}}</span>
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

const navigateToAction = (action, book) => {
  switch (action) {
    case 'borrow':
      // console.log("book id i component",book.id)
      router.push({
        name: 'borrow_form',
        query: { id: book.id }
      });
      break;
    case 'add_to_cart':
      console.log("added to cart")
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
  }
  
  #book_image_holder {
    width: 100%;
    height: 200px;
    background-color: brown;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #detail_holder {
    display: flex;
    flex-direction: column;
    overflow: hidden; /* Hide content that exceeds max-height */
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
    background-color: blue;
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
  