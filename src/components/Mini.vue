<script setup>
import {ref} from 'vue'
    const name="Ankur";
    let count=ref(0);
    const increment = () => {
        console.log(count.value)
        count.value++
    }
</script>

<template>
<div>{{name}}</div>
<div>Count is:{{count}}</div>
<button @click="increment">+</button>
</template>

<style>
.bg-red {
    background-color: red;
}

</style>