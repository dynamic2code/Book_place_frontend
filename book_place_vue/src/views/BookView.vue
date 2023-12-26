<template>
    <HeaderComponent></HeaderComponent>
    <div class="book_container body">
        <BackButtonComponent></BackButtonComponent>
        <div id="image_holder">
            <img :src=book.image alt="">
        </div>
        <div id="detail_holder">
            <span class="heading1">{{book.name}}</span>
            <span class="heading2">{{book.category }}</span>
            <span class="heading2">{{book.sub_category }}</span>
            <span class="normal_text">{{book.details}}</span>
        </div>        
    </div>

</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
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
  console.log('Book ID:', bookId); // Add this line for debugging
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