<template>
    <AdminHeaderComponent></AdminHeaderComponent>
    <div class="book_container body">
      <BackButtonComponent></BackButtonComponent>
        <LoanRequestComponent :loan_requests="loanRequests"></LoanRequestComponent>
    </div>

</template>

<script setup>
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import LoanRequestComponent from '@/components/LoanRequestComponent.vue';
import config from '../config';

const apiUrl = `${config.baseUrl}books/`;

const loanRequests = [
  {
    id: 1,
    time: '2023-01-01 10:00 AM',
    user_name: 'John Doe',
    book_name: 'The Great Book',
    loan_date: '2023-01-05',
    due_date: '2023-01-15',
  },
  // Add more loan request objects as needed
];
</script>

<script scoped>
</script>