<template>
    <AdminHeaderComponent></AdminHeaderComponent>
    <div class="book_container body">
      <BackButtonComponent></BackButtonComponent>
        <LoanRequestComponent :loan_requests="loanRequests"></LoanRequestComponent>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import LoanRequestComponent from '@/components/LoanRequestComponent.vue';
import config from '../config';

const apiUrl = `${config.baseUrl}/book-loans`;
const token = localStorage.token;

const loanRequests = ref([])

const fetchLoans = async () => {
  try {
    console.log(token);
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const { data } = await response.json();

      // Update the books ref with the fetched data
      loanRequests.value = data;
    } else {
      console.error('Request failed:', response.statusText);
    }
  } catch (error) {
    console.error('Network error:', error.message);
  }
};

onMounted(fetchLoans);
</script>

<script scoped>
</script>