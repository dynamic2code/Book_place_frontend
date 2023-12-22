<template>
    <div class="head_fill">
        <div id="header_container">
            <div>
                <router-link to="/admin-home">
                    <span class="heading15">Book Place</span>                
                </router-link>

            </div>
            <form @submit.prevent="handleSubmit" class="search-container">
                <input class="normal_text" v-model="searchTerm" type="text" placeholder="Search...">
                <button type="submit">
                    <img class="small_icon" src="@/assets/images/loupe.png" alt="search">
                </button>
            </form>
            <div id="button_holder">
                <div class="button" id="notification">
                    <router-link to="/admin-notification">
                        <img class="icon" src="@/assets/images/bell.png" alt="">                    
                    </router-link>

                </div>
                <!-- <div class="button"  id="cart">
                    <router-link to="/cart">
                        <img class="icon" src="@/assets/images/cart.png" alt="">
                    </router-link>

                </div> -->
                <div class="button"  id="library">
                    <router-link to="/admin-books">
                        <img class="icon" src="@/assets/images/lib.png" alt="">                    
                    </router-link>

                </div>
                <div class="button"  id="menu">
                    <img class="icon" src="@/assets/images/list.png" alt="">
                </div>
            </div>


            <div id="dropdown_menu">
                <div class="dropdown_button">
                <img class="icon" src="@/assets/images/bell.png" alt="">
                <span>Notifications</span>
                </div>
        
                <div class="dropdown_button">
                <img class="icon" src="@/assets/images/cart.png" alt="">
                <span>Books in cart</span>
                </div>
        
                <div class="dropdown_button">
                <img class="icon" src="@/assets/images/lib.png" alt="">
                <span>Personal library</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
</script>

<style scoped>
#header_container{
    /* position: fixed; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: blueviolet; */
    width: 90%;
    height: 50px;
    margin-bottom: 10px;
}
#button_holder{
    display: flex;
    justify-content: center;
    align-items: center;
}
#menu {
    display: none; /* Initially hide on larger screens */
}
#dropdown_menu {
    display: none;
    position: absolute;
    margin-top: 200px;
    top: 3;
    right: 1;
    z-index: 2;
    width: 100%;
    height: auto;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    /* display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center; 
  }

  .search-container {
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px;
}

input[type="text"] {
  border: none;
  outline: none;
  flex: 1;
}
.small_icon{
    height: 20px;
    width: auto;
}


  .dropdown_button {
    margin-left: 20px;
    height: auto;
    width: 100%;
    /* background-color: aquamarine; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    .button {
      display: none; /* Hide other buttons on small screens */
    }
  
    #menu {
      display: block; /* Show hamburger menu on small screens */
    }
    #menu:hover #dropdown_menu {
    display: block;
    }
  }
</style>