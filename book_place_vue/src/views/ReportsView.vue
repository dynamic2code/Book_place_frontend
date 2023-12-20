<template>
    <AdminHeaderComponent></AdminHeaderComponent>
    <BackButtonComponent></BackButtonComponent>
    <div class="book_container">
        <PieChartComponent></PieChartComponent>
        <BarChartComponent></BarChartComponent>
        <LineChartComponent></LineChartComponent>
    </div>

</template>

<script setup>
import AdminHeaderComponent from '@/components/AdminHeaderComponent.vue';
import BackButtonComponent from '@/components/BackButtonComponent.vue';
import PieChartComponent from '@/components/PieChartComponent.vue';
import BarChartComponent from '@/components/BarChartComponent.vue';
import LineChartComponent from '@/components/LineChartComponent.vue';
</script>

<script scoped>
</script>