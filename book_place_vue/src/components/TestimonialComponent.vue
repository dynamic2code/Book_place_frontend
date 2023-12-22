<template>
    <div id="holder">
        <div  v-for="(testimony, index) in testimonials" :key="index" id="testimony">
            <div id="person">
                <img src="" alt="">
            </div>
            <div id="data">
                <span>{{ testimony.text }}</span>
            </div>
        </div>        
    </div>


</template>

<script setup>
defineProps({
    testimonials:Object
})

</script>

<style scoped>
#testimony{
    height: 100%;
    width: 300px;
    /* background-color: black; */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 5;
    border-radius: 20px;
    padding: 10px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
#person{
    width: 100%;
    height: 70%;
    background-color: brown;
    margin-bottom: 10px;
    /* border-radius: 20px; */
}
#person img {
    display: block;
    /* border-radius: 20px; */
    width: 100%;
    height: 100%;
}
#data{
    height: 30%;
    width: 100%;
}
#holder{
    width: auto;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    /* background-color: brown; */
    padding: 20px;
}
</style>