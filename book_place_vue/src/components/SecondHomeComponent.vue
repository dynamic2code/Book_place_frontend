<template>
    <div class="holder body" id="div2">
        <div class="left_div" id="guy_calling_image">
          <img class="image" src="@/assets/images/55.jpeg" alt="">
        </div>
        <div class="right_div" id="guy_calling">
            <span class="heading1">To <span style="color: #0099ff;">join</span> our library</span>
            <span class="normal_text">To initiate the process, please reach out to our library administrator. You can contact them via email or phone for assistance.For those who prefer a more hands-on approach, feel free to visit our physical library.</span>

            <a class="button heading2" href="mailto:books@bookplace.com">email admin</a>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
#div2{
  margin-top: 30px;
  position: relative;
  /* background-color: aqua; */
}
#guy_calling{
  background-color: white;
  width: 50%;
  min-height: 60%;
  height: auto;
  border-radius: 20px;
  padding: 20px;
  right: 0;
  position: absolute;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
#guy_calling_image{
  position: absolute;
  left: 0;
}
.button{
  background-color: #0099ff;
  border-radius: 20px;
  color: white;
  padding: 2%;
  width: auto;
  height: auto;
  margin-top: 20px;
 
}

@media (max-width: 784px) {
}
</style>