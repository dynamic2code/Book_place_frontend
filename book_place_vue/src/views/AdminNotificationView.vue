<template>
    <AdminHeaderComponent></AdminHeaderComponent>

    <div class="book_container body">
        <BackButtonComponent></BackButtonComponent>      
        <NotificationComponent v-for="(notify, index) in notifications" :key="index" :notification="notify"></NotificationComponent>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import NotificationComponent from '@/components/NotificationComponent.vue';
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue';

const notifications=[
  {
    time: '10:00 AM',
    heading: 'New Message',
    message: 'You have a new message from a friend.',
  },
  {
    time: '12:30 PM',
    heading: 'Reminder',
    message: 'Don\'t forget to complete your tasks for the day.',
  },
  {
    time: '3:45 PM',
    heading: 'Event Tomorrow',
    message: 'You have an event scheduled for tomorrow. Don\'t miss it!',
  },
]
</script>

<style scoped>
</style>