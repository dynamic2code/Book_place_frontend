<template>
    <div v-for="(loanRequest, index) in loan_requests" :key="index" id="notification_container">
      <div id="time">
        <span class="headline2">Loan request {{ loanRequest.id }} from {{ loanRequest.userName }}</span>
        <span class="heading2">{{ loanRequest.bookName }}</span>
        <span class="normal_text"> from {{ loanRequest.loanDate }} to {{ loanRequest.dueDate }}</span>        
      </div>

      <div id="button_holder">
        <div id="buttons">
          <button @click="approveRequest(loanRequest.id)">Approve</button>
          <button @click="rejectRequest(loanRequest.id)">Reject</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import config from '../config';
  defineProps({
    loan_requests: Object
  })
  import { useNotification } from "@kyvg/vue3-notification";


  const { notify }  = useNotification()

  const apiUrl = `${config.baseUrl}`;
  const token = localStorage.token;

  const loanRequests = ref([]);
  
  const fetchUserAndBookDetails = async () => {
    const token = localStorage.token; // Get the token from wherever it is stored in your application
  
    for (const loanRequest of loanRequests.value) {
      // Fetch user details
      const userResponse = await fetchUserById(loanRequest.userId, token);
      loanRequest.userName = userResponse.name;

      // Fetch book details
      const bookResponse = await fetchBookById(loanRequest.bookId, token);
      loanRequest.bookName = bookResponse.name; // Assuming name is the book property you want to display
    }
  };
  
  const fetchUserById = async (userId, token) => {
    // Implement your logic to fetch user details by ID
    const userResponse = await fetch(`${apiUrl}/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return userResponse.json();
  };
  
  const fetchBookById = async (bookId, token) => {
    // Implement your logic to fetch book details by ID
    const bookResponse = await fetch(`${apiUrl}/books/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return bookResponse.json();
  };
  
  const approveRequest = (requestId) => {
    // Logic to handle approval
    console.log(`Loan request with ID ${requestId} approved.`);
    notify({
        title: "Success",
        text: "Loan request with ID ${requestId} approved.!",
      });
  };
  
  const rejectRequest = (requestId) => {
    // Define the API endpoint 
    const deleteUrl = `${apiUrl}/book-loans/${requestId}`;

    // Make the DELETE request with the authentication token
    fetch(deleteUrl, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
    },
    })
    .then(response => {
    if (!response.ok) {
        throw new Error(`Failed to delete book with ID ${requestId}`);
    }
    // console.log(`Book with ID ${requestId} deleted successfully.`);
    notify({
        title: "Success",
        text: "Book with ID ${requestId} deleted successfully!",
      });
    // Optionally handle success, e.g., redirect or update UI
    })
    .catch(error => {
    console.error(error.message);
    // Optionally handle errors, e.g., display an error message
    });
    // console.log(`Loan request with ID ${requestId} rejected.`);
    notify({
        title: "Success",
        text: "Loan request with ID ${requestId} rejected!",
      });
  };
  
  onMounted(fetchUserAndBookDetails);
  </script>
  

<style scoped>
#notification_container{
    padding: 10px;
    width: 100%;
    height: 200px;
    /* background-color: brown; */
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: 50ms;
}
#button_holder{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
}
#buttons {
    width: 50%;
    /* height: ; */
    display: flex;
    justify-content: space-between;
    /* background-color: blueviolet; */
}
button {
    width: auto;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 5%;
    padding-right: 5%;
    border-radius: 20px;
    background-color: blue;
    color: white;
}
#notification_container:hover{
    z-index: 4;
    transform: scale(1.1);
  }

</style>