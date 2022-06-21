<script setup>
import {ref} from 'vue'
import { useCounterStore } from '@/store/counter'
    const name="Ankur";
    const counter = useCounterStore()
    // let count=ref(0);
    // const increment = () => {
    //     count.value++
    // }
    // const decrement = () => {
    //     count.value--
    // }
</script>

<template>
<div>{{name}}</div>
<div>Count is:{{counter.count}}</div>
<button @click="counter.increment">+</button>
<button @click="counter.decrement">-</button>
<button @click="counter.sayHello">Say Hello</button>
</template>

<style>
.bg-red {
    background-color: red;
}

</style>