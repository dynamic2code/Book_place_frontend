<template>
    <div class="body" id="container">
        <TestimonialComponent :testimonials="testimonials"></TestimonialComponent>
    </div>
</template>
<script setup>
import TestimonialComponent from '@/components/TestimonialComponent.vue';
const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed tristique volutpat bibendum.",
    image: "path/to/image1.jpg",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac varius mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    image: "path/to/image2.jpg",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet tristique bibendum. Proin consectetur efficitur sem, at cursus elit rhoncus nec.",
    image: "path/to/image3.jpg",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel metus at quam fringilla rhoncus. Vestibulum non justo nec libero congue vestibulum non at augue.",
    image: "path/to/image4.jpg",
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam convallis dui, nec vulputate dolor tincidunt id. Aenean quis sodales est.",
    image: "path/to/image5.jpg",
  },
];

</script>

<style scoped>
#container{
  /* background-color: blue; */
}
</style>