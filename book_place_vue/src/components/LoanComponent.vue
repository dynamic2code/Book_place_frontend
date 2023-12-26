<template>
    <div  v-for="(loan, index) in loans" :key="index" id="notification_container"> 
        <div id="time">
            <span class="headline2">Request at {{ loan.time }} from {{ loan.user_name }}</span>
        </div>
        <span class="heading2">{{ loan.book_name }}</span>
        <span class="normal_time"> from {{ loan.loan_date }}to {{ loan.due_date }}</span>
        <!-- <div id="button_holder">
            <div id="buttons">
                <button @click="approveRequest(loan.id)">Approve</button>
                <button @click="rejectRequest(loan.id)">Reject</button>
            </div>            
        </div> -->

    </div>

</template>

<script setup>
defineProps({
    loans: Object
})

const approveRequest = (requestId) => {
  // Logic to handle approval
  console.log(`Loan request with ID ${requestId} approved.`);
};

const rejectRequest = (requestId) => {
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