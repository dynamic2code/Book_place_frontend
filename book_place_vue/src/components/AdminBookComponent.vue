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

const Delete = (requestId) => {
  // Logic to handle approval
  console.log(`Loan request with ID ${requestId} approved.`);
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