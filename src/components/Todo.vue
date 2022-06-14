<script setup>
import { ref } from 'vue'
const appName = "To-Do App"
let tasks = ref([
    {
        name: "Eat chpclate",
        status: "In-progress"
    },
    {
        name: "eat sandwich",
        status: "done"
    },
    {
        name: "eat sandwich 111",
        status: "done"
    }

]);
const task = ref('')
const submitTask = () => {
    if(task.value === '') alert('Enter some value');
    else {
    tasks.value.push({
        name: task.value,
        status: "to-do"
    })
    task.value = '';
    }
}
const deleteTask = (index) => {
    tasks.value.splice(index,1);

}
</script>

<template>
    <div class="mx-10">
        <h1 class="mb-5 text-center">{{ appName }}</h1>
        <div class="d-flex">
            <input v-model="task" type="text" placeholder="Enter text" class="form-control" />
            <button class="btn btn-warning rounded-0" @click="submitTask">SUBMIT</button>
        </div>
        <table class="table table-bordered mt-5">
            <thead>
                <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Status</th>
                    <th scope="col" class="text-center">#</th>
                    <th scope="col" class="text-center">#</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <td>{{ task.name }}</td>
                    <td>{{ task.status }}</td>
                    <td>
                        <div class="text-center"><span class="fa fa-pen"></span></div>
                    </td>
                    <td>
                        <div class="text-center" @click="deleteTask(index)"><span class="fa fa-trash"></span></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
</style>
