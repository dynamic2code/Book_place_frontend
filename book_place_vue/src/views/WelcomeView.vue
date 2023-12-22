<script setup>
import FirstHomeComponent from '@/components/FirstHomeComponent.vue';
import ThirdHomeComponent from '@/components/ThirdHomeComponent.vue';
import SecondHomeComponent from '@/components/SecondHomeComponent.vue';
import ForthHomeComponent from '@/components/ForthHomeComponent.vue'

</script>
<template>
  <div class="head_fill">
    <div id="header_container">
      <div>
        <span class="heading15">Book place</span>
      </div>

      <div id="landing_page_buttons">
        <div class="button_holder">
          <router-link class="call_to_action" to="/admin-login">admin</router-link>
        </div>

        <div class="button_holder">
          <router-link class="call_to_action" to="/login">log in</router-link>
        </div>
      </div>
    </div>       
  </div>

  <FirstHomeComponent></FirstHomeComponent>
  <div class="heading">
    <span class="heading1">How to <span style="color: #0099ff;">get an account </span>with us?</span>
  </div>
  <SecondHomeComponent></SecondHomeComponent>
  <div class="heading">
    <span class="heading1">What to<span style="color: #0099ff;"> expect </span>at our Libraries</span>
  </div>
  <ThirdHomeComponent></ThirdHomeComponent>

  <div class="heading">
    <span class="heading1">Steps to <span style="color: #0099ff;">unlocking our library</span>  services</span>
  </div>

  <ForthHomeComponent></ForthHomeComponent>

  <div id="about_and_contact">
    <div>
      <span class="heading1">About us</span>
    </div>
    <div class="holder" id="about">
      <span class="normal_text">At Book place, we're transforming the way you experience literature. Our online library offers a vast collection of books catering to diverse tastes, from timeless classics to contemporary gems. With an intuitive interface, exploring our digital shelves is a seamless journey into the world of captivating stories.</span>

      <span class="normal_text">Experience the joy of reading without leaving your home. Our exclusive door-to-door delivery service brings your chosen books directly to you. No more queues or commuting – just choose, click, and enjoy the pleasure of a good read arriving at your doorstep.</span>
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
.fill{
  width: 100%;
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
  width: 70%;
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
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  /* background-color: aqua; */
}

#svg2{
  position: absolute;
  bottom: 0;
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
