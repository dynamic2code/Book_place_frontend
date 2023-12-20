<script setup>
import CategoryComponent from '@/components/CategoryComponent.vue';
import StepsComponent from '@/components/StepsComponent.vue';
</script>

<template>

  <div class="head_fill">
    <div id="header_container">
      <div>
        <span class="heading2 ">Book place</span>
      </div>

      <div id="landing_page_buttons">
        <div class="button_holder">
          <span class="normal_text">about</span>
        </div>

        <div class="button_holder">
          <span class="normal_text">contact</span>
        </div>

        <div class="button_holder">
          <button class="call_to_action">
            <router-link to="/login">log in</router-link>
          </button>
        </div>
      </div>
    </div>       
  </div>

    
    <div class="body" id="div1">
      <div class="left_div">
        <span class="heading2">Want to immerse yourself in a world of knowledge, adventure, and imagination? </span>
        <span class="heading1">Explore our library and <span style="color: blue;">experiences endless</span> possibilities.
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

    <div class="heading">
      <span class="heading1">How to <span style="color: blue;">get an account </span>with us?</span>
    </div>
    <div class="holder body" id="div2">
        <div class="left_div" id="guy_calling_image">
          <img class="image" src="@/assets/images/55.jpeg" alt="">
        </div>
        <div class="right_div" id="guy_calling">
            <span class="heading1">To <span style="color: blue;">join</span> our library</span>
            <span class="normal_text">To initiate the process, please reach out to our library administrator. You can contact them via email or phone for assistance.For those who prefer a more hands-on approach, feel free to visit our physical library.</span>

            <a class="button heading2" href="mailto:books@bookplace.com">email admin</a>
        </div>
    </div>

    <div class="heading">
      <span class="heading1">What to<span style="color: blue;"> expect </span>at our Libraries</span>
    </div>

    <div class="holder body">
      testimonials
    </div>


    <div class="heading">
      <span class="heading1">Steps to unlocking our library services</span>
    </div>

    <div class="holder fill">

      <div id="semicircle">
        <span>
          Its as easy as
        </span>
        <StepsComponent step="1. Get an Account" details="details"></StepsComponent>
        <StepsComponent step="2. Browse for Books" details="details"></StepsComponent>
        <StepsComponent step="3.Request to Loan the Book" details="details"></StepsComponent>
      </div>

    </div>

    <div id="about_and_contact">
      <div>
        <span class="heading2">About us</span>
      </div>
      <div id="about">
        <span class="normal_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio deserunt nulla labore? Porro dolores deserunt ea officiis est pariatur culpa, minus ex aut dolor nisi doloribus facilis! Quos, nulla enim.</span>
      </div>

      <div>
        <span class="heading1">Contact</span>
      </div>

      <div id="contact">
        <a href="tel:+">
          <img class="icon" src="@/assets/images/telephone.png" alt="">
        </a>
        <a href="mailto:books@bookplace.com">
          <img class="icon" src="@/assets/images/mail.png" alt="">
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img class="icon" src="@/assets/images/chat.png" alt=""/>
        </a>
        <svg id="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L34.3,197.3C68.6,203,137,213,206,186.7C274.3,160,343,96,411,85.3C480,75,549,117,617,133.3C685.7,149,754,139,823,160C891.4,181,960,235,1029,261.3C1097.1,288,1166,288,1234,250.7C1302.9,213,1371,139,1406,101.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      </div>
      </div>
</template>

<style scoped>
#header_container{
    /* position: fixed; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: blueviolet; */
    width: 90%;
    height: 50px;
}
#landing_page_buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-right: 10px;
}
.button_holder {
  width: auto;
  /* background-color: brown; */
}
#div1{
  margin-top: 80px;
  display: flex;
  justify-content:center;
  align-items: center;
  /* background-color: blue; */
  height: 500px;
}
.left_div{
  height: 100%;
  width: 50%;
  /* background-color: blueviolet; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
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
.right_div{
  height: 100%;
  width: 50%;
  /* background-color: rgb(226, 43, 52); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.fill{
  width: 100%;
}
.holder{
    min-height: 500px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: blueviolet; */
}
#about_and_contact{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
#about{
  width: 60%;
  /* background-color: aquamarine; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

#contact{
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  height: 400px;
  /* background-color: blueviolet; */
}
.heading{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  /* background-color: aqua; */
}
.image{
  display: block;
  width: auto;
  height: 100%;
  /* background-color: aqua; */
  /* border-top-right-radius:30px; */
  /* border-top-left-radius: 50%;
  border-top-right-radius: 50%; */

}
#image1{
  bottom: 1;
  position: absolute;
}
#svg1{
  position: absolute;
  bottom: 0;
}

#semicircle{
  width: 100%;
  height: 100%;
  background-color: gray;
  /* border-top-right-radius:30%; 
  border-bottom-right-radius:30%; */
}
#svg2{
  position: absolute;
  bottom: 0;
}
#div2{
  margin-top: 30px;
  position: relative;
  /* background-color: aqua; */
}
#guy_calling{
  background-color: white;
  width: 50%;
  height: 60%;
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
  background-color: blue;
  border-radius: 20px;
  color: white;
  padding: 5px;
  width: auto;
  height: auto;
  margin: 10px;
}

@media only screen and (max-width: 768px){
  #div1{
    display: flex;
    flex-direction: column;
  }
  .holder{
    flex-direction: column;
  }
  #guy_calling{
  width: 70%;
  }

}
</style>
