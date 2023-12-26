<template>
    <div class="holder fill">
        <div id="semicircle">
        <StepsComponent step="Get an Account" :details=details1></StepsComponent>
        <StepsComponent step="Browse for Books" :details=details2></StepsComponent>
        <StepsComponent step="Request to Loan the Book" :details=details3></StepsComponent>
        </div>
    </div>
</template>

<script setup>
import StepsComponent from '@/components/StepsComponent.vue';
const details1 = "Create an account by visiting our offices or contact an admin"
const details2 = "After logging in, browse our deep catalogue and find and explore books"
const details3 = "On finding your book it's as simple as clicking the borrow button and on your loan being approved, we will deliver your book"
</script>

<style scoped>
#semicircle{
  width: 100%;
  height: 100%;
  background-color: #0099ff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-top-right-radius:30%; 
  border-bottom-right-radius:30%; */
}
@media (max-width: 784px) {
    #semicircle{
        flex-direction: column;
    }
}
</style>