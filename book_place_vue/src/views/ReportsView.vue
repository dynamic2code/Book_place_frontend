<template>
    <AdminHeaderComponent></AdminHeaderComponent>
    <div class="book_container body">
        <BackButtonComponent></BackButtonComponent>
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
import config from '../config';

const apiUrl = `${config.baseUrl}books/`;
</script>

<script scoped>
</script>