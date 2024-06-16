<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header></header>

  <RouterView />
  <RouterLink />
</template>

<style>
* {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f8f9fa;
}
</style>
