<template>
    <AdminHeaderComponent></AdminHeaderComponent>
    <div class="book_container">
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
  { route: '/loan-request', heading: 'Loan request', details: 'View and act up on loan request' },
  { route: '/loan-extension-request', heading: 'Loan extension', details: 'Review loan extension request' },
  { route: '/returns', heading: 'Returns', details: 'Review the return request for books' },
  { route: '/reports', heading: 'Reports', details: 'View the reports from the whole library' },
  { route: '/admin-books', heading: 'Books', details: 'View and search through all books in the library' },
  { route: '/view-admins', heading: 'Admins', details: 'View all admins and their activity' },
  { route: '/users', heading: 'Users', details: 'View and search trough all users' },
];

const buttons =[
  {route:'/add-book',Image: 'left.png', name:'add book'},
  {route:'/add-user',Image: 'book_place_vue/src/assets/images/left.png', name:'add user'},
  {route:'/add-admin',Image: 'left.png', name:'add admin'},
]

</script>

<style scoped>
#admin_controls{
  position: fixed;
  bottom: 0;
  right: 0;

}
</style>