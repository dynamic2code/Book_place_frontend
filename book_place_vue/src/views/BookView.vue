<template>
    <HeaderComponent></HeaderComponent>
    <BackButtonComponent></BackButtonComponent>
    <div id="image_holder">
        <img src="./assets/images/book.image" alt="">
    </div>
    <div id="detail_holder">
        <span class="heading1">{{book.name}}</span>
        <span class="heading2">{{book.category }}</span>
        <span class="heading2">{{book.sub_category }}</span>
        <span class="normal_text">{{book.details}}</span>
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
const book = {
    name: 'The Enigmatic Mystery',
    category: 'Mystery',
    sub_category:'something',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, est eu interdum malesuada, mauris turpis elementum nisl, vitae imperdiet risus justo et purus. Sed vel dapibus metus. Quisque tristique hendrerit enim, vel accumsan felis fermentum vel. Suspendisse potenti. Maecenas euismod enim in ipsum venenatis, in laoreet tortor pharetra. Proin posuere felis nec venenatis iaculis. Aenean euismod efficitur accumsan. Nulla facilisi. Morbi varius consectetur bibendum. Sed ut ligula eu metus imperdiet auctor. Ut facilisis dolor vel tincidunt cursus. Fusce vitae aliquam mauris. Morbi vel justo quis velit lacinia feugiat. Integer a arcu in turpis pharetra aliquet vel eu sem.',
    image: 'books.jpeg',    
}

</script>

<style scoped>
#image_holder{
    width: 100%;
    height: 400px;
    background-color: brown;
    margin-bottom: 10px;
}
#detail_holder{
    display: flex;
    flex-direction: column;
}
#detail_holder > * {
  margin-bottom: 10px;
}
</style>