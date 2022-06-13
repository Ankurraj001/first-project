<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Todo from './components/Todo.vue';
import Mini from './components/Mini.vue'
</script>

<template>
  <div class="">
    <Todo />
    <!-- <Mini /> -->
  </div>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
