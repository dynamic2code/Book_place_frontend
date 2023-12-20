<template>
    <div class="graph_container">
        <canvas id="BarChart"></canvas>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

onMounted(() => {
  const ctx = document.getElementById('BarChart');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgb(255, 0, 0)',
          'rgb(0, 0, 255)',
          'rgb(255, 255, 0)',
          'rgb(0, 128, 0)',
          'rgb(128, 0, 128)',
          'rgb(255, 165, 0)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
</script>

<style scoped>
</style>
