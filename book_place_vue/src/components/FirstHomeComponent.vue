<template>
    <div class="holder body" id="div1">
      <div class="left_div">
        <span id="span1" class="heading15">Want to immerse yourself in a world of knowledge, adventure, and imagination? </span>
        <span class="heading1">Explore our library and <span style="color:#0099ff;">experiences endless</span> possibilities.
        </span>
        <div id="category_showcase">
          <span class="normal_text">categories:</span>
          <div id="category_holder">
            <CategoryComponent v-for="index in 10" :key="index" :data="someData" />
          </div>
        </div>
        
      </div>

      <div class="right_div">
        <img id="image1" class="image" src="@/assets/images/point.png" alt="">
        <svg id="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,213.3C672,181,768,139,864,138.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </div>
</template>

<script setup>
import CategoryComponent from '@/components/CategoryComponent.vue';
</script>

<style>
#div1{
  margin-top: 80px;
  display: flex;
  justify-content:center;
  align-items: center;
  /* background-color: blue; */
  height: 500px;
}
#image1{
  bottom: 0;
  margin-bottom: 2px;
  position: absolute;
}
#svg1{
  position: absolute;
  bottom: 0;
}
#category_showcase{
  /* background-color: blueviolet; */
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  height: 50px;
}
#category_holder{
  /* background-color: brown; */
  display: flex;
  align-items: center;
  width: 75%;
  overflow: auto;
  height: 50px;
}
@media only screen and (max-width: 768px){
  #div1{
    display: flex;
    flex-direction: column;
    height: 700px;
  }
  #span1{
    display: none;
  }
  #category_showcase{
    display: none;    
  }

}
</style>