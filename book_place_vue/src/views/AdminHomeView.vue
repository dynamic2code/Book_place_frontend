<template>
    <AdminHeaderComponent></AdminHeaderComponent>
    <div class="book_container body">
        <AdminHomeComponent :go_to="go_to"></AdminHomeComponent>
        <div id="admin_controls">
          <AdminButtonComponent :buttons="buttons"></AdminButtonComponent>
        </div>
    </div>

</template>

<script setup>
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue';
import AdminHomeComponent from '@/components/AdminHomeComponent.vue';
import AdminButtonComponent from '@/components/AdminButtonComponent.vue';

const go_to = [
  { route: '/loans', heading: 'Loans', details: 'View current loans', image:'https://cdn-icons-png.flaticon.com/128/10433/10433048.png' },
  { route: '/loan-request', heading: 'Loan request', details: 'View and act up on loan request' , image: 'https://cdn-icons-png.flaticon.com/128/9913/9913638.png' },
  { route: '/loan-extension-request', heading: 'Loan extension', details: 'Review loan extension request', image: 'https://cdn-icons-png.flaticon.com/128/9386/9386925.png' },
  { route: '/returns', heading: 'Returns', details: 'Review the return request for books', image: 'https://cdn-icons-png.flaticon.com/128/4693/4693866.png' },
  { route: '/reports', heading: 'Reports', details: 'View the reports from the whole library' , image: 'https://cdn-icons-png.flaticon.com/128/10473/10473656.png'},
  { route: '/admin-books', heading: 'Books', details: 'View and search through all books in the library', image: 'https://cdn-icons-png.flaticon.com/128/3330/3330317.png' },
  { route: '/view-admins', heading: 'Admins', details: 'View all admins and their activity', image: 'https://cdn-icons-png.flaticon.com/128/2343/2343177.png' },
  { route: '/users', heading: 'Users', details: 'View and search trough all users' , image: 'https://cdn-icons-png.flaticon.com/128/1077/1077012.png'},
  
];

const buttons =[
  {route:'/add-book',image: 'https://cdn-icons-png.flaticon.com/128/8191/8191558.png', name:'add book'},
  {route:'/add-user',image: 'https://cdn-icons-png.flaticon.com/128/9634/9634123.png', name:'add user'},
  {route:'/add-admin',image: 'https://cdn-icons-png.flaticon.com/128/4885/4885627.png', name:'add admin'},
]

</script>

<style scoped>
#admin_controls{
  position: fixed;
  padding: 1%;
  bottom: 0;
  right: 0;
  /* background-color: black; */
  z-index: 6;

}
</style>