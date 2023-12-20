<template>
    <AdminHeaderComponent></AdminHeaderComponent>

    <div class="book_container body">
        <BackButtonComponent></BackButtonComponent>      
        <AdminBookComponent :books="books"></AdminBookComponent>
    </div>

</template>

<script setup>
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import AdminBookComponent from '@/components/AdminBookComponent.vue';

const books = [
  {
    id: 1,
    name: 'The Great Book',
    image: 'path/to/great_book.jpg', // Replace with actual image path
    created_at: '2023-01-01 12:34:56', // Replace with actual timestamp
    email: 'john@example.com',
  },
  {
    id: 2,
    name: 'Adventure Chronicles',
    image: 'path/to/adventure_chronicles.jpg', // Replace with actual image path
    created_at: '2023-01-02 10:45:30', // Replace with actual timestamp
    email: 'jane@example.com',
  },
];
</script>

<script scoped>
</script>