<template>
    <div id="admin_button_holder">
        <RouterLink v-for="(button, index) in buttons" :key="index" :to="button.route" class="admin_button">
            <img class="icon" src="@/assets/images/cart.png" alt="">
            <span class="normal_text">{{ button.name }}</span>
        </RouterLink>        
    </div>
</template>

<script setup>
defineProps({
    buttons: Object
})

const requireImage = (imageName) => import(`@/assets/images/${imageName.toLowerCase().replace(/\s+/g, '_')}.png`);
</script>

<style scoped>
#admin_button_holder {
    width: 100px;
    height: auto;
    display: flex;
    flex-direction: column;
}

.admin_button {
    width: 90%;
    height: auto;
    padding: 2%;
    border-radius: 20px;
    z-index: 5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: 50ms;
    margin-bottom: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.admin_button:hover {
    z-index: 5;
    transform: scale(1.1);
}
</style>
