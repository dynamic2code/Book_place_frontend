<template>
    <HeaderComponent></HeaderComponent>
    <div class="book_container body">
      <BackButtonComponent></BackButtonComponent>
        <BookComponent v-for="(book, index) in books" :key="index" :book="book" time="1230"></BookComponent>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import BookComponent from '@/components/BookComponent.vue';
import config from '../config';

const apiUrl = `${config.baseUrl}books/`;

const books = [
  {
    name: 'Book 1',
    category: 'Fiction',
    sub_category:'something',
    details: 'Interesting details about Book 1.',
    image: 'path/to/book1/image.jpg',
  },
  {
    name: 'Book 2',
    category: 'Non-fiction',
    sub_category:'something',
    details: 'Fascinating details about Book 2.',
    image: 'path/to/book2/image.jpg',
  },
  {
    name: 'The Enigmatic Mystery',
    category: 'Mystery',
    sub_category:'something',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, est eu interdum malesuada, mauris turpis elementum nisl, vitae imperdiet risus justo et purus. Sed vel dapibus metus. Quisque tristique hendrerit enim, vel accumsan felis fermentum vel. Suspendisse potenti. Maecenas euismod enim in ipsum venenatis, in laoreet tortor pharetra. Proin posuere felis nec venenatis iaculis. Aenean euismod efficitur accumsan. Nulla facilisi. Morbi varius consectetur bibendum. Sed ut ligula eu metus imperdiet auctor. Ut facilisis dolor vel tincidunt cursus. Fusce vitae aliquam mauris. Morbi vel justo quis velit lacinia feugiat. Integer a arcu in turpis pharetra aliquet vel eu sem.',
    image: 'path/to/book1/image.jpg',
  },
  {
    name: 'The Enigmatic Mystery',
    category: 'Mystery',
    sub_category:'something',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, est eu interdum malesuada, mauris turpis elementum nisl, vitae imperdiet risus justo et purus. Sed vel dapibus metus. Quisque tristique hendrerit enim, vel accumsan felis fermentum vel. Suspendisse potenti. Maecenas euismod enim in ipsum venenatis, in laoreet tortor pharetra. Proin posuere felis nec venenatis iaculis. Aenean euismod efficitur accumsan. Nulla facilisi. Morbi varius consectetur bibendum. Sed ut ligula eu metus imperdiet auctor. Ut facilisis dolor vel tincidunt cursus. Fusce vitae aliquam mauris. Morbi vel justo quis velit lacinia feugiat. Integer a arcu in turpis pharetra aliquet vel eu sem.',
    image: 'path/to/book1/image.jpg',
  },
  {
    name: 'The Enigmatic Mystery',
    category: 'Mystery',
    sub_category:'something',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, est eu interdum malesuada, mauris turpis elementum nisl, vitae imperdiet risus justo et purus. Sed vel dapibus metus. Quisque tristique hendrerit enim, vel accumsan felis fermentum vel. Suspendisse potenti. Maecenas euismod enim in ipsum venenatis, in laoreet tortor pharetra. Proin posuere felis nec venenatis iaculis. Aenean euismod efficitur accumsan. Nulla facilisi. Morbi varius consectetur bibendum. Sed ut ligula eu metus imperdiet auctor. Ut facilisis dolor vel tincidunt cursus. Fusce vitae aliquam mauris. Morbi vel justo quis velit lacinia feugiat. Integer a arcu in turpis pharetra aliquet vel eu sem.',
    image: 'path/to/book1/image.jpg',
  },
  {
    name: 'The Enigmatic Mystery',
    category: 'Mystery',
    sub_category:'something',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, est eu interdum malesuada, mauris turpis elementum nisl, vitae imperdiet risus justo et purus. Sed vel dapibus metus. Quisque tristique hendrerit enim, vel accumsan felis fermentum vel. Suspendisse potenti. Maecenas euismod enim in ipsum venenatis, in laoreet tortor pharetra. Proin posuere felis nec venenatis iaculis. Aenean euismod efficitur accumsan. Nulla facilisi. Morbi varius consectetur bibendum. Sed ut ligula eu metus imperdiet auctor. Ut facilisis dolor vel tincidunt cursus. Fusce vitae aliquam mauris. Morbi vel justo quis velit lacinia feugiat. Integer a arcu in turpis pharetra aliquet vel eu sem.',
    image: 'path/to/book1/image.jpg',
  },
  {
    name: 'The Enigmatic Mystery',
    category: 'Mystery',
    sub_category:'something',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, est eu interdum malesuada, mauris turpis elementum nisl, vitae imperdiet risus justo et purus. Sed vel dapibus metus. Quisque tristique hendrerit enim, vel accumsan felis fermentum vel. Suspendisse potenti. Maecenas euismod enim in ipsum venenatis, in laoreet tortor pharetra. Proin posuere felis nec venenatis iaculis. Aenean euismod efficitur accumsan. Nulla facilisi. Morbi varius consectetur bibendum. Sed ut ligula eu metus imperdiet auctor. Ut facilisis dolor vel tincidunt cursus. Fusce vitae aliquam mauris. Morbi vel justo quis velit lacinia feugiat. Integer a arcu in turpis pharetra aliquet vel eu sem.',
    image: 'path/to/book1/image.jpg',
  },
  {
    name: 'The Enigmatic Mystery',
    category: 'Mystery',
    sub_category:'something',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, est eu interdum malesuada, mauris turpis elementum nisl, vitae imperdiet risus justo et purus. Sed vel dapibus metus. Quisque tristique hendrerit enim, vel accumsan felis fermentum vel. Suspendisse potenti. Maecenas euismod enim in ipsum venenatis, in laoreet tortor pharetra. Proin posuere felis nec venenatis iaculis. Aenean euismod efficitur accumsan. Nulla facilisi. Morbi varius consectetur bibendum. Sed ut ligula eu metus imperdiet auctor. Ut facilisis dolor vel tincidunt cursus. Fusce vitae aliquam mauris. Morbi vel justo quis velit lacinia feugiat. Integer a arcu in turpis pharetra aliquet vel eu sem.',
    image: 'path/to/book1/image.jpg',
  },
  {
    name: 'The Enigmatic Mystery',
    category: 'Mystery',
    sub_category:'something',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, est eu interdum malesuada, mauris turpis elementum nisl, vitae imperdiet risus justo et purus. Sed vel dapibus metus. Quisque tristique hendrerit enim, vel accumsan felis fermentum vel. Suspendisse potenti. Maecenas euismod enim in ipsum venenatis, in laoreet tortor pharetra. Proin posuere felis nec venenatis iaculis. Aenean euismod efficitur accumsan. Nulla facilisi. Morbi varius consectetur bibendum. Sed ut ligula eu metus imperdiet auctor. Ut facilisis dolor vel tincidunt cursus. Fusce vitae aliquam mauris. Morbi vel justo quis velit lacinia feugiat. Integer a arcu in turpis pharetra aliquet vel eu sem.',
    image: 'path/to/book1/image.jpg',
  },
];
</script>

<style scoped>
</style>