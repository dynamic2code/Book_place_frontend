<template>
    <div  v-for="(admin, index) in admins" :key="index" id="notification_container"> 
        <div id="time">
            <span class="headline2">User {{ admin.name }} added at {{ admin.created_at }}</span>
        </div>
        <span class="heading2">{{ admin.email }}</span>
        <span class="normal_time"> from {{}}to {{ }}</span>
        <div id="button_holder">
            <div id="buttons">
                <button @click="Delete(admin.id)">Delete</button>
                <button @click="Suspend(admin.id)">Suspend</button>
            </div>            
        </div>

    </div>

</template>

<script setup>
defineProps({
    admins: Object
})
import config from '../config';

const apiUrl = `${config.baseUrl}/admin`;
const token = localStorage.token;
import { useNotification } from "@kyvg/vue3-notification";


const { notify }  = useNotification()

const Delete = (requestId) => {
    const deleteUrl = `${apiUrl}/${requestId}`;

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
        throw new Error(`Failed to delete admin with ID ${requestId}`);
    }
    // console.log(`admin with ID ${requestId} deleted successfully.`);
    location.reload();
    notify({
        title: "Success",
        text: "admin with ID ${requestId} deleted successfully.!",
      });
    })
    .catch(error => {
    console.error(error.message);
    notify({
        title: "Fail",
        text: error.message,
    });
    });
};

const Suspend = (requestId) => {
  // Logic to handle rejection
  console.log(`Loan request with ID ${requestId} rejected.`);
};
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