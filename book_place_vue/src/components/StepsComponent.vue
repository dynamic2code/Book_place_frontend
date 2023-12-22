<template>
    <div class="step">
        <!-- <div class="step-image">
            <img class="icon" :src='src' alt="">
        </div> -->
        <div class="step_text"> 
            <span class="heading15" style="color: #0099ff;">{{step}}</span>
            <span class="normal_text">{{details}}</span>
        </div>
    </div>
</template>

<script setup>
defineProps(['step','details'])
</script>

<style scoped>
.step{
  width: 300px;
  height: 300px;
  background-color: white;
  margin: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

}
.step_image{
  width: 10%;
}
span{
  margin-bottom: 20px;
}
.step_text{
  display: flex;
  flex-direction: column;
}
@media (max-width: 784px) {
}
</style>