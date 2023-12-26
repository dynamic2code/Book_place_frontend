<template>
    <div  v-for="(book, index) in books" :key="index" id="notification_container"> 
        <RouterLink :to="{ name: 'book', query: { id: book.id } }" id="split">
            <div id="image">
                <img :src= "book.image" alt="" />
            </div>        
            <div id="text">
                <span class="headline2">User {{ book.name }} added at {{ book.created_at }}</span>
                <span class="heading2">{{ book.email }}</span>
                <span class="normal_time"> from {{}}to {{ }}</span>
                
                <div id="button_holder">
                    <div id="buttons">
                        <button @click="Delete(book.id)">Delete</button>
                        <button @click="edit(book.id)">Edit</button>
                    </div>            
                </div>
                        
            </div>            
        </RouterLink>

    </div>

</template>

<script setup>
defineProps({
    books: Object
})
import config from '../config';

const apiUrl = `${config.baseUrl}/books`;

const token = localStorage.token;


const Delete = (requestId) => {
    // Define the API endpoint for the specific book
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
        throw new Error(`Failed to delete book with ID ${requestId}`);
    }
    console.log(`Book with ID ${requestId} deleted successfully.`);
    // Optionally handle success, e.g., redirect or update UI
    })
    .catch(error => {
    console.error(error.message);
    // Optionally handle errors, e.g., display an error message
    });
};

const edit = (requestId) => {
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
#split{
    display: flex;
    height: 100%;
}
#image{
    width: 30%;
    height: 100%;
    background-color: brown;
}
#image img{
    display: block;
    width: 100%;
    height: 100%;
}
#text{
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    position: relative;
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




@media (max-width: 780px) {
    #notification_container{
        height: 400px;
    }
    #split{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    #image{
        width: 100%;
        height: 50%;
        background-color: brown;
    }
    #text{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        position: relative;
    }

}

</style>