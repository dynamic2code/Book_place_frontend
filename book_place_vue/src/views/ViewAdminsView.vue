<template>
    <AdminHeaderComponent></AdminHeaderComponent>
    <div class="book_container body">
      <BackButtonComponent></BackButtonComponent>
        <AdminComponent :admins="admins"></AdminComponent>
    </div>

</template>

<script setup>
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import AdminComponent from '@/components/AdminComponent.vue';

const admins = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    created_at: '2023-01-01 12:34:56', // Replace with actual timestamp
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@example.com',
    created_at: '2023-01-02 10:45:30', // Replace with actual timestamp
  },
];
</script>

<script scoped>
</script>