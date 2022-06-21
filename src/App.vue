<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Todo from './components/Todo.vue';
import Mini from './components/Mini.vue';
import NotFound from './components/NotFound.vue';
import { ref, computed } from 'vue'
const routes = {
  '/': Todo,
  '/about': Mini
}
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>
  <div class="">
    <a href="#/">Todo App</a> |
  <a href="#/about">Store Counter</a> |
  <a href="#/non-existent-path">My name</a>
  <component :is="currentView" />
    <!-- <Todo />
    <Mini /> -->
  </div>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
