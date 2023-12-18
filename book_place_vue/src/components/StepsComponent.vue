<template>
    <div class="step">
        <!-- <div class="step-image">
            <img class="icon" :src='src' alt="">
        </div> -->
        <div class="step_text"> 
            <span class="heading2">{{step}}</span>
            <span class="normal-text">{{details}}</span>
        </div>
    </div>
</template>

<script setup>
defineProps(['step','details'])
</script>

<style scoped>
.step{
  width: 300px;
  min-height: 100px;
  max-height: 200px;
  height: auto;
  background-color: white;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

}
.step_image{
  width: 10%;
}
.step_text{
  display: flex;
  flex-direction: column;
}
</style>