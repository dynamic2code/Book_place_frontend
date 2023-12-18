<script setup>
import CategoryComponent from './CategoryComponent.vue';
import StepsComponent from './StepsComponent.vue';
</script>

<template>
  <div class="body">
    <header>
      <div>
        <span class="heading2">Book place</span>
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
    </header> 
    
    <div id="div1">
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
        <img class="image" src="@/assets/images/point.jpeg" alt="">
      </div>
    </div>

    <div class="heading">
      <span class="heading2">how to get an account?</span>
    </div>
    <div class="holder">
        <div class="left_div">
          <img class="image" src="@/assets/images/55.jpeg" alt="">
        </div>
        <div class="right_div">
            <span class="heading1">To <span style="color: blue;">join</span> our library</span>
            <span class="normal_text">To initiate the process, please reach out to our library administrator. You can contact them via email or phone for assistance.For those who prefer a more hands-on approach, feel free to visit our physical library.</span>

            <a class="call_to_action" href="mailto:books@bookplace.com">email admin</a>
        </div>
    </div>

    <div class="heading">
      <span class="heading2">What to expect at our Libraries</span>
    </div>

    <div class="holder">
        <div class="left_div">
            <span class="heading1">To <span style="color: blue;">join</span> our library</span>
            <span class="normal_text">To initiate the process, please reach out to our library administrator. You can contact them via email or phone for assistance.For those who prefer a more hands-on approach, feel free to visit our physical library.</span>

            <a class="call_to_action" href="mailto:books@bookplace.com">email admin</a>          

        </div>
        <div class="right_div">
          <img class="image" src="@/assets/images/55.jpeg" alt="">
        </div>
    </div>


    <div class="heading">
      <span class="heading2">Steps to unlocking our library services</span>
    </div>

    <div class="holder">

      <div id="semicircle">
        <span>
          Its as easy as
        </span>
        <StepsComponent step="1. Get an Account" details="details"></StepsComponent>
        <StepsComponent step="2. Browse for Books" details="details"></StepsComponent>
        <StepsComponent step="3.Request to Loan the Book" details="details"></StepsComponent>
        <!-- <StepsComponent step="4. Request to Loan the Book" details="details"></StepsComponent>
        <StepsComponent step="5. Loan Gets Approved" details="details"></StepsComponent>
        <StepsComponent step="6. Book is Delivered to Your Address" details="details"></StepsComponent>
        <StepsComponent step="7. You Enjoy the Book Reading" details="details"></StepsComponent>
        <StepsComponent step="8. Request for Loan Extension if Not Done" details="details"></StepsComponent>
        <StepsComponent step="9. Loan Extension is Reviewed" details="details"></StepsComponent>
        <StepsComponent step="10. On Due Date, the Book is Collected or Returned" details="details"></StepsComponent> -->

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
        <span class="heading2">Contact</span>
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
      </div>
      </div>
  </div>
</template>

<style scoped>
header{
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-bottom: 10px;
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
}
.holder{
    /* width: 100%; */
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
  width: 60%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  height: 400px;
  /* background-color: blueviolet; */
}
.heading{
  display: flex;
  justify-content: center;
  align-items: center;
}
.image{
  width: 90%;
  height: 90%;
  background-color: aqua;
  /* border-top-right-radius:30px; */
  /* border-top-left-radius: 50%;
  border-top-right-radius: 50%; */

}

#semicircle{
  width: 100%;
  height: 100%;
  background-color:blue;
  /* border-top-right-radius:30%; 
  border-bottom-right-radius:30%; */
}

.icon{
  width: 60px;
  height: 60px;
  margin: 30px;
  /* background-color: black; */
}
@media only screen and (max-width: 768px){
  #div1{
    display: flex;
    flex-direction: column;
  }
  .holder{
    flex-direction: column;
  }

}
</style>
