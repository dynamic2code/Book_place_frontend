<template>
    <HeaderComponent></HeaderComponent>
    <div class="book_container body">
        <BackButtonComponent></BackButtonComponent>
        <div id="image_holder">
            <img :src=book.image alt="">
        </div>
        <div id="detail_holder">
            <span class="heading1">Name {{book.name}}</span>
            <span class="heading2">Publisher: {{book.publisher}}</span>
            <span class="heading2">Category: {{book.category }}</span>
            <span class="heading2">Sub Category: {{book.subCategory }}</span>
            <span class="normal_text">{{book.description}}</span>
        </div>        
    </div>

</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import config from '../config';

const apiUrl = `${config.baseUrl}`;
const token = localStorage.token;

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
  console.log('Book ID:', bookId); // Add this line for debugging
  if (!bookId) {
    console.error('Book ID is undefined');
    return;
  }

  // Replace the following with your actual API endpoint to fetch book details
  const bookUrl = `${apiUrl}/books/${bookId}`;
  
  try {
    const response = await fetch(bookUrl, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', // Add this if needed
      },
    });
    if (response.ok) {
      const { data } = await response.json();
      book.value = data;
    } else {
      console.error('Failed to fetch book details');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});
</script>

<style scoped>
#image_holder{
    width: 100%;
    height: 400px;
    background-color: #0099ff;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#image_holder img{
    display: block;
    width: auto;
    height: 50%;
}
#detail_holder{
    display: flex;
    flex-direction: column;
}
#detail_holder > * {
  margin-bottom: 10px;
}

</style>