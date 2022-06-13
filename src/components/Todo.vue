<script setup>
</script>

<template>
    <div>
        <div>Name : {{name}}</div>
        <div class="d-flex">
            <input type="text" placeholder="Enter text" class="form-control" />
            <button class="btn btn-warning rounded-0">SUBMIT</button>
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
                <tr>
                    <td>Mark</td>
                    <td>To-do</td>
                    <td>
                        <div class="text-center"><span class="fa fa-pen"></span></div>
                    </td>
                    <td>
                        <div class="text-center"><span class="fa fa-trash"></span></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
</style>
