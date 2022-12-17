<template>
    <button class="btn"><slot></slot></button>
</template>

<script>
    export default {
        name: 'my-button',
    }
</script>

<style scoped>
    .btn {
        padding: 10px;
        border-radius:3px;
        cursor: pointer;
        background-color:#fff;
        border: solid 1px #dc3545;
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        text-align: center;
    }
    .btn:hover {
    background-color:#dc3545;
    color:#fff;
    transition: all .3s;
}
</style>