<template>
    <div>
      <button @click="$router.back">
        <img src="@/assets/images/left.png" alt="Back">
      </button>
    </div>       
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  div{
      /* background-color: aquamarine; */
      margin: 10px;
      width: 40px;
  }
  button{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
  }
  button img{
      display: block;
      height: 100%;
      width: 100%;
  }
  </style>